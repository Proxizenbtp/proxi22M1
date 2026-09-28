import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionCTA from "@/components/SectionCTA";
import SectionHead from "@/components/SectionHead";
import chantierGeneve from "@/assets/chantier-geneve.jpg";
import { useSiteSettings } from "@/components/SiteSettingsProvider";
import { trackCalendlyClick } from "@/lib/site-insights";
import SEO from "@/components/SEO";

const facts = [
  { k: "Mode de travail", v: "100 % à distance" },
  { k: "Tarification", v: "Forfait mensuel en CHF" },
  { k: "Réactivité", v: "Réponse en général dans la journée" },
];

const problemPoints = [
  {
    t: "Les offres attendent",
    d: "Les devis partent en retard ou ne sont jamais relancés. Des chantiers se perdent faute de suivi.",
  },
  {
    t: "Les paiements traînent",
    d: "Factures émises tard, acomptes oubliés, relances jamais envoyées : la trésorerie en souffre.",
  },
  {
    t: "La fiduciaire relance",
    d: "Pièces manquantes, documents mal classés : la clôture prend du temps et coûte plus cher.",
  },
];

const services = [
  "Mise en forme des offres et émission des factures (QR-facture)",
  "Suivi des paiements et relances écrites (email, courrier)",
  "Suivi des acomptes et situations de travaux",
  "Organisation et classement des documents",
  "Préparation et transmission des pièces à votre fiduciaire",
  "Tableau de bord administratif mensuel",
];

const steps = [
  { t: "Premier échange", d: "20 minutes au téléphone. Vous réservez un créneau en ligne, je vous appelle. Gratuit et sans engagement." },
  { t: "Analyse", d: "Je regarde votre organisation actuelle, vos outils et votre volume." },
  { t: "Proposition", d: "Un forfait mensuel en CHF, avec un périmètre écrit et précis." },
  { t: "Suivi", d: "Mise en place, puis un suivi écrit régulier et un point téléphonique mensuel." },
];

const offersPreview = [
  { title: "Facturation", price: "dès CHF 790 / mois", desc: "Offres, factures et classement des documents." },
  { title: "Facturation & encaissements", price: "dès CHF 1 290 / mois", desc: "En plus : suivi des paiements, des acomptes et des relances." },
  { title: "Bureau délégué", price: "dès CHF 1 690 / mois", desc: "En plus : gestion administrative avancée et reporting mensuel." },
];

const audiences = [
  { t: "Artisans du bâtiment", d: "Peinture, sanitaire, électricité, menuiserie, second œuvre." },
  { t: "TPE et PME de la construction", d: "Genève, Vaud et le reste de la Suisse romande." },
  { t: "Entreprises du Genevois français", d: "Haute-Savoie et Ain, avec des chantiers des deux côtés de la frontière." },
];

