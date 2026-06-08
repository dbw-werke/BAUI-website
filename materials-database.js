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
    aliases: [
      "uniflott", "uniflot", "uniflott sack", "spachtel", "spachtelmasse",
      "fugenfueller", "fugenfüller", "fugenspachtel", "knauf spachtel",
      "trockenbau spachtel", "gips spachtel"
    ],
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
    material_id: "knauf_uniflott_finish",
    name: "Knauf Uniflott Finish",
    category: "Trockenbau",
    unit: "Eimer",
    aliases: [
      "uniflott finish", "finish", "fertigspachtel", "feinspachtel",
      "knauf finish", "spachtel fertig", "fugenfinish"
    ],
    storePrices: {
      OBI: price(12.59),
      Hornbach: price(11.79),
      Bauhaus: price(12.19),
      toom: price(12.89),
      hagebau: price(12.49),
      BayWa: price(12.29),
      "Würth": price(13.29),
      "Raab Karcher": price(12.69),
      "Späth": price(12.19),
      "Späth-Knoll": price(12.79)
    }
  },
  {
    material_id: "rigips_vario_fugenspachtel",
    name: "Rigips VARIO Fugenspachtel",
    category: "Trockenbau",
    unit: "Sack",
    aliases: [
      "vario", "rigips vario", "fugenspachtel", "fugen spachtel",
      "spachtel rigips", "platten spachtel", "fugenmasse"
    ],
    storePrices: {
      OBI: price(15.29),
      Hornbach: price(14.19),
      Bauhaus: price(14.79),
      toom: price(15.59),
      hagebau: price(15.09),
      BayWa: price(14.89),
      "Würth": price(16.19),
      "Raab Karcher": price(15.19),
      "Späth": price(14.99),
      "Späth-Knoll": price(15.39)
    }
  },
  {
    material_id: "rigips_bauplatte_12_5mm",
    name: "Rigips Bauplatte 12.5mm",
    category: "Trockenbau",
    unit: "Platte",
    aliases: [
      "rigips", "regips", "rigibs", "rigipsplatte", "regipsplatte",
      "gipsplatte", "bauplatte", "trockenbauplatte", "platte",
      "weisse platte", "weiße platte"
    ],
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
    aliases: [
      "gipskarton", "gipskartonplatte", "knauf platte",
      "knauf gipsplatte", "kartonplatte", "trockenbauplatte knauf"
    ],
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
    material_id: "feuchtraumplatte_12_5mm",
    name: "Feuchtraumplatte 12.5mm",
    category: "Trockenbau",
    unit: "Platte",
    aliases: [
      "feuchtraumplatte", "feuchtplatte", "grüne platte", "gruene platte",
      "bad platte", "badplatte", "imprägnierte platte", "impraegnierte platte",
      "grüne rigips", "gruene rigips", "grüne gipsplatte"
    ],
    storePrices: {
      OBI: price(12.99),
      Hornbach: price(12.19),
      Bauhaus: price(12.59),
      toom: price(13.39),
      hagebau: price(12.89),
      BayWa: price(12.79),
      "Würth": price(13.99),
      "Raab Karcher": price(12.99),
      "Späth": price(12.49),
      "Späth-Knoll": price(13.09)
    }
  },
  {
    material_id: "brandschutzplatte_12_5mm",
    name: "Brandschutzplatte 12.5mm",
    category: "Trockenbau",
    unit: "Platte",
    aliases: [
      "brandschutzplatte", "feuerplatte", "rote platte", "feuerschutzplatte",
      "f90 platte", "rf platte", "brandplatte", "brandschutz rigips"
    ],
    storePrices: {
      OBI: price(14.49),
      Hornbach: price(13.69),
      Bauhaus: price(14.09),
      toom: price(14.89),
      hagebau: price(14.39),
      BayWa: price(14.19),
      "Würth": price(15.39),
      "Raab Karcher": price(14.49),
      "Späth": price(13.99),
      "Späth-Knoll": price(14.69)
    }
  },
  {
    material_id: "cw_profil_50",
    name: "CW Profil 50",
    category: "Trockenbau",
    unit: "Stück",
    aliases: [
      "cw", "cw profil", "cw 50", "ständer", "staender",
      "ständerprofil", "staenderprofil", "wandprofil", "metallprofil"
    ],
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
    aliases: [
      "uw", "uw profil", "uw 50", "bodenprofil", "deckenprofil",
      "u profil", "randprofil", "metallprofil u"
    ],
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
    material_id: "schnellbauschrauben_25mm",
    name: "Schnellbauschrauben 25mm",
    category: "Trockenbau",
    unit: "Packung",
    aliases: [
      "schnellbauschrauben", "schrauben", "rigipsschrauben",
      "trockenbauschrauben", "gipskartonschrauben", "25mm schrauben",
      "schwarze schrauben"
    ],
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
    material_id: "fugendeckstreifen",
    name: "Fugendeckstreifen",
    category: "Trockenbau",
    unit: "Rolle",
    aliases: [
      "fugendeckstreifen", "fugenband", "bewehrungsstreifen",
      "papierstreifen", "glasfaserstreifen", "fugen streifen",
      "band für fugen", "band fuer fugen"
    ],
    storePrices: {
      OBI: price(3.99),
      Hornbach: price(3.29),
      Bauhaus: price(3.59),
      toom: price(4.19),
      hagebau: price(3.89),
      BayWa: price(3.69),
      "Würth": price(4.49),
      "Raab Karcher": price(3.99),
      "Späth": price(3.59),
      "Späth-Knoll": price(4.09)
    }
  },
  {
    material_id: "steinwolle_40mm",
    name: "Steinwolle 40mm",
    category: "Trockenbau",
    unit: "Paket",
    aliases: [
      "steinwolle", "dämmung", "daemmung", "wolle", "mineralwolle",
      "trennwanddämmung", "trennwanddaemmung", "isolierung",
      "dämmplatte", "daemmplatte", "40mm dämmung"
    ],
    storePrices: {
      OBI: price(9.59),
      Hornbach: price(8.69),
      Bauhaus: price(9.09),
      toom: price(9.99),
      hagebau: price(9.49),
      BayWa: price(9.19),
      "Würth": price(10.49),
      "Raab Karcher": price(9.59),
      "Späth": price(9.09),
      "Späth-Knoll": price(9.79)
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
