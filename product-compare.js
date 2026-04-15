(function () {
  "use strict";

  function normalize(text) {
    return String(text).toLowerCase().trim();
  }

  function findMaterial(input) {
    return MATERIALS_DB.find(m =>
      normalize(m.name).includes(normalize(input))
    );
  }

  function applyPrices() {
    const productInput = document.getElementById("productInput");
    if (!productInput) return;

    const product = productInput.value;
    const material = findMaterial(product);

    if (!material) return;

    const prices = generateStorePrices(material);

    const cards = document.querySelectorAll(".result-card");

    cards.forEach(card => {
      const nameEl = card.querySelector(".result-name");
      const left = card.querySelector(".result-left");

      if (!nameEl || !left) return;

      const name = nameEl.textContent.toLowerCase();

      const match = prices.find(p =>
        name.includes(p.store.toLowerCase())
      );

      // Alte Anzeige löschen
      const old = card.querySelector(".price-box");
      if (old) old.remove();

      const div = document.createElement("div");
      div.className = "price-box";

      if (match && match.available) {
        div.innerHTML = `Preis: ${match.price.toFixed(2).replace(".", ",")} €`;
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
      setTimeout(applyPrices, 800);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
