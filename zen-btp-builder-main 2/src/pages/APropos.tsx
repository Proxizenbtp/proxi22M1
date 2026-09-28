import Layout from "@/components/Layout";
import SectionCTA from "@/components/SectionCTA";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const principes = [
  { t: "Rigueur", d: "Un périmètre écrit, des délais tenus, des documents rangés au même endroit." },
  { t: "Clarté", d: "Pas de jargon ni de complexité inutile. Vous savez toujours où en sont vos dossiers." },
  { t: "Discrétion", d: "Vos données et vos chiffres restent confidentiels." },
  { t: "Terrain", d: "Je connais le rythme d’un chantier et les contraintes d’une petite entreprise." },
];

const APropos = () => (
  <Layout>
    <SEO pageId="apropos" />
    <PageHero
      label="À propos"
      title="L’administratif du bâtiment, en plus simple et plus clair."
    />

    <section className="section-padding">
      <div className="container">
        <SectionHead index="01" label="Parcours" title="Qui suis-je ?" />
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 md:col-start-4 space-y-5 text-lg leading-relaxed">
            <p>
              Je suis assistante administrative indépendante, spécialisée dans le
              secteur du bâtiment. J’ai plus de 10 ans d’expérience dans des entreprises
              du BTP, au plus près du terrain, notamment dans la peinture,
              ce qui m’a permis de comprendre les réalités concrètes des artisans.
            </p>
            <p className="text-muted-foreground">
              ProxiZen BTP n’est pas une assistance administrative généraliste.
              C’est un accompagnement pensé pour le bâtiment, avec ses
              contraintes, son rythme et ses priorités. Je travaille entièrement
              à distance pour des entreprises de Suisse romande et du Genevois
              français.
            </p>
            <p className="text-muted-foreground">
              Pendant que vous êtes sur vos chantiers, l’administratif
              s’accumule : offres, factures, relances, échanges avec les
              fournisseurs. Mon rôle est de le tenir à jour, pour que vous
              puissiez vous concentrer sur votre métier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container">
        <SectionHead
          index="02"
          label="Principes"
          title="Une approche calme, mais exigeante"
          intro="Le nom ProxiZen n’est pas un hasard : une entreprise fonctionne mieux quand l’esprit est clair."
        />
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
          <dl className="md:col-span-9 md:col-start-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {principes.map((p) => (
              <div key={p.t} className="border-t border-border py-5">
                <dt className="text-lg font-medium">{p.t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <SectionCTA
      title="Envie d’en parler ?"
      description="Chaque entreprise est différente. Un premier appel permet de comprendre vos besoins réels."
      buttonText="Me contacter"
    />
  </Layout>
);

export default APropos;
