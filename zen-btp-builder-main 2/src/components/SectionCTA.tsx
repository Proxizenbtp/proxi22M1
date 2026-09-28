import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/components/SiteSettingsProvider";
import { trackCalendlyClick } from "@/lib/site-insights";

interface SectionCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  to?: string;
  href?: string;
  hideButton?: boolean;
}

const SectionCTA = ({ title, description, buttonText, to = "/contact", href, hideButton = false }: SectionCTAProps) => {
  const { settings } = useSiteSettings();
  const resolvedTitle = title ?? settings.finalCtaTitle;
  const resolvedButtonText = buttonText ?? settings.finalCtaButtonText;
  const isCalendly = Boolean(href && href.includes("calendly.com"));
  const isExternal = Boolean(href && /^https?:\/\//.test(href));

  const content = (
    <>
      {resolvedButtonText}
      <ArrowRight size={16} />
    </>
  );

  return (
    <section className="section-padding">
      <div className="container">
        <div className="rule-top grid grid-cols-1 gap-8 pt-10 md:grid-cols-12 md:gap-10">
          <p className="eyebrow md:col-span-3">Premier échange</p>
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-5xl leading-[1.05] max-w-3xl text-balance">{resolvedTitle}</h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line">{description}</p>
            ) : null}
            {hideButton ? null : (
              <div className="mt-9">
                {href ? (
                  <a
                    href={href}
                    className="btn-ink"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={() => isCalendly && trackCalendlyClick("section-cta")}
                  >
                    {content}
                  </a>
                ) : (
                  <Link to={to} className="btn-ink">
                    {content}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
