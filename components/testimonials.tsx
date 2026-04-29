import { ArrowUpRight, Quote, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/animated-section";
import {
  googleProfile,
  reviews,
  type Review,
} from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  if (reviews.length === 0) return null;

  const avgFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const countFormatter = new Intl.NumberFormat(locale);

  return (
    <AnimatedSection id="testimonials" className="mt-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <RatingStars value={googleProfile.ratingAverage} size="sm" />
            <span className="text-sm font-semibold text-clinic-dark">
              {t("rating", {
                average: avgFormatter.format(googleProfile.ratingAverage),
                count: countFormatter.format(googleProfile.ratingCount),
              })}
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-clinic-dark sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-clinic-dark/65">{t("subtitle")}</p>
        </div>

        <a
          href={googleProfile.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-1.5 rounded-full border border-clinic-light/40 bg-white px-4 py-2 text-sm font-semibold text-clinic-dark transition hover:-translate-y-0.5 hover:border-clinic-primary hover:text-clinic-primary"
        >
          {t("viewAll")}
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, idx) => (
          <li key={`${review.author}-${idx}`} className="contents">
            <ReviewCard review={review} viaLabel={t("viaGoogle")} />
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}

function ReviewCard({ review, viaLabel }: { review: Review; viaLabel: string }) {
  const locale = useLocale();
  const initials = getInitials(review.author);
  const dateLabel = formatDate(review.date, locale);

  return (
    <article
      lang={review.lang}
      dir={review.lang === "ar" ? "rtl" : "ltr"}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-clinic-accent bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-clinic-primary/40 hover:shadow-lg hover:shadow-clinic-primary/10"
    >
      <Quote
        className="pointer-events-none absolute -right-2 -top-2 h-20 w-20 text-clinic-accent/70 transition group-hover:text-clinic-light/30"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between gap-3">
        <RatingStars value={review.rating} />
        <GoogleBadge label={viaLabel} />
      </div>

      <p className="relative mt-4 line-clamp-6 text-sm leading-relaxed text-clinic-dark/80">
        {review.text}
      </p>

      <div className="relative mt-auto flex items-center gap-3 pt-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clinic-accent text-xs font-semibold text-clinic-primary ring-1 ring-clinic-light/20">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-clinic-dark">
            {review.author}
          </p>
          <p className="text-xs text-clinic-dark/55">{dateLabel}</p>
        </div>
      </div>
    </article>
  );
}

function RatingStars({
  value,
  size = "md",
}: {
  value: number;
  size?: "sm" | "md";
}) {
  const cls = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${cls} ${
            i <= Math.round(value)
              ? "fill-amber-400 text-amber-400"
              : "fill-clinic-accent text-clinic-accent"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-clinic-accent/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-clinic-dark/70">
      <GoogleGlyph className="h-3 w-3" />
      {label}
    </span>
  );
}

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.7 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.4 17.7 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.7 6c4.5-4.2 7-10.4 7-17.7z"
      />
      <path
        fill="#FBBC05"
        d="M10.5 28.7a14.3 14.3 0 0 1 0-9.4l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z"
      />
      <path
        fill="#EA4335"
        d="M24 48c6.5 0 11.9-2.1 15.9-5.9l-7.7-6c-2.1 1.4-4.9 2.3-8.2 2.3-6.3 0-11.6-3.9-13.5-9.7l-7.9 6.1C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );
}

function getInitials(name: string) {
  const cleaned = name.replace(/\[Placeholder\]/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(date: string, locale: string) {
  const [yearStr, monthStr] = date.split("-");
  const year = Number(yearStr);
  const month = monthStr ? Number(monthStr) - 1 : undefined;
  if (!year) return date;
  const d = new Date(year, month ?? 0, 1);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: month !== undefined ? "long" : undefined,
  }).format(d);
}
