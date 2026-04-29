"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/212651421870";

export function WhatsAppFloat() {
  const t = useTranslations("whatsapp");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className={`fixed bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-clinic-primary text-white shadow-lg shadow-clinic-primary/30 ring-4 ring-white transition-all duration-300 hover:scale-105 hover:bg-clinic-dark ltr:right-5 rtl:left-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-clinic-primary/40"
        aria-hidden="true"
      />
      <MessageCircle className="h-5 w-5" />
      <span className="sr-only">{t("label")}</span>
    </a>
  );
}
