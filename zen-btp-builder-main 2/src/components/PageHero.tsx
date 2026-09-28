import { ReactNode } from "react";

/** En-tête de page intérieure : sobre, aligné à gauche, sur la grille. */
const PageHero = ({ label, title, intro }: { label: string; title: ReactNode; intro?: ReactNode }) => (
  <section className="pt-14 pb-12 md:pt-20 md:pb-16 border-b border-border">
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
      <p className="eyebrow md:col-span-3 md:pt-4">{label}</p>
      <div className="md:col-span-9">
        <h1 className="text-4xl md:text-6xl leading-[1.03] tracking-[-0.03em] max-w-4xl text-balance">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p> : null}
      </div>
    </div>
  </section>
);

export default PageHero;
