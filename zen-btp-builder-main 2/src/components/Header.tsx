import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSiteSettings } from "@/components/SiteSettingsProvider";
import { trackCalendlyClick } from "@/lib/site-insights";
import Brand from "@/components/Brand";

const navLinks = [
  { label: "Accompagnement", path: "/accompagnement" },
  { label: "Offres", path: "/offres" },
  { label: "À propos", path: "/a-propos" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSiteSettings();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" aria-label="Accueil ProxiZen BTP">
          <Brand />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                location.pathname === link.path
                  ? "text-foreground underline underline-offset-[6px] decoration-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={settings.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackCalendlyClick("header-desktop")}
            className="btn-ink !py-2.5 !px-5"
          >
            Réserver un appel
          </a>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="py-3 border-b border-border text-base"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={settings.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                trackCalendlyClick("header-mobile");
                setMobileOpen(false);
              }}
              className="btn-ink mt-5"
            >
              Réserver un appel
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
