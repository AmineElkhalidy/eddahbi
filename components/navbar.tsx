"use client";

import { Menu, Stethoscope, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  "about",
  "services",
  "values",
  "testimonials",
  "contact",
] as const;

export function Navbar() {
  const t = useTranslations("navbar");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-clinic-accent/60 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-clinic-dark"
          onClick={() => setOpen(false)}
        >
          <div className="rounded-full bg-clinic-accent p-2 ring-1 ring-clinic-light/20 transition group-hover:ring-clinic-primary/40">
            <Stethoscope className="h-5 w-5 text-clinic-primary" />
          </div>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            {t("brand")}
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-clinic-dark md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative transition hover:text-clinic-primary
                after:absolute after:inset-x-0 after:-bottom-1 after:mx-auto after:h-px after:w-0
                after:bg-clinic-primary after:transition-all hover:after:w-full"
            >
              {t(item)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("close") : t("menu")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-clinic-light/30 bg-white text-clinic-dark transition hover:border-clinic-primary md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-clinic-accent/60 bg-white/90 backdrop-blur-xl transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-clinic-dark sm:px-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 transition hover:bg-clinic-accent hover:text-clinic-primary"
                >
                  {t(item)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
