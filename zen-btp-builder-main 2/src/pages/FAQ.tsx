import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SectionCTA from "@/components/SectionCTA";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const faqs = [
  {
    q: "Travaillez-vous avec des entreprises suisses ?",
    a: "Oui. ProxiZen BTP accompagne des entreprises du bâtiment de Suisse romande (Genève, Vaud…) et du Genevois français. Tout le travail se fait à distance : échange de documents par email ou espace partagé, suivi par écrit et appels sur rendez-vous.",
  },
  {
    q: "Comment fonctionne la facturation ?",
    a: "Chaque accompagnement fait l'objet d'un forfait mensuel fixe en CHF : dès 790 CHF pour Facturation, dès 1 290 CHF pour Facturation & encaissements et dès 1 690 CHF pour Bureau délégué. Le montant exact est fixé après un appel découverte. Le périmètre est défini par écrit dès le départ : vous savez exactement ce qui est inclus.",
  },
  {
    q: "Travaillez-vous avec ma fiduciaire ?",
    a: "Oui. Mon rôle est de lui transmettre des pièces complètes et bien classées, dans le format qu'elle utilise. La comptabilité, les décomptes TVA et les salaires restent de son ressort.",
  },
  {
    q: "Peut-on vous joindre par téléphone ?",
    a: "Oui, au +33 6 99 32 72 30. Si je ne suis pas disponible, laissez un message : je vous rappelle rapidement. Vous pouvez aussi m'écrire, ou réserver en ligne un créneau où je vous appelle. Au quotidien, le suivi se fait surtout par écrit, pour que chaque demande soit tracée.",
  },
  {
    q: "Pourquoi externaliser l'administratif ?",
    a: "Externaliser votre administratif vous permet de gagner du temps, de réduire le stress lié à la gestion quotidienne et de vous concentrer sur vos chantiers. C'est aussi un moyen de mieux suivre vos paiements et d'éviter les erreurs coûteuses.",
  },
  {
    q: "Comment démarrer ?",
    a: "Contactez-moi pour un premier échange gratuit. Nous analysons ensemble votre situation et vos besoins, puis je vous propose un forfait adapté. Pas d'engagement, pas de surprise.",
  },
  {
    q: "Quels documents devrai-je fournir ?",
    a: "Généralement vos offres, factures, relevés bancaires et documents administratifs courants. Je vous guide pas à pas dans la mise en place.",
  },
];

const FAQ = () => (
  <Layout>
    <SEO pageId="faq" />
    <PageHero label="FAQ" title="Questions fréquentes" />
    <section className="section-padding">
      <div className="container grid grid-cols-1 md:grid-cols-12 md:gap-10">
        <Accordion type="single" collapsible className="md:col-span-9 md:col-start-4 border-b border-border">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-t border-border border-b-0">
              <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                <span className="flex gap-6">
                  <span className="w-6 shrink-0 text-sm tabular-nums font-normal text-muted-foreground pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-12 pb-6 text-base text-muted-foreground leading-relaxed max-w-2xl">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    <SectionCTA title="Vous avez d’autres questions ?" buttonText="Me contacter" />
  </Layout>
);

export default FAQ;
