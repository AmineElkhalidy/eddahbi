import {
  ArrowRight,
  Award,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  HeartPulse,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const serviceIcons = [Stethoscope, HeartPulse, FileCheck2] as const;

const trustIcons = {
  graduate: Award,
  languages: Languages,
  approach: ShieldCheck,
  access: CalendarCheck,
} as const;

const valueIcons = {
  personal: Users,
  multilingual: Globe2,
  modern: Sparkles,
  accessible: MessageCircle,
} as const;

const trustKeys = ["graduate", "languages", "approach", "access"] as const;
const valueKeys = ["personal", "multilingual", "modern", "accessible"] as const;

const mapLink =
  "https://www.google.com/maps/place/Milan+Caf%C3%A9/@31.8307249,-7.3121125,39m/data=!3m1!1e3!4m15!1m8!3m7!1s0xda516fb906ce745:0x7c4f95795ff07658!2sLaattaouia!3b1!8m2!3d31.8348202!4d-7.3122951!16s%2Fm%2F0b6jf1w!3m5!1s0xda51773fdf89f29:0x9b9ee27403113f13!8m2!3d31.830735!4d-7.3119911!16s%2Fg%2F11tss5hp1c!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D";

const phones = [
  { display: "0651 421 870", tel: "+212651421870" },
  { display: "0524 235 976", tel: "+212524235976" },
];

type ServiceItem = { title: string; description: string };

export default function LandingPage() {
  const t = useTranslations();
  const services = t.raw("services.items") as ServiceItem[];

  return (
    <div className="text-clinic-dark">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        {/* HERO */}
        <AnimatedSection className="relative overflow-hidden rounded-[2rem] border border-clinic-accent/70 bg-white/70 p-8 shadow-soft backdrop-blur-sm sm:p-12">
          <div
            aria-hidden="true"
            className="bg-dots pointer-events-none absolute inset-0 opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-clinic-light/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-clinic-accent blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-clinic-light/30 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-clinic-primary shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-clinic-primary" />
                {t("hero.badge")}
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-clinic-dark sm:text-5xl lg:text-6xl">
                {t("hero.name")}
              </h1>
              <p className="mt-3 text-lg font-medium text-clinic-primary sm:text-xl">
                {t("hero.tagline")}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-clinic-dark/70 sm:text-lg">
                {t("hero.subtitle")}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-clinic-dark/80">
                <li className="inline-flex items-center gap-1.5 rounded-full border border-clinic-accent bg-white/80 px-3 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-clinic-primary" />
                  {t("hero.pills.location")}
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full border border-clinic-accent bg-white/80 px-3 py-1.5">
                  <Languages className="h-3.5 w-3.5 text-clinic-primary" />
                  {t("hero.pills.languages")}
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full border border-clinic-accent bg-white/80 px-3 py-1.5">
                  <CalendarCheck className="h-3.5 w-3.5 text-clinic-primary" />
                  {t("hero.pills.walkin")}
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/212651421870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-clinic-primary/25 transition hover:-translate-y-0.5 hover:bg-clinic-dark hover:shadow-clinic-primary/40"
                >
                  {t("hero.book")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-clinic-light/40 bg-white px-6 py-3 text-sm font-semibold text-clinic-dark transition hover:-translate-y-0.5 hover:border-clinic-primary hover:text-clinic-primary"
                >
                  {t("hero.services")}
                </a>
              </div>
            </div>

            {/* Decorative monogram tile */}
            <div
              aria-hidden="true"
              className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-clinic-light/30 via-clinic-accent to-white shadow-soft" />
              <div className="absolute inset-3 rounded-[1.6rem] border border-clinic-light/20 bg-white/70 backdrop-blur-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-clinic-primary text-white shadow-lg shadow-clinic-primary/30 ring-8 ring-white/80">
                  <span className="text-5xl font-bold tracking-tight">YE</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-clinic-light/20 bg-white px-4 py-2 text-xs font-semibold text-clinic-dark shadow-sm">
                <Stethoscope className="h-3.5 w-3.5 text-clinic-primary" />
                {t("hero.badge")}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* TRUST STRIP */}
        <AnimatedSection className="mt-8">
          <h2 className="sr-only">{t("trust.title")}</h2>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {trustKeys.map((key) => {
              const Icon = trustIcons[key];
              return (
                <li
                  key={key}
                  className="flex items-start gap-3 rounded-2xl border border-clinic-accent/70 bg-white/70 p-4 backdrop-blur-sm transition hover:border-clinic-primary/40 hover:bg-white"
                >
                  <div className="rounded-xl bg-clinic-accent p-2 text-clinic-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-clinic-dark">
                      {t(`trust.items.${key}.title`)}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-clinic-dark/65">
                      {t(`trust.items.${key}.description`)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </AnimatedSection>

        {/* ABOUT */}
        <AnimatedSection
          id="about"
          className="mt-20 rounded-3xl border border-clinic-accent/70 bg-white p-8 shadow-soft sm:p-10"
        >
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clinic-accent text-clinic-primary">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-clinic-dark sm:text-3xl">
                {t("about.title")}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-clinic-dark/75 sm:text-lg">
                {t("about.description")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* SERVICES */}
        <AnimatedSection id="services" className="mt-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-clinic-dark sm:text-3xl">
              {t("services.title")}
            </h2>
            <p className="mt-3 text-base text-clinic-dark/65">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Stethoscope;
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-clinic-accent bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-clinic-primary/40 hover:shadow-lg hover:shadow-clinic-primary/10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-clinic-accent/60 blur-2xl transition duration-300 group-hover:bg-clinic-light/30"
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-clinic-accent text-clinic-primary ring-1 ring-clinic-light/20 transition group-hover:bg-clinic-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-clinic-dark">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-clinic-dark/65">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        {/* VALUES */}
        <AnimatedSection
          id="values"
          className="mt-20 rounded-3xl border border-clinic-accent/70 bg-gradient-to-br from-white via-clinic-accent/40 to-white p-8 shadow-soft sm:p-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-clinic-dark sm:text-3xl">
              {t("values.title")}
            </h2>
            <p className="mt-3 text-base text-clinic-dark/65">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-white bg-white/80 p-5 backdrop-blur-sm transition hover:border-clinic-primary/30 hover:bg-white"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-clinic-accent text-clinic-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-clinic-dark">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-clinic-dark/65">
                    {t(`values.items.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <AnimatedSection
          id="contact"
          className="mt-20 rounded-3xl border border-clinic-accent/70 bg-white p-8 shadow-soft sm:p-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-clinic-dark sm:text-3xl">
              {t("contact.title")}
            </h2>
            <p className="mt-3 text-base text-clinic-dark/65">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-4">
              <ContactRow
                icon={MapPin}
                label={t("contact.addressLabel")}
                href={mapLink}
                external
              >
                {t("contact.address")}
              </ContactRow>

              <div className="rounded-2xl border border-clinic-accent bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-clinic-accent text-clinic-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-clinic-dark">
                    {t("contact.phoneLabel")}
                  </p>
                </div>
                <ul className="mt-3 space-y-1.5 ps-12 text-sm">
                  {phones.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        className="text-clinic-dark/80 transition hover:text-clinic-primary"
                      >
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactRow icon={ClipboardCheck} label={t("contact.hoursLabel")}>
                {t("contact.hours")}
              </ContactRow>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/212651421870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-clinic-primary/25 transition hover:-translate-y-0.5 hover:bg-clinic-dark"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("contact.whatsapp")}
                </a>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-clinic-light/40 bg-white px-5 py-2.5 text-sm font-semibold text-clinic-dark transition hover:border-clinic-primary hover:text-clinic-primary"
                >
                  <MapPin className="h-4 w-4" />
                  {t("contact.directions")}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-clinic-accent bg-clinic-accent/40 shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=31.830735,-7.3119911&t=&z=18&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-[22rem] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location map"
              />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

type ContactRowProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
};

function ContactRow({
  icon: Icon,
  label,
  href,
  external,
  children,
}: ContactRowProps) {
  const content = (
    <>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clinic-accent text-clinic-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-clinic-dark/55">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-clinic-dark group-hover:text-clinic-primary">
          {children}
        </p>
      </div>
    </>
  );

  const baseClass =
    "group flex items-start gap-3 rounded-2xl border border-clinic-accent bg-white p-5 transition hover:border-clinic-primary/40";

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClass}
      >
        {content}
      </a>
    );
  }
  return <div className={baseClass}>{content}</div>;
}
