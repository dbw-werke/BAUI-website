const MATERIALS_DB = [
  // TROCKENBAU
  { name: "Uniflott 25kg", category: "Trockenbau", price: 15.99 },
  { name: "Rigipsplatte 12.5mm", category: "Trockenbau", price: 9.99 },
  { name: "Gipskartonplatte", category: "Trockenbau", price: 8.99 },
  { name: "Trockenbauprofil", category: "Trockenbau", price: 6.50 },
  { name: "Spachtelmasse", category: "Trockenbau", price: 12.99 },

  // BAUSTOFFE
  { name: "Zement 25kg", category: "Baustoffe", price: 5.49 },
  { name: "Beton 25kg", category: "Baustoffe", price: 4.99 },
  { name: "Mörtel 25kg", category: "Baustoffe", price: 6.99 },
  { name: "Estrich 25kg", category: "Baustoffe", price: 7.99 },
  { name: "Putz 25kg", category: "Baustoffe", price: 8.49 },

  // BEFESTIGUNG
  { name: "Schrauben Set", category: "Befestigung", price: 7.99 },
  { name: "Dübel Set", category: "Befestigung", price: 5.99 },
  { name: "Nägel", category: "Befestigung", price: 3.99 },
  { name: "Muttern", category: "Befestigung", price: 4.50 },
  { name: "Unterlegscheiben", category: "Befestigung", price: 2.99 },

  // HOLZ
  { name: "OSB Platte", category: "Holz", price: 14.99 },
  { name: "Spanplatte", category: "Holz", price: 12.99 },
  { name: "Holzlatten", category: "Holz", price: 5.99 },
  { name: "Balken Holz", category: "Holz", price: 19.99 },

  // FARBEN
  { name: "Wandfarbe 10L", category: "Farben", price: 29.99 },
  { name: "Lack", category: "Farben", price: 12.99 },
  { name: "Lasur", category: "Farben", price: 14.99 },
  { name: "Grundierung", category: "Farben", price: 11.99 },

  // SANITÄR
  { name: "Silikon", category: "Sanitär", price: 6.99 },
  { name: "Acryl", category: "Sanitär", price: 5.99 },
  { name: "Rohr PVC", category: "Sanitär", price: 8.99 },

  // ELEKTRO
  { name: "Kabel NYM", category: "Elektro", price: 12.99 },
  { name: "Steckdose", category: "Elektro", price: 4.99 },
  { name: "Schalter", category: "Elektro", price: 6.49 },

  // WERKZEUG
  { name: "Bohrmaschine", category: "Werkzeug", price: 79.99 },
  { name: "Akkuschrauber", category: "Werkzeug", price: 59.99 },
  { name: "Hammer", category: "Werkzeug", price: 14.99 },
  { name: "Schraubendreher Set", category: "Werkzeug", price: 19.99 }

    { name: "Knauf Uniflott 25kg", category: "Trockenbau", price: 17.49 },
  { name: "Knauf Uniflott Finish", category: "Trockenbau", price: 11.99 },
  { name: "Rigips VARIO Fugenspachtel", category: "Trockenbau", price: 14.49 },
  { name: "Rigips Bauplatte 12.5mm", category: "Trockenbau", price: 9.99 },
  { name: "Knauf Gipskartonplatte 12.5mm", category: "Trockenbau", price: 10.49 },
  { name: "Feuchtraumplatte 12.5mm", category: "Trockenbau", price: 12.49 },
  { name: "Brandschutzplatte 12.5mm", category: "Trockenbau", price: 13.99 },
  { name: "CW Profil 50", category: "Trockenbau", price: 4.79 },
  { name: "CW Profil 75", category: "Trockenbau", price: 5.99 },
  { name: "UW Profil 50", category: "Trockenbau", price: 4.29 },
  { name: "UW Profil 75", category: "Trockenbau", price: 5.49 },
  { name: "Schnellbauschrauben 25mm", category: "Trockenbau", price: 6.99 },
  { name: "Schnellbauschrauben 35mm", category: "Trockenbau", price: 7.49 },
  { name: "Fugendeckstreifen", category: "Trockenbau", price: 3.49 },
  { name: "Trennwandband", category: "Trockenbau", price: 2.99 },
  { name: "Eckschutzprofil", category: "Trockenbau", price: 5.49 },
  { name: "Steinwolle 40mm", category: "Trockenbau", price: 8.99 },
  { name: "Steinwolle 60mm", category: "Trockenbau", price: 10.99 }

  

];
const MATERIAL_ALIASES = {
  uniflott: "Knauf Uniflott 25kg",
  spachtel: "Knauf Uniflott 25kg",
  spachtelmasse: "Knauf Uniflott 25kg",
  fugenspachtel: "Rigips VARIO Fugenspachtel",
  rigips: "Rigips Bauplatte 12.5mm",
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
  trennwandband: "Trennwandband",
  eckschutzprofil: "Eckschutzprofil",
  steinwolle: "Steinwolle 40mm",
  daemmung: "Steinwolle 40mm",
  dämmung: "Steinwolle 40mm"
};
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
  trennwandband: "Trennwandband",
  eckschutzprofil: "Eckschutzprofil",

  steinwolle: "Steinwolle 40mm",
  daemmung: "Steinwolle 40mm",
  dämmung: "Steinwolle 40mm"
};
