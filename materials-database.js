const MATERIALS_DB = [
  {
    name: "Knauf Uniflott 25kg",
    category: "Trockenbau",
    storePrices: {
      OBI: 18.39,
      Hornbach: 17.19,
      Bauhaus: 17.89,
      toom: 18.79,
      hagebau: 18.09,
      BayWa: 17.99,
      "Würth": 19.49,
      "Raab Karcher": 18.29,
      "Späth": 17.99,
      "Späth-Knoll": 18.49
    }
  },
  {
    name: "Knauf Uniflott Finish",
    category: "Trockenbau",
    storePrices: {
      OBI: 12.59,
      Hornbach: 11.79,
      Bauhaus: 12.19,
      toom: 12.89,
      hagebau: 12.49,
      BayWa: 12.29,
      "Würth": 13.29,
      "Raab Karcher": 12.69,
      "Späth": 12.19,
      "Späth-Knoll": 12.79
    }
  },
  {
    name: "Rigips VARIO Fugenspachtel",
    category: "Trockenbau",
    storePrices: {
      OBI: 15.29,
      Hornbach: 14.19,
      Bauhaus: 14.79,
      toom: 15.59,
      hagebau: 15.09,
      BayWa: 14.89,
      "Würth": 16.19,
      "Raab Karcher": 15.19,
      "Späth": 14.99,
      "Späth-Knoll": 15.39
    }
  },
  {
    name: "Rigips Bauplatte 12.5mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 10.49,
      Hornbach: 9.69,
      Bauhaus: 10.09,
      toom: 10.79,
      hagebau: 10.29,
      BayWa: 10.19,
      "Würth": 11.29,
      "Raab Karcher": 10.39,
      "Späth": 9.99,
      "Späth-Knoll": 10.59
    }
  },
  {
    name: "Knauf Gipskartonplatte 12.5mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 10.99,
      Hornbach: 10.19,
      Bauhaus: 10.59,
      toom: 11.29,
      hagebau: 10.79,
      BayWa: 10.69,
      "Würth": 11.79,
      "Raab Karcher": 10.89,
      "Späth": 10.49,
      "Späth-Knoll": 11.09
    }
  },
  {
    name: "Feuchtraumplatte 12.5mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 12.99,
      Hornbach: 12.19,
      Bauhaus: 12.59,
      toom: 13.39,
      hagebau: 12.89,
      BayWa: 12.79,
      "Würth": 13.99,
      "Raab Karcher": 12.99,
      "Späth": 12.49,
      "Späth-Knoll": 13.09
    }
  },
  {
    name: "Brandschutzplatte 12.5mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 14.49,
      Hornbach: 13.69,
      Bauhaus: 14.09,
      toom: 14.89,
      hagebau: 14.39,
      BayWa: 14.19,
      "Würth": 15.39,
      "Raab Karcher": 14.49,
      "Späth": 13.99,
      "Späth-Knoll": 14.69
    }
  },
  {
    name: "CW Profil 50",
    category: "Trockenbau",
    storePrices: {
      OBI: 5.09,
      Hornbach: 4.59,
      Bauhaus: 4.89,
      toom: 5.29,
      hagebau: 4.99,
      BayWa: 4.79,
      "Würth": 5.69,
      "Raab Karcher": 5.09,
      "Späth": 4.79,
      "Späth-Knoll": 5.19
    }
  },
  {
    name: "UW Profil 50",
    category: "Trockenbau",
    storePrices: {
      OBI: 4.69,
      Hornbach: 4.19,
      Bauhaus: 4.49,
      toom: 4.89,
      hagebau: 4.59,
      BayWa: 4.39,
      "Würth": 5.19,
      "Raab Karcher": 4.69,
      "Späth": 4.39,
      "Späth-Knoll": 4.79
    }
  },
  {
    name: "Schnellbauschrauben 25mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 7.49,
      Hornbach: 6.79,
      Bauhaus: 7.09,
      toom: 7.89,
      hagebau: 7.39,
      BayWa: 7.19,
      "Würth": 8.49,
      "Raab Karcher": 7.59,
      "Späth": 7.09,
      "Späth-Knoll": 7.69
    }
  },
  {
    name: "Fugendeckstreifen",
    category: "Trockenbau",
    storePrices: {
      OBI: 3.99,
      Hornbach: 3.29,
      Bauhaus: 3.59,
      toom: 4.19,
      hagebau: 3.89,
      BayWa: 3.69,
      "Würth": 4.49,
      "Raab Karcher": 3.99,
      "Späth": 3.59,
      "Späth-Knoll": 4.09
    }
  },
  {
    name: "Steinwolle 40mm",
    category: "Trockenbau",
    storePrices: {
      OBI: 9.59,
      Hornbach: 8.69,
      Bauhaus: 9.09,
      toom: 9.99,
      hagebau: 9.49,
      BayWa: 9.19,
      "Würth": 10.49,
      "Raab Karcher": 9.59,
      "Späth": 9.09,
      "Späth-Knoll": 9.79
    }
  }
];

const MATERIAL_ALIASES = {
  uniflott: "Knauf Uniflott 25kg",
  spachtel: "Knauf Uniflott 25kg",
  spachtelmasse: "Knauf Uniflott 25kg",
  fugenspachtel: "Rigips VARIO Fugenspachtel",
  rigips: "Rigips Bauplatte 12.5mm",
  regips: "Rigips Bauplatte 12.5mm",
  rigipsplatte: "Rigips Bauplatte 12.5mm",
  gipskarton: "Knauf Gipskartonplatte 12.5mm",
  gipskartonplatte: "Knauf Gipskartonplatte 12.5mm",
  feuchtraumplatte: "Feuchtraumplatte 12.5mm",
  brandschutzplatte: "Brandschutzplatte 12.5mm",
  cw: "CW Profil 50",
  "cw profil": "CW Profil 50",
  uw: "UW Profil 50",
  "uw profil": "UW Profil 50",
  schnellbauschrauben: "Schnellbauschrauben 25mm",
  schrauben: "Schnellbauschrauben 25mm",
  fugendeckstreifen: "Fugendeckstreifen",
  steinwolle: "Steinwolle 40mm",
  daemmung: "Steinwolle 40mm",
  dämmung: "Steinwolle 40mm"
};
