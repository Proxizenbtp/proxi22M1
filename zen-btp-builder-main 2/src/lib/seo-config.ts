export const siteConfig = {
  name: "ProxiZen BTP",
  domain: "proxizenbtp.fr",
  url: "https://proxizenbtp.fr",
  defaultTitle: "ProxiZen BTP - Assistance administrative batiment en Suisse romande",
  defaultDescription:
    "Assistante administrative a distance pour les entreprises du batiment a Geneve, Vaud et en Suisse romande : offres, factures, suivi des paiements et pieces pour votre fiduciaire.",
  locale: "fr_CH",
  email: "contact@proxizenbtp.fr",
  author: "ProxiZen BTP",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "ProxiZen BTP",
    images: {
      default: "/og-default.png",
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@proxizenbtp",
  },
} as const;

export interface SEOPageConfig {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export const pagesConfig = {
  home: {
    slug: "home",
    path: "/",
    title: "ProxiZen BTP - Assistance administrative batiment en Suisse romande",
    description:
      "Assistante administrative a distance pour les entreprises du batiment a Geneve, Vaud et en Suisse romande : offres, factures, suivi des paiements et pieces pour votre fiduciaire.",
    keywords:
      "ProxiZen BTP, assistante administrative construction Geneve, secretariat batiment Suisse romande, administratif PME Vaud, facturation artisan Geneve, fiduciaire, externalisation administrative",
    ogImage: "/og-home.png",
  },
  accompagnement: {
    slug: "accompagnement",
    path: "/accompagnement",
    title: "Accompagnement sur-mesure - ProxiZen BTP",
    description:
      "Organisation administrative, offres et factures, suivi des paiements, pieces pour votre fiduciaire. Accompagnement a distance pour les entreprises du batiment en Suisse romande.",
    keywords:
      "ProxiZen BTP, accompagnement BTP, organisation administrative, devis facturation, pre-comptabilite",
    ogImage: "/og-accompagnement.png",
  },
  offres: {
    slug: "offres",
    path: "/offres",
    title: "Nos offres - ProxiZen BTP",
    description:
      "Formules d'accompagnement administratif ProxiZen BTP pour artisans et PME du batiment en Suisse romande. Forfaits mensuels des 790 CHF.",
    keywords:
      "ProxiZen BTP, offres administratif BTP, formules accompagnement, gestion entreprise batiment",
    ogImage: "/og-accompagnement.png",
  },
  kits: {
    slug: "kits",
    path: "/kits",
    title: "Kits Excel BTP - ProxiZen BTP",
    description:
      "Kits Excel et guides PDF pour piloter l'administratif BTP : devis, factures, paiements, relances, rentabilite chantier, facturation electronique et suivi chantier.",
    keywords:
      "kit excel BTP, gestion administrative BTP, suivi chantier excel, facturation electronique BTP, rentabilite chantier, ProxiZen BTP",
    ogImage: "/og-accompagnement.png",
  },
  apropos: {
    slug: "apropos",
    path: "/a-propos",
    title: "A propos - ProxiZen BTP",
    description:
      "Decouvrez ProxiZen BTP, votre partenaire pour simplifier l'administratif et la gestion de votre entreprise du BTP.",
    keywords: "ProxiZen BTP, proxizen btp, equipe, valeurs, expertise BTP",
    ogImage: "/og-apropos.png",
  },
  contact: {
    slug: "contact",
    path: "/contact",
    title: "Contactez-nous - ProxiZen BTP",
    description:
      "Prenons rendez-vous pour echanger sur vos besoins administratifs. Premier echange telephonique gratuit et sans engagement.",
    keywords: "contact ProxiZen BTP, proxizen btp, rendez-vous, devis gratuit",
    ogImage: "/og-contact.png",
  },
  faq: {
    slug: "faq",
    path: "/faq",
    title: "FAQ - ProxiZen BTP",
    description:
      "Consultez les questions frequentes sur l'accompagnement administratif ProxiZen BTP pour les entreprises du BTP.",
    keywords: "faq ProxiZen BTP, proxizen btp, questions administratives BTP, accompagnement",
    ogImage: "/og-default.png",
  },
} satisfies Record<string, SEOPageConfig>;

export type SEOPageId = keyof typeof pagesConfig;
