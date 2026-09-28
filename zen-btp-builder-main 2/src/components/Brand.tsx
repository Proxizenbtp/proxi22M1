/** Logotype typographique : pictogramme maison + nom, sans dégradé. */
const Brand = ({ inverted = false }: { inverted?: boolean }) => {
  const ink = inverted ? "#ffffff" : "hsl(192 33% 19%)";
  const soft = inverted ? "rgba(255,255,255,0.6)" : "hsl(165 18% 47%)";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 270 180" aria-hidden="true">
        <path d="M55 125V78L135 8L215 78V125" fill="none" stroke={ink} strokeWidth="22" strokeLinejoin="round" />
        <path d="M55 165C79 140 108 128 135 128C162 128 191 140 215 165" fill="none" stroke={soft} strokeWidth="22" />
      </svg>
      <span className="font-heading text-[19px] font-semibold tracking-tight" style={{ color: ink }}>
        ProxiZen
        <span className="ml-1.5 text-[11px] font-medium uppercase tracking-[0.2em] opacity-70">BTP</span>
      </span>
    </span>
  );
};

export default Brand;
