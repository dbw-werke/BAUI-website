function generateStorePrices(material) {
  const base = Number(material.price);

  return [
    { store: "OBI", price: +(base * 1.05).toFixed(2), available: true },
    { store: "Hornbach", price: +(base * 0.98).toFixed(2), available: true },
    { store: "Bauhaus", price: +(base * 1.02).toFixed(2), available: true },
    { store: "toom", price: +(base * 1.08).toFixed(2), available: true },
    { store: "hagebau", price: +(base * 1.03).toFixed(2), available: true },
    { store: "BayWa", price: +(base * 1.01).toFixed(2), available: true },
    { store: "Würth", price: +(base * 1.12).toFixed(2), available: true },
    { store: "Raab Karcher", price: +(base * 1.04).toFixed(2), available: true },
    { store: "Späth", price: +(base * 1.00).toFixed(2), available: true },
    { store: "Späth-Knoll", price: +(base * 1.06).toFixed(2), available: true }
  ];
}
