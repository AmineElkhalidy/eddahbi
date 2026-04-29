import { Stethoscope } from "lucide-react";
import { useTranslations } from "next-intl";

const navItems = [
  "about",
  "services",
  "values",
  "testimonials",
  "contact",
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-clinic-accent/70 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-clinic-accent p-2.5 ring-1 ring-clinic-light/20">
            <Stethoscope className="h-5 w-5 text-clinic-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-clinic-dark">
              {t("navbar.brand")}
            </p>
            <p className="text-xs text-clinic-dark/60">{t("footer.tagline")}</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-clinic-dark/80">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="transition hover:text-clinic-primary"
                >
                  {t(`navbar.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-clinic-dark/60">
          &copy; {year} {t("navbar.brand")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
