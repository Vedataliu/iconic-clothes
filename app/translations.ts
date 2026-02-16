export type Locale = "sq" | "en";

export const translations = {
  sq: {
    nav: {
      products: "Produkte",
      about: "Rreth nesh",
      contact: "Kontakt",
      instagram: "Instagram",
    },
    hero: {
      title: "Iconic Clothes",
      badge: "ks",
      label: "Xhaketa ikonike & vintage",
      tagline: "Xhaketa Ikonike & Vintage",
      subtitle: "Modele unike nga brendet më të njohura botërore.",
      customJackets: "Shitje online e xhaketave të personalizuara.",
      cta: "Shiko në Instagram",
    },
    products: {
      label: "Koleksioni",
      title: "Produktet tona",
      subtitle: "Zgjidh xhaketën tënde dhe na kontakto në Instagram.",
      viewOnInstagram: "Shiko në Instagram",
    },
    about: {
      label: "Rreth nesh",
      text: "iconic_clothes_ks ofron xhaketa ikonike dhe vintage të zgjedhura nga brendet më të njohura botërore. Merremi me shitjen online të xhaketave të personalizuara. Çdo copë është e vetme – për ata që duan të dallojnë me stil.",
      guarantee: "Garanci cilësie – vetëm produkte të verifikuara",
    },
    contact: {
      label: "Kontakt",
      text: "Na shkruaj në Instagram për porosi, pyetje ose disponibilitet.",
    },
    footer: {
      rights: "Të gjitha të drejtat e rezervuara.",
    },
  },
  en: {
    nav: {
      products: "Products",
      about: "About",
      contact: "Contact",
      instagram: "Instagram",
    },
    hero: {
      title: "Iconic Clothes",
      badge: "ks",
      label: "Iconic & vintage jackets",
      tagline: "Iconic & Vintage Jackets",
      subtitle: "Unique pieces from the world's most renowned brands.",
      customJackets: "Online sale of custom jackets.",
      cta: "View on Instagram",
    },
    products: {
      label: "Collection",
      title: "Our Products",
      subtitle: "Choose your jacket and contact us on Instagram.",
      viewOnInstagram: "View on Instagram",
    },
    about: {
      label: "About Us",
      text: "iconic_clothes_ks offers iconic and vintage jackets curated from the world's most renowned brands. We specialise in the online sale of custom jackets. Each piece is one of a kind – for those who want to stand out with style.",
      guarantee: "Quality guarantee – verified products only",
    },
    contact: {
      label: "Contact",
      text: "Message us on Instagram for orders, questions or availability.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;
