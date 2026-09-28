import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionCTA from "@/components/SectionCTA";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const gains = [
  "Offres et factures claires, envoyées à temps",
  "Paiements suivis et relances envoyées sans y penser",
  "Administratif structuré et organisé",
  "Du temps rendu pour vos chantiers",
  "Des pièces complètes pour votre fiduciaire",
];

const organisation = [
  "Tout se fait à distance : email, espace partagé, téléphone",
  "Un suivi écrit régulier, et un appel sur rendez-vous",
  "Travail avec vos outils existants",
  "Communication en français, écrite et claire",
  "Confidentialité de vos données",
];

const flow = [
  { t: "Votre entreprise", d: "Chantiers, chiffrages, relation client" },
  { t: "ProxiZen BTP", d: "Offres, factures, paiements, classement" },
  { t: "Votre fiduciaire", d: "Comptabilité, TVA, salaires" },
];

const steps = [
  "Premier échange (gratuit)",
  "Analyse de votre organisation et de vos besoins",
  "Proposition d’un forfait mensuel en CHF",
  "Mise en place et suivi régulier",
];

const List = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((item) => (
      <li key={item} className="flex gap-3 border-t border-border py-3.5 leading-snug">
        <span className="text-muted-foreground">—</span>
        {item}
      </li>
    ))}
  </ul>
);

const Accompagnement = () => (
  <Layout>
    <SEO pageId="accompagnement" />
    <PageHero
      label="Accompagnement"
      title="Assistance administrative indépendante pour le bâtiment."
      intro="Pour les artisans et dirigeants de PME de la construction en Suisse romande. L’administratif vous prend trop de temps et votre fiduciaire attend toujours des pièces ? Je prends le relais, à distance."
    />

    <section className="section-padding">
      <div className="container">
        <SectionHead index="01" label="En pratique" title="Ce que vous y gagnez, et comment on travaille" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:col-start-4">
            <h3 className="mb-4 text-lg">Ce que vous y gagnez</h3>
            <List items={gains} />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="mb-4 text-lg">Comment on travaille ensemble</h3>
            <List items={organisation} />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container">
        <SectionHead
          index="02"
          label="Répartition des rôles"
          title="Chacun son métier"
          intro="J’interviens exclusivement en assistance administrative. La comptabilité, les décomptes TVA, les salaires et les assurances sociales restent du ressort de votre fiduciaire."
        />
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <ol className="md:col-span-9 md:col-start-4 grid grid-cols-1 gap-px bg-border border border-border sm:grid-cols-3">
            {flow.map((f, i) => (
              <li key={f.t} className={`p-6 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                <span className={`text-sm tabular-nums ${i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {i + 1} / 3
                </span>
                <h3 className="mt-3 text-xl">{f.t}</h3>
                <p className={`mt-2 text-sm ${i === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{f.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <SectionHead index="03" label="Démarrage" title="Comment se déroule l’accompagnement" />
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <ol className="md:col-span-9 md:col-start-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="border-t-2 border-primary pt-4">
                <span className="text-sm tabular-nums text-muted-foreground">Étape {i + 1}</span>
                <p className="mt-2 font-medium leading-snug">{s}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-9 md:col-start-4">
            <Link to="/offres" className="link-arrow">
              Voir le détail des trois forfaits <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <SectionCTA title="Un premier échange, sans engagement" buttonText="Me contacter" />
  </Layout>
);

export default Accompagnement;
