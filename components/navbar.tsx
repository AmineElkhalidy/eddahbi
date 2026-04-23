import { Stethoscope } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

const navItems = ["about", "services", "contact"] as const;

export function Navbar() {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-clinic-dark">
          <div className="rounded-full bg-clinic-accent p-2">
            <Stethoscope className="h-5 w-5 text-clinic-primary" />
          </div>
          <span className="text-sm font-semibold sm:text-base">{t("brand")}</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-clinic-dark md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="transition hover:text-clinic-primary">
              {t(item)}
            </a>
          ))}
        </div>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}
