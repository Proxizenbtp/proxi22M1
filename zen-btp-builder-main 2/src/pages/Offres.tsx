import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionCTA from "@/components/SectionCTA";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { useSiteSettings } from "@/components/SiteSettingsProvider";
import { trackCalendlyClick } from "@/lib/site-insights";

const offers = [
  {
    title: "Facturation",
    subtitle: "Vos offres et factures partent à temps, vos documents sont en ordre.",
    price: "790",
    services: [
      "Mise en forme des offres (devis) à partir de vos chiffrages",
      "Émission des factures (QR-facture)",
      "Classement et archivage des documents",
      "Préparation et transmission des pièces à votre fiduciaire",
      "Suivi administratif de base (clients, fournisseurs)",
    ],
    highlight: false,
  },
  {
    title: "Facturation & encaissements",
    subtitle: "En plus de la facturation, je suis vos paiements jusqu’à l’encaissement.",
    price: "1 290",
    services: [
      "Tout ce qui est compris dans Facturation",
      "Suivi des paiements et relances écrites (email, courrier)",
      "Relance des offres en attente",
      "Suivi des acomptes et situations de travaux",
      "Tableau de suivi des offres et factures",
      "Suivi des échéances administratives",
    ],
    highlight: true,
  },
  {
    title: "Bureau délégué",
    subtitle: "Pour les PME qui veulent confier l’essentiel de leur administratif.",
    price: "1 690",
    services: [
      "Tout ce qui est compris dans Facturation & encaissements",
      "Gestion administrative avancée (contrats, documents de chantier…)",
      "Rapprochement des paiements reçus",
      "Reporting mensuel (chiffre d’affaires, encours, relances)",
      "Traitement prioritaire de vos demandes",
    ],
    highlight: false,
  },
];

const Offres = () => {
  const { settings } = useSiteSettings();
  return (
  <Layout>
    <SEO pageId="offres" />
    <PageHero
      label="Offres"
      title="Trois forfaits mensuels, des prix clairs."
      intro="Un forfait fixe chaque mois, en CHF, avec un périmètre écrit. Pas de facturation à l’heure, pas de mauvaise surprise."
    />

    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 border-t border-foreground md:grid-cols-3">
          {offers.map((offer, i) => (
            <article
              key={offer.title}
              className={`flex flex-col py-8 md:px-8 ${i === 0 ? "md:pl-0" : "border-t border-border md:border-t-0 md:border-l"} ${
                i === offers.length - 1 ? "md:pr-0" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm tabular-nums text-muted-foreground">0{i + 1}</span>
                {offer.highlight ? (
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">Recommandé</span>
                ) : null}
              </div>
              <h2 className="mt-4 text-3xl leading-tight md:min-h-[4.5rem]">{offer.title}</h2>
              <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">{offer.subtitle}</p>

              <div className="mt-6 border-y border-border py-5">
                <p className="text-xs text-muted-foreground">dès</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tabular-nums tracking-tight">CHF {offer.price}</span>
                  <span className="text-sm text-muted-foreground">/ mois</span>
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm" aria-label={`Prestations du forfait ${offer.title}`}>
                {offer.services.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="text-muted-foreground">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={settings.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCalendlyClick(`offre-${i + 1}`)}
                  className={offer.highlight ? "btn-ink w-full" : "btn-line w-full"}
                >
                  Réserver un appel
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
          Le forfait exact est fixé après un appel découverte de 20 minutes,
          selon votre volume d’offres, de factures et de relances.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-10">
          <p className="eyebrow md:col-span-3">Mission ponctuelle</p>
          <div className="md:col-span-9 max-w-2xl">
            <h3 className="text-2xl">Remise à jour d’un retard administratif</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Tri, classement et remise à jour de plusieurs mois de documents en
              retard, avant transmission à votre fiduciaire. Une intervention
              unique pour repartir sur des bases saines.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionCTA title="Parlons de votre volume et de vos besoins" buttonText="Réserver un appel" href={settings.calendlyUrl} />
  </Layout>
  );
};

export default Offres;
