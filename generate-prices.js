function generateStorePrices(material) {
  if (!material || !material.storePrices) return [];

  return Object.entries(material.storePrices).map(([store, price]) => ({
    store,
    price: Number(price),
    available: true
  }));
}
