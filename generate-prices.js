function generateStorePrices(material) {
  return [
    {
      store: "OBI",
      price: (material.price * 1.05).toFixed(2),
      available: true
    },
    {
      store: "Hornbach",
      price: (material.price * 0.98).toFixed(2),
      available: true
    },
    {
      store: "Bauhaus",
      price: (material.price * 1.02).toFixed(2),
      available: true
    },
    {
      store: "toom",
      price: (material.price * 1.08).toFixed(2),
      available: Math.random() > 0.3
    },
    {
      store: "hagebau",
      price: (material.price * 1.03).toFixed(2),
      available: Math.random() > 0.2
    }
  ];
}