const Index = () => {
  const { settings } = useSiteSettings();
  const heroImageSrc = settings.heroImageUrl || chantierGeneve;

  return (
    <Layout>
      <SEO pageId="home" />

      {/* HERO */}
      <section className="pt-14 md:pt-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7 flex flex-col">
              <p className="eyebrow">Assistance administrative · Construction · Suisse romande</p>
              <h1 className="mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem] font-semibold tracking-[-0.035em] text-balance">
                L’administratif de votre entreprise du bâtiment, tenu avec rigueur.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Offres, factures, relances de paiement et pièces pour votre
                fiduciaire. Je m’en occupe à distance, chaque mois, dans un
                cadre défini par écrit.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={settings.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCalendlyClick("hero-primary")}
                  className="btn-ink"
                >
                  Réserver un appel
                  <ArrowRight size={16} />
                </a>
                <Link to="/offres" className="btn-line">
                  Voir les offres
                </Link>
              </div>
            </div>

            <figure className="md:col-span-5">
              <img
                src={heroImageSrc}
                alt="Chantier de rénovation du cinéma Plaza à Genève"
                className="aspect-[4/3] md:aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Vous êtes sur le chantier. Je m’occupe du bureau.
                {!settings.heroImageUrl && (
                  <span className="block mt-1">
                    Photo : <a className="underline" href="https://commons.wikimedia.org/wiki/File:Plaza_en_chantier-Gen%C3%A8ve-07.jpg" target="_blank" rel="noreferrer">MHM55 / Wikimedia Commons</a>, <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.
                  </span>
                )}
              </figcaption>
            </figure>
          </div>

          <dl className="mt-16 grid grid-cols-1 border-t border-foreground sm:grid-cols-3">
            {facts.map((f, i) => (
              <div
                key={f.k}
                className={`py-6 sm:pr-6 ${i > 0 ? "border-t border-border sm:border-t-0 sm:border-l sm:pl-6" : ""}`}
              >
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-2 text-xl font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 CONSTAT */}
      <section className="section-padding">
        <div className="container">
          <SectionHead
            index="01"
            label="Le constat"
            title="Votre priorité, ce sont les chantiers. L’administratif, lui, s’accumule."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-9 md:col-start-4 grid grid-cols-1 gap-px bg-border border border-border sm:grid-cols-3">
              {problemPoints.map((p) => (
                <div key={p.t} className="bg-background p-6">
                  <h3 className="text-lg">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 PRESTATIONS */}
      <section className="section-padding bg-card">
        <div className="container">
          <SectionHead
            index="02"
            label="Prestations"
            title="Ce que je prends en charge"
            intro="Je travaille avec vos outils existants. La comptabilité, les décomptes TVA et les salaires restent chez votre fiduciaire."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <ol className="md:col-span-9 md:col-start-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
              {services.map((s, i) => (
                <li key={s} className="flex gap-5 border-t border-border py-5">
                  <span className="w-6 shrink-0 text-sm tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 03 FONCTIONNEMENT */}
      <section className="section-padding">
        <div className="container">
          <SectionHead
            index="03"
            label="Fonctionnement"
            title="Quatre étapes, sans surprise"
            intro="Tout passe par écrit : email et espace partagé. Rien ne se perd, tout est tracé. Un appel sur rendez-vous quand c’est utile."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <ol className="md:col-span-9 md:col-start-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <li key={s.t} className="border-t-2 border-primary pt-4">
                  <span className="text-sm tabular-nums text-muted-foreground">Étape {i + 1}</span>
                  <h3 className="mt-2 text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 04 FORMULES */}
      <section className="section-padding bg-card">
        <div className="container">
          <SectionHead
            index="04"
            label="Formules"
            title="Trois niveaux d’accompagnement"
            intro="Un forfait fixe chaque mois, en CHF. Le montant exact est fixé après un appel découverte de 20 minutes."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-9 md:col-start-4">
              {offersPreview.map((o) => (
                <Link
                  key={o.title}
                  to="/offres"
                  className="group grid grid-cols-12 items-baseline gap-4 border-t border-border py-6 last:border-b"
                >
                  <span className="col-span-12 sm:col-span-5">
                    <span className="block text-xl font-semibold">{o.title}</span>
                    <span className="mt-1 block text-sm tabular-nums text-muted-foreground">{o.price}</span>
                  </span>
                  <span className="col-span-10 sm:col-span-6 text-muted-foreground">{o.desc}</span>
                  <ArrowRight size={18} className="col-span-2 sm:col-span-1 justify-self-end transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 POUR QUI */}
      <section className="section-padding">
        <div className="container">
          <SectionHead index="05" label="Pour qui" title="À qui s’adresse ProxiZen BTP" />
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-9 md:col-start-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.t}>
                  <h3 className="text-lg">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        title="Parlons de votre organisation"
        description="Un appel de 20 minutes pour comprendre vos besoins et vous dire franchement si je peux vous aider."
        buttonText="Réserver un appel"
        href={settings.calendlyUrl}
      />
    </Layout>
  );
};

export default Index;
