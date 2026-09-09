// Curated Bavarian bakery imagery
const px = (id: number, ext: string = 'jpeg', w = 1800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${w}`;

export const heroImages = [
  {
    src: px(38975961, 'jpeg', 2200),
    title: 'Handwerk aus dem Herzen Bayerns',
    subtitle: 'Frisch gebacken. Täglich. Seit 1897.',
  },
  {
    src: px(31818589, 'jpeg', 2200),
    title: 'Die Seele der bayerischen Brezn',
    subtitle: 'Goldgelb, salzig, unwiderstehlich.',
  },
  {
    src: px(30632198, 'jpeg', 2200),
    title: 'Sauerteig mit Charakter',
    subtitle: 'Lange Teigführung, echter Geschmack.',
  },
  {
    src: px(38852250, 'jpeg', 2200),
    title: 'Eine Auslage voller Tradition',
    subtitle: 'Jeden Morgen ofenfrisch für Sie.',
  },
  {
    src: px(38138847, 'jpeg', 2200),
    title: 'Vom Feld bis zur Theke',
    subtitle: 'Bayerisches Getreide, bayerische Meisterhände.',
  },
];

export const products = [
  {
    name: 'Original Bayerische Brezn',
    price: '1,80 €',
    img: px(38975961),
    desc: 'Über Nacht gereift, im Steinofen gebacken, mit grobem Meersalz veredelt.',
    tag: 'Klassiker',
  },
  {
    name: 'Bauernkruste',
    price: '5,90 €',
    img: px(30632199),
    desc: 'Kräftiges Roggen-Weizen-Brot mit knuspriger Kruste und saftiger Krume.',
    tag: 'Sauerteig',
  },
  {
    name: 'Wurzelbaguette',
    price: '3,40 €',
    img: px(9779954),
    desc: 'Rustikal gedreht, mit knackiger Kruste und würziger Note.',
    tag: 'Neu',
  },
  {
    name: 'Rustico Sauerteig',
    price: '6,50 €',
    img: px(30666756),
    desc: '48 Stunden geführt, mild-säuerlich mit feinem Aroma.',
    tag: 'Premium',
  },
  {
    name: 'Brezn-Laib',
    price: '4,20 €',
    img: px(30873473),
    desc: 'Der große Bruder der Brezn – zum Teilen und Genießen.',
    tag: 'Spezialität',
  },
  {
    name: 'Bauernbrot geschnitten',
    price: '4,80 €',
    img: px(30873555),
    desc: 'Herzhaftes Landbrot – perfekt zur Brotzeit mit Butter und Radi.',
    tag: 'Beliebt',
  },
  {
    name: 'Apfelstrudel',
    price: '3,60 €',
    img: px(36414757),
    desc: 'Hauchdünner Blätterteig, Bayerische Boskoop-Äpfel, Zimt und Rosinen.',
    tag: 'Süß',
  },
  {
    name: 'Landbrot mit Mehltau',
    price: '5,20 €',
    img: px(30816577),
    desc: 'Ein Klassiker aus dem Chiemgau – ehrlich, kraftvoll, ausgewogen.',
    tag: 'Regional',
  },
  {
    name: 'Salzstange handgerollt',
    price: '2,10 €',
    img: px(18773001),
    desc: 'Knusprig, luftig, mit Kümmel oder Sesam bestreut.',
    tag: 'Snack',
  },
  {
    name: 'Leckerlis (Bavarois)',
    price: '3,20 €',
    img: px(36414757),
    desc: 'Buttrige Patisserie mit Mandeln, Zitrone und Vanille – ein Klassiker aus dem Allgäu.',
    tag: 'Süß',
  },
  {
    name: 'Schokoladen-Küchle',
    price: '3,80 €',
    img: px(9779954),
    desc: 'Dunkle Schokolade aus Bayern, knuspriger Teig, leichtes Innenleben.',
    tag: 'Süß',
  },
  {
    name: 'Café Crème Wiener',
    price: '2,90 €',
    img: px(19409031),
    desc: 'Handgerührter Espresso mit Bayerischem Milch-Schaum – wie in Wien.',
    tag: 'Café',
  },
  {
    name: 'Bayerische Schokoladeriere',
    price: '4,50 €',
    img: px(38852250),
    desc: 'Zarte Schokoladentorte mit Haselnuss, Karamell und Salz – unsere Signatur.',
    tag: 'Premium',
  },
  {
    name: 'Croissant alle Butter',
    price: '2,40 €',
    img: px(30632199),
    desc: 'Sechs Faltungen à la française, ausschließlich französische Butter.',
    tag: 'Viennoiserie',
  },
];

export const galleryImages = [
  px(23884579, 'png'),
  px(31818589),
  px(38138847),
  px(30666756),
  px(30632198),
  px(38852250),
  px(30873473),
  px(9779954),
];

export const storyImages = {
  baker: px(38455659, 'jpeg', 2000),
  hands: px(5403020),
  kneading: px(5947602),
  village: px(32473939, 'jpeg', 2000),
  allgau: px(32488212, 'jpeg', 2000),
};
