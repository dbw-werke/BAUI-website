const STORE_TEMPLATE = {
  estimated_price: null,
  official_price: null,
  availability_status: "unknown",
  stock_quantity: null,
  data_source: "manual_estimate",
  product_url: null,
  last_updated: null
};

function price(estimatedPrice) {
  return {
    ...STORE_TEMPLATE,
    estimated_price: estimatedPrice
  };
}

const MATERIALS_DB = [
  {
    material_id: "knauf_uniflott_25kg",
    name: "Knauf Uniflott 25kg",
    category: "Trockenbau",
    unit: "Sack",
    aliases: ["uniflott", "uniflot", "spachtel", "spachtelmasse", "fugenspachtel", "knauf spachtel"],
    storePrices: {
      OBI: price(18.39),
      Hornbach: price(17.19),
      Bauhaus: price(17.89),
      toom: price(18.79),
      hagebau: price(18.09),
      BayWa: price(17.99),
      "Würth": price(19.49),
      "Raab Karcher": price(18.29),
      "Späth": price(17.99),
      "Späth-Knoll": price(18.49)
    }
  },
  {
    material_id: "rigips_bauplatte_12_5mm",
    name: "Rigips Bauplatte 12.5mm",
    category: "Trockenbau",
    unit: "Platte",
    aliases: ["rigips", "regips", "rigibs", "rigipsplatte", "gipsplatte", "bauplatte", "trockenbauplatte"],
    storePrices: {
      OBI: price(10.49),
      Hornbach: price(9.69),
      Bauhaus: price(10.09),
      toom: price(10.79),
      hagebau: price(10.29),
      BayWa: price(10.19),
      "Würth": price(11.29),
      "Raab Karcher": price(10.39),
      "Späth": price(9.99),
      "Späth-Knoll": price(10.59)
    }
  },
  {
    material_id: "knauf_gipskartonplatte_12_5mm",
    name: "Knauf Gipskartonplatte 12.5mm",
    category: "Trockenbau",
    unit: "Platte",
    aliases: ["gipskarton", "gipskartonplatte", "knauf platte", "trockenbauplatte knauf"],
    storePrices: {
      OBI: price(10.99),
      Hornbach: price(10.19),
      Bauhaus: price(10.59),
      toom: price(11.29),
      hagebau: price(10.79),
      BayWa: price(10.69),
      "Würth": price(11.79),
      "Raab Karcher": price(10.89),
      "Späth": price(10.49),
      "Späth-Knoll": price(11.09)
    }
  },
  {
    material_id: "perlfix",
    name: "Knauf Perlfix",
    category: "Trockenbau",
    unit: "Sack",
    aliases: ["perlfix", "knauf perlfix", "ansatzgips", "ansetzgips", "plattenkleber", "gipskleber", "klebegips"],
    storePrices: {
      OBI: price(11.99),
      Hornbach: price(10.99),
      Bauhaus: price(11.49),
      toom: price(12.49),
      hagebau: price(11.89),
      BayWa: price(11.79),
      "Würth": price(12.99),
      "Raab Karcher": price(12.49),
      "Späth": price(11.99),
      "Späth-Knoll": price(12.49)
    }
  },
  {
    material_id: "rotband",
    name: "Knauf Rotband",
    category: "Putz",
    unit: "Sack",
    aliases: ["rotband", "knauf rotband", "gipsputz", "putz", "haftputz"],
    storePrices: {
      OBI: price(14.99),
      Hornbach: price(13.99),
      Bauhaus: price(14.49),
      toom: price(15.49),
      hagebau: price(14.89),
      BayWa: price(14.79),
      "Würth": price(15.99),
      "Raab Karcher": price(14.99),
      "Späth": price(14.49),
      "Späth-Knoll": price(15.19)
    }
  },
  {
    material_id: "acryl_weiss_310ml",
    name: "Acryl Weiß 310ml",
    category: "Trockenbau",
    unit: "Kartusche",
    aliases: ["acryl", "maleracryl", "weiß acryl", "weiss acryl", "fugenacryl", "kartusche"],
    storePrices: {
      OBI: price(2.99),
      Hornbach: price(2.49),
      Bauhaus: price(2.79),
      toom: price(3.19),
      hagebau: price(2.89),
      BayWa: price(2.69),
      "Würth": price(3.49),
      "Raab Karcher": price(2.99),
      "Späth": price(2.79),
      "Späth-Knoll": price(3.09)
    }
  },
  {
    material_id: "cw_profil_50",
    name: "CW Profil 50",
    category: "Trockenbau",
    unit: "Stück",
    aliases: ["cw", "cw profil", "cw 50", "ständerprofil", "staenderprofil", "wandprofil"],
    storePrices: {
      OBI: price(5.09),
      Hornbach: price(4.59),
      Bauhaus: price(4.89),
      toom: price(5.29),
      hagebau: price(4.99),
      BayWa: price(4.79),
      "Würth": price(5.69),
      "Raab Karcher": price(5.09),
      "Späth": price(4.79),
      "Späth-Knoll": price(5.19)
    }
  },
  {
    material_id: "uw_profil_50",
    name: "UW Profil 50",
    category: "Trockenbau",
    unit: "Stück",
    aliases: ["uw", "uw profil", "uw 50", "bodenprofil", "deckenprofil", "u profil"],
    storePrices: {
      OBI: price(4.69),
      Hornbach: price(4.19),
      Bauhaus: price(4.49),
      toom: price(4.89),
      hagebau: price(4.59),
      BayWa: price(4.39),
      "Würth": price(5.19),
      "Raab Karcher": price(4.69),
      "Späth": price(4.39),
      "Späth-Knoll": price(4.79)
    }
  },
  {
    material_id: "ud_profil_28",
    name: "UD Profil 28",
    category: "Trockenbau",
    unit: "Stück",
    aliases: ["ud", "ud profil", "ud 28", "randprofil decke", "decken randprofil"],
    storePrices: {
      OBI: price(3.49),
      Hornbach: price(2.99),
      Bauhaus: price(3.19),
      toom: price(3.59),
      hagebau: price(3.39),
      BayWa: price(3.29),
      "Würth": price(3.89),
      "Raab Karcher": price(3.49),
      "Späth": price(3.19),
      "Späth-Knoll": price(3.59)
    }
  },
  {
    material_id: "cd_profil_60_27",
    name: "CD Profil 60/27",
    category: "Trockenbau",
    unit: "Stück",
    aliases: ["cd", "cd profil", "cd 60 27", "deckenprofil", "cd decke"],
    storePrices: {
      OBI: price(5.49),
      Hornbach: price(4.99),
      Bauhaus: price(5.19),
      toom: price(5.79),
      hagebau: price(5.39),
      BayWa: price(5.29),
      "Würth": price(5.99),
      "Raab Karcher": price(5.49),
      "Späth": price(5.19),
      "Späth-Knoll": price(5.59)
    }
  },
  {
    material_id: "schnellbauschrauben_25mm",
    name: "Schnellbauschrauben 25mm",
    category: "Trockenbau",
    unit: "Packung",
    aliases: ["schnellbauschrauben", "schrauben", "rigipsschrauben", "trockenbauschrauben", "gipskartonschrauben"],
    storePrices: {
      OBI: price(7.49),
      Hornbach: price(6.79),
      Bauhaus: price(7.09),
      toom: price(7.89),
      hagebau: price(7.39),
      BayWa: price(7.19),
      "Würth": price(8.49),
      "Raab Karcher": price(7.59),
      "Späth": price(7.09),
      "Späth-Knoll": price(7.69)
    }
  },
  {
    material_id: "tiefengrund",
    name: "Tiefengrund",
    category: "Grundierung",
    unit: "Kanister",
    aliases: ["tiefengrund", "grundierung", "grund", "primer"],
    storePrices: {
      OBI: price(19.99),
      Hornbach: price(18.99),
      Bauhaus: price(19.49),
      toom: price(20.49),
      hagebau: price(19.89),
      BayWa: price(19.79),
      "Würth": price(21.99),
      "Raab Karcher": price(20.49),
      "Späth": price(19.99),
      "Späth-Knoll": price(20.99)
    }
  },
  {
    material_id: "haftgrund",
    name: "Haftgrund",
    category: "Grundierung",
    unit: "Kanister",
    aliases: ["haftgrund", "betonkontakt", "haftprimer", "kontaktgrund"],
    storePrices: {
      OBI: price(24.99),
      Hornbach: price(22.99),
      Bauhaus: price(23.99),
      toom: price(25.49),
      hagebau: price(24.89),
      BayWa: price(24.79),
      "Würth": price(26.99),
      "Raab Karcher": price(24.99),
      "Späth": price(24.49),
      "Späth-Knoll": price(25.49)
    }
  }
];

const MATERIAL_ALIASES = {};

MATERIALS_DB.forEach(material => {
  material.aliases.forEach(alias => {
    MATERIAL_ALIASES[alias] = material.name;
  });

  MATERIAL_ALIASES[material.name.toLowerCase()] = material.name;
});
