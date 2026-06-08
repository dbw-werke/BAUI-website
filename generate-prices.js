function generateStorePrices(material) {
  if (!material || !material.storePrices) return [];

  return Object.entries(material.storePrices).map(([store, priceData]) => {
    const isOldFormat = typeof priceData === "number";

    const estimatedPrice = isOldFormat
      ? priceData
      : priceData.estimated_price ?? null;

    const officialPrice = isOldFormat
      ? null
      : priceData.official_price ?? null;

    const finalPrice = officialPrice ?? estimatedPrice;

    return {
      store,
      estimated_price: estimatedPrice,
      official_price: officialPrice,
      price: finalPrice,
      price_type: officialPrice !== null ? "official" : "estimated",
      label: officialPrice !== null ? "Live-Preis" : "ca.-Preis",
      available: finalPrice !== null,
      availability_status: isOldFormat
        ? "unknown"
        : priceData.availability_status || "unknown",
      data_source: isOldFormat
        ? "manual_estimate"
        : priceData.data_source || "manual_estimate",
      last_updated: isOldFormat
        ? null
        : priceData.last_updated || null
    };
  });
}
