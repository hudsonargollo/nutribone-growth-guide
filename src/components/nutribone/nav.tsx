import { Link, useLocation } from "@tanstack/react-router";
import appLogo from "@/assets/catalog/portada.webp?url";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/catalog", label: "Catálogo" },
  { to: "/whatsapp", label: "WhatsApp" },
  { to: "/contenido", label: "Contenido" },
  { to: "/ads", label: "Ads" },
  { to: "/generador", label: "Generador" },
  { to: "/highlights", label: "Highlights" },
  { to: "/calculadora", label: "Calculadora" },
] as const;

export function NavLink({ to, label }: { to: (typeof NAV)[number]["to"]; label: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
        active
          ? "bg-brand-soft text-brand-foreground"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {label}
      {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold" />}
    </Link>
  );
}

export function Header({ showNav = true }: { showNav?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700-10 bg-slate-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={appLogo} alt="" className="h-9 w-9 rounded-2xl object-contain" />
          <span className="font-serif text-xl tracking-tight text-slate-900">NutriBone</span>
        </Link>
        {showNav && (
          <nav className="hidden items-center gap-1 sm:flex">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>
        )}
        <a
          href={"https://wa.me/" + "59177313568"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-gold-soft bg-gold-soft px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-gold hover:text-slate-900"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
