"use client";

import { useLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="text-sm font-medium text-clinic-dark">
      <span className="sr-only">Select language</span>
      <select
        aria-label="Language selector"
        className="rounded-full border border-clinic-light/30 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-clinic-primary"
        value={locale}
        onChange={(event) => {
          router.replace(pathname, { locale: event.target.value as Locale });
        }}
      >
        {routing.locales.map((value) => (
          <option key={value} value={value}>
            {value === "ar" ? "العربية" : value === "fr" ? "Français" : "English"}
          </option>
        ))}
      </select>
    </label>
  );
}
