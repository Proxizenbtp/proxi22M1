import { ReactNode } from "react";

interface SectionHeadProps {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** En-tête de section en grille : numéro + étiquette à gauche, titre à droite. */
const SectionHead = ({ index, label, title, intro }: SectionHeadProps) => (
  <div className="rule-top grid grid-cols-1 gap-6 pt-6 md:grid-cols-12 md:gap-10 mb-12 md:mb-16">
    <p className="eyebrow md:col-span-3">
      {index ? <span className="text-foreground">{index}</span> : null}
      {index ? " — " : null}
      {label}
    </p>
    <div className="md:col-span-9">
      <h2 className="text-3xl md:text-[2.6rem] leading-[1.1] max-w-3xl text-balance">{title}</h2>
      {intro ? <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{intro}</p> : null}
    </div>
  </div>
);

export default SectionHead;
