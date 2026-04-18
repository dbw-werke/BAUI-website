(function () {
  "use strict";

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss");
  }

  function resolveMaterialName(input) {
    const q = normalize(input);

    if (!q) return null;

    if (typeof MATERIAL_ALIASES !== "undefined") {
      for (const [alias, target] of Object.entries(MATERIAL_ALIASES)) {
        if (normalize(alias) === q) {
          return target;
        }
      }
    }

    const direct = MATERIALS_DB.find(
      item =>
        normalize(item.name) === q ||
        normalize(item.name).includes(q) ||
        q.includes(normalize(item.name))
    );

    return direct ? direct.name : null;
  }

  function findMaterial(input) {
    const resolvedName = resolveMaterialName(input);

    if (!resolvedName) return null;

    return MATERIALS_DB.find(
      item => normalize(item.name) === normalize(resolvedName)
    ) || null;
  }

  function applyPrices() {
    const productInput = document.getElementById("productInput");
    if (!productInput) return;

    const material = findMaterial(productInput.value);

    if (!material) {
      console.log("Kein Material gefunden für:", productInput.value);
      return;
    }

    const prices = generateStorePrices(material);
    const cards = document.querySelectorAll(".result-card");

    cards.forEach(card => {
      const nameEl = card.querySelector(".result-name");
      const left = card.querySelector(".result-left");

      if (!nameEl || !left) return;

      const storeName = normalize(nameEl.textContent);

      const match = prices.find(priceObj =>
        storeName.includes(normalize(priceObj.store))
      );

      const old = card.querySelector(".price-box");
      if (old) old.remove();

      const div = document.createElement("div");
      div.className = "price-box";

      if (match && match.available) {
        div.innerHTML = `Preis: ${Number(match.price).toFixed(2).replace(".", ",")} €`;
      } else {
        div.innerHTML = `Preis: nicht verfügbar`;
      }

      left.appendChild(div);
    });
  }

  function init() {
    const form = document.getElementById("searchForm");
    if (!form) return;

    form.addEventListener("submit", () => {
      setTimeout(applyPrices, 900);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
