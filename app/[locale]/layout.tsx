import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://dr-youssef-eddahbi.vercel.app";

const seoByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Dr. Youssef Eddahbi | General Practitioner",
    description:
      "Multilingual clinic website for Dr. Youssef Eddahbi, general practitioner in Morocco.",
  },
  fr: {
    title: "Dr Youssef Eddahbi | Medecin Generaliste",
    description:
      "Site multilingue du cabinet du Dr Youssef Eddahbi, medecin generaliste au Maroc.",
  },
  ar: {
    title: "الدكتور يوسف الدهبي | طبيب عام",
    description:
      "موقع متعدد اللغات لعيادة الدكتور يوسف الدهبي، طبيب عام في المغرب.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const selectedLocale: Locale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const seo = seoByLocale[selectedLocale];
  const url = `${siteUrl}/${selectedLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/${selectedLocale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Dr. Youssef Eddahbi Clinic",
      title: seo.title,
      description: seo.description,
      locale: selectedLocale,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Dr. Youssef Eddahbi Clinic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${inter.variable} ${cairo.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`min-h-screen bg-background ${isArabic ? "font-(--font-cairo)" : "font-sans"}`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
