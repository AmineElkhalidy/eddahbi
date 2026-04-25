import {
  ClipboardCheck,
  HeartPulse,
  MapPin,
  Phone,
  Stethoscope,
  FileCheck2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/animated-section";
import { Navbar } from "@/components/navbar";

const serviceIcons = [Stethoscope, HeartPulse, FileCheck2] as const;
const mapLink =
  "https://www.google.com/maps/place/Milan+Caf%C3%A9/@31.8307249,-7.3121125,39m/data=!3m1!1e3!4m15!1m8!3m7!1s0xda516fb906ce745:0x7c4f95795ff07658!2sLaattaouia!3b1!8m2!3d31.8348202!4d-7.3122951!16s%2Fm%2F0b6jf1w!3m5!1s0xda51773fdf89f29:0x9b9ee27403113f13!8m2!3d31.830735!4d-7.3119911!16s%2Fg%2F11tss5hp1c!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D";

export default function LandingPage() {
  const t = useTranslations();
  const services = t.raw("services.items") as string[];

  return (
    <div className="bg-background text-clinic-dark">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <AnimatedSection className="rounded-3xl bg-linear-to-br from-clinic-accent to-white p-8 shadow-soft sm:p-12">
          <p className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-clinic-primary shadow-sm">
            {t("hero.badge")}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-clinic-dark sm:text-5xl">
            {t("hero.name")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-clinic-dark/80">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/212651421870"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border bg-[#0B5D34] bg-clinic-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-clinic-dark"
            >
              {t("hero.book")}
            </a>
            <a
              href="#services"
              className="rounded-full border border-clinic-light/40 bg-white px-6 py-3 text-sm font-semibold text-clinic-dark transition hover:border-clinic-primary"
            >
              {t("hero.services")}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="about"
          className="mt-16 rounded-3xl bg-white p-8 shadow-soft sm:p-10"
        >
          <h2 className="text-2xl font-semibold text-clinic-dark">
            {t("about.title")}
          </h2>
          <p className="mt-4 leading-8 text-clinic-dark/80">
            {t("about.description")}
          </p>
        </AnimatedSection>

        <AnimatedSection id="services" className="mt-16">
          <h2 className="text-2xl font-semibold text-clinic-dark">
            {t("services.title")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article
                  key={service}
                  className="rounded-2xl border border-clinic-accent bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1"
                >
                  <Icon className="h-7 w-7 text-clinic-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{service}</h3>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="contact"
          className="mt-16 rounded-3xl bg-white p-8 shadow-soft sm:p-10"
        >
          <h2 className="text-2xl font-semibold text-clinic-dark">
            {t("contact.title")}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <MapPin className="h-5 w-5 text-clinic-primary" />
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-clinic-light underline-offset-4 transition hover:text-clinic-primary"
                >
                  {t("contact.address")}
                </a>
              </div>
              <div className="flex items-start gap-3 rtl:flex-row-reverse">
                <Phone className="mt-1 h-5 w-5 text-clinic-primary" />
                <div className="space-y-1">
                  <a
                    href="tel:+212651421870"
                    className="block decoration-clinic-light underline-offset-4 transition hover:text-clinic-primary"
                  >
                    0651421870
                  </a>
                  <a
                    href="tel:+212524235976"
                    className="block decoration-clinic-light underline-offset-4 transition hover:text-clinic-primary"
                  >
                    0524235976
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <ClipboardCheck className="h-5 w-5 text-clinic-primary" />
                <p>{t("contact.hours")}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-clinic-accent">
              <iframe
                src="https://maps.google.com/maps?q=31.830735,-7.3119911&t=&z=18&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location map"
              />
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
