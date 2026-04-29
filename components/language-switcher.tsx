"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const labels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "AR",
};

const fullLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="relative inline-flex items-center gap-1.5 rounded-full border border-clinic-light/30 bg-white/80 px-3 py-1.5 text-xs font-semibold text-clinic-dark shadow-sm transition focus-within:border-clinic-primary hover:border-clinic-primary">
      <Globe className="h-3.5 w-3.5 text-clinic-primary" aria-hidden="true" />
      <span className="sr-only">Select language</span>
      <span aria-hidden="true">{labels[locale]}</span>
      <select
        aria-label="Language selector"
        className="absolute inset-0 cursor-pointer opacity-0"
        value={locale}
        onChange={(event) => {
          router.replace(pathname, { locale: event.target.value as Locale });
        }}
      >
        {routing.locales.map((value) => (
          <option key={value} value={value}>
            {fullLabels[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
