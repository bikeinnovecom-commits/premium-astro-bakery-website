// Curated bakery imagery
const px = (id: number, ext: string = 'jpeg', w = 1800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${w}`;

export const heroImages = [
  {
    src: px(38975961, 'jpeg', 2200),
    title: 'Handwerk seit über 100 Jahren',
    subtitle: 'Frisch gebacken. Täglich. Seit 1929.',
  },
  {
    src: px(31818589, 'jpeg', 2200),
    title: 'Brot mit Charakter',
    subtitle: 'Traditionelle Backkunst, modern interpretiert.',
  },
  {
    src: px(30632198, 'jpeg', 2200),
    title: 'Sauerteig mit Charakter',
    subtitle: 'Lange Teigführung, echter Geschmack.',
  },
  {
    src: px(38852250, 'jpeg', 2200),
    title: 'Konditorei mit Leidenschaft',
    subtitle: 'Jeden Morgen ofenfrisch für Sie.',
  },
  {
    src: px(38138847, 'jpeg', 2200),
    title: 'Aus der Region, für die Region',
    subtitle: 'Regionale Zutaten, handwerkliche Qualität.',
  },
];

export const products = [
  {
    name: 'Sauerteig-Bauernbrot',
    price: '5,90 €',
    img: px(30632199),
    desc: 'Rustikales Landbrot mit kräftiger Kruste, natürlicher Sauerteigführung und saftigem Innenleben.',
    tag: 'Backstube',
  },
  {
    name: 'Laugenbrezel',
    price: '1,80 €',
    img: px(38975961),
    desc: 'Handgeformt, ofenfrisch und mit grobem Salz bestreut – ein Klassiker aus der Backstube.',
    tag: 'Snack',
  },
  {
    name: 'Dinkelbrot mit Körnern',
    price: '6,20 €',
    img: px(9779954),
    desc: 'Vollkorniges Dinkelbrot mit Sonnenblumenkernen, Leinsamen und Sesam – nussig und bekömmlich.',
    tag: 'Backstube',
  },
  {
    name: 'Roggenmischbrot',
    price: '4,80 €',
    img: px(30666756),
    desc: '48 Stunden geführt, mild-säuerlich mit feinem Aroma und langer Haltbarkeit.',
    tag: 'Backstube',
  },
  {
    name: 'Rustikales Landbrot',
    price: '5,50 €',
    img: px(30873473),
    desc: 'Kräftiges Weizen-Roggen-Mischbrot mit knuspriger Kruste – saftig und aromatisch.',
    tag: 'Backstube',
  },
  {
    name: 'Körnerbrötchen',
    price: '0,90 €',
    img: px(30873555),
    desc: 'Knusprige Brötchen mit einem Mix aus Körnern und Kernen – täglich frisch gebacken.',
    tag: 'Brötchen',
  },
  {
    name: 'Apfelkuchen',
    price: '3,60 €',
    img: px(36414757),
    desc: 'Saftiger Apfelkuchen mit Zimt und Streuselbelag – nach hausgemachtem Rezept gebacken.',
    tag: 'Süßgebäck',
  },
  {
    name: 'Vollkornbrot regional',
    price: '5,20 €',
    img: px(30816577),
    desc: 'Mit regionalem Getreide aus der Umgebung – ehrlich, kraftvoll, ausgewogen.',
    tag: 'Backstube',
  },
  {
    name: 'Laugensemmel',
    price: '1,20 €',
    img: px(18773001),
    desc: 'Goldbraun gebackene Laugensemmel – der perfekte Snack für zwischendurch.',
    tag: 'Brötchen',
  },
  {
    name: 'Buttercreme-Törtchen',
    price: '3,80 €',
    img: px(36414757),
    desc: 'Zarte Törtchen mit frischer Buttercreme und saisonalen Früchten aus der Region.',
    tag: 'Konditorei',
  },
  {
    name: 'Schokoladentorte',
    price: '4,50 €',
    img: px(9779954),
    desc: 'Dunkle Schokoladentorte mit Haselnusskrokant – cremig, schokoladig, unwiderstehlich.',
    tag: 'Konditorei',
  },
  {
    name: 'Espresso & Gebäck',
    price: '3,20 €',
    img: px(19409031),
    desc: 'Frisch gebrühter Espresso mit einem feinen Stück Patisserie aus unserer Konditorei.',
    tag: 'Café',
  },
  {
    name: 'Sahnetorte',
    price: '4,80 €',
    img: px(38852250),
    desc: 'Mehrlagige Sahnetorte nach hausgemachtem Rezept – für jeden besonderen Anlass.',
    tag: 'Konditorei',
  },
  {
    name: 'Buttercroissant',
    price: '2,40 €',
    img: px(30632199),
    desc: 'Zart und butterig, mehrfach gefaltet nach traditionellem Rezept – ein Genuss zum Kaffee.',
    tag: 'Café',
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
