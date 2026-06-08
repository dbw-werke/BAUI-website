function generateStorePrices(material) {
  if (!material || !material.storePrices) return [];

  return Object.entries(material.storePrices).map(([store, priceData]) => {
    const estimatedPrice = priceData.estimated_price ?? null;
    const officialPrice = priceData.official_price ?? null;
    const finalPrice = officialPrice ?? estimatedPrice;

    return {
      store,
      store_name: priceData.store_name || store,
      estimated_price: estimatedPrice,
      official_price: officialPrice,
      price: finalPrice,
      price_type: officialPrice !== null ? "official" : "estimated",
      label: officialPrice !== null ? "Live-Preis" : "ca.-Preis",
      available: finalPrice !== null,
      availability_status: priceData.availability_status || "unknown",
      stock_quantity: priceData.stock_quantity ?? null,
      data_source: priceData.data_source || "manual_estimate",
      product_url: priceData.product_url || null,
      last_updated: priceData.last_updated || null
    };
  });
}
