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
        if (
          normalize(alias) === q ||
          normalize(alias).includes(q) ||
          q.includes(normalize(alias))
        ) {
          return target;
        }
      }
    }

    const direct = MATERIALS_DB.find(item => {
      const materialName = normalize(item.name);

      const nameMatch =
        materialName === q ||
        materialName.includes(q) ||
        q.includes(materialName);

      const aliasMatch = Array.isArray(item.aliases)
        ? item.aliases.some(alias => {
            const normalizedAlias = normalize(alias);
            return (
              normalizedAlias === q ||
              normalizedAlias.includes(q) ||
              q.includes(normalizedAlias)
            );
          })
        : false;

      return nameMatch || aliasMatch;
    });

    return direct ? direct.name : null;
  }

  function findMaterial(input) {
    const resolvedName = resolveMaterialName(input);

    if (!resolvedName) return null;

    return (
      MATERIALS_DB.find(
        item => normalize(item.name) === normalize(resolvedName)
      ) || null
    );
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
        div.innerHTML = `${match.label}: ${Number(match.price)
          .toFixed(2)
          .replace(".", ",")} €`;
      } else {
        div.innerHTML = "Preis: nicht verfügbar";
      }

      left.appendChild(div);
    });
  }

  function getMaterialSuggestions(query) {
    const q = normalize(query);

    if (!q || q.length < 2) return [];

    return MATERIALS_DB.filter(material => {
      const nameMatch = normalize(material.name).includes(q);

      const aliasMatch = Array.isArray(material.aliases)
        ? material.aliases.some(alias => normalize(alias).includes(q))
        : false;

      return nameMatch || aliasMatch;
    }).slice(0, 6);
  }

  function renderSuggestions(query, productInput, suggestionsBox) {
    const suggestions = getMaterialSuggestions(query);

    suggestionsBox.innerHTML = "";

    if (!suggestions.length) {
      suggestionsBox.classList.remove("active");
      return;
    }

    suggestions.forEach(material => {
      const item = document.createElement("button");

      item.type = "button";
      item.className = "suggestion-item";
      item.textContent = material.name;

      item.addEventListener("click", () => {
        productInput.value = material.name;
        suggestionsBox.innerHTML = "";
        suggestionsBox.classList.remove("active");
      });

      suggestionsBox.appendChild(item);
    });

    suggestionsBox.classList.add("active");
  }

  function init() {
    const form = document.getElementById("searchForm");
    const productInput = document.getElementById("productInput");
    const suggestionsBox = document.getElementById("materialSuggestions");

    if (form) {
      form.addEventListener("submit", () => {
        setTimeout(applyPrices, 900);
      });
    }

    if (productInput && suggestionsBox) {
      productInput.addEventListener("input", event => {
        renderSuggestions(event.target.value, productInput, suggestionsBox);
      });

      productInput.addEventListener("blur", () => {
        setTimeout(() => {
          suggestionsBox.classList.remove("active");
        }, 150);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
