import { Link } from "react-router-dom";
import Brand from "@/components/Brand";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-14 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Brand inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Assistance administrative à distance pour les entreprises du
            bâtiment de Suisse romande et du Genevois français.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow !text-primary-foreground/50 mb-4">Pages</p>
          <nav className="flex flex-col gap-2 text-sm">
            {[
              { label: "Accompagnement", path: "/accompagnement" },
              { label: "Offres", path: "/offres" },
              { label: "À propos", path: "/a-propos" },
              { label: "FAQ", path: "/faq" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-primary-foreground/80 hover:text-primary-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow !text-primary-foreground/50 mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:contact@proxizenbtp.fr" className="text-primary-foreground/80 hover:text-primary-foreground">
              contact@proxizenbtp.fr
            </a>
            <a href="tel:+33699327230" className="text-primary-foreground/80 hover:text-primary-foreground">
              +33 6 99 32 72 30
            </a>
            <p className="text-primary-foreground/50">Laissez un message, je vous rappelle rapidement.</p>
            <p className="text-primary-foreground/50">Réponse en général dans la journée, au plus tard sous 48 h ouvrées</p>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-primary-foreground/15 pt-6 flex flex-col gap-2 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} ProxiZen BTP</span>
        <span>Genève · Vaud · Suisse romande · Genevois français</span>
      </div>
    </div>
  </footer>
);

export default Footer;
