/**
 * Patient testimonials sourced from the Google Business Profile of
 * "د. الدهبي يوسف - الطب العام العطاوية | Dr. Youssef Eddahbi - Médecin Généraliste Laattaouia"
 *
 * HOW TO UPDATE
 * -------------
 * 1. Open the GBP on Google Maps and click "Reviews".
 * 2. For each review, copy the author name, star rating, the review's date
 *    (e.g. "2025-03"), and the original-language text into a `Review` below.
 * 3. Set `lang` to the original language of the review ("ar" | "fr" | "en").
 * 4. Update `placeUrl` with the canonical URL of the listing on Google so the
 *    "Read all reviews on Google" CTA points to the real profile.
 *
 * The items below are clearly-marked placeholders — replace them.
 */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** ISO-like date: "YYYY" or "YYYY-MM" or "YYYY-MM-DD". */
  date: string;
  text: string;
  lang: "ar" | "fr" | "en";
};

export const googleProfile = {
  name: "Dr. Youssef Eddahbi - Médecin Généraliste Laattaouia",
  ratingAverage: 5.0,
  ratingCount: 9,
  /** TODO: replace with the canonical Google Maps URL of the listing. */
  placeUrl:
    "https://www.google.com/maps/place/%D8%AF.+%D8%A7%D9%84%D8%AF%D9%87%D8%A8%D9%8A+%D9%8A%D9%88%D8%B3%D9%81+-+%D8%A7%D9%84%D8%B7%D8%A8+%D8%A7%D9%84%D8%B9%D8%A7%D9%85+%D8%A7%D9%84%D8%B9%D8%B7%D8%A7%D9%88%D9%8A%D8%A9+%7C+Dr.+Youssef+Eddahbi+-+M%C3%A9decin+G%C3%A9n%C3%A9raliste+Laattaouia%E2%80%AD/@31.8307222,-7.3141685,297m/data=!3m1!1e3!4m10!1m2!2m1!1sDr.+Youssef+Eddahbi+Laattaouia!3m6!1s0xda517961693c33d:0x27840cc6814f871c!8m2!3d31.8307222!4d-7.3119154!15sCh5Eci4gWW91c3NlZiBFZGRhaGJpIExhYXR0YW91aWFaHyIdZHIgeW91c3NlZiBlZGRhaGJpIGxhYXR0YW91aWGSARRnZW5lcmFsX3ByYWN0aXRpb25lcuABAA!16s%2Fg%2F11nhf253l_!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D",
  /** TODO: replace with the "Write a review" deep link from the GBP. */
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr.+Youssef+Eddahbi+Laattaouia",
};

export const reviews: Review[] = [
  {
    author: "Mouaad Masoudy",
    rating: 5,
    date: "2026-04",
    text: "Excellent service, awesome doctor!",
    lang: "en",
  },
  {
    author: "Mohammed Afandi",
    rating: 5,
    date: "2026-04",
    text: "Thank you for your excellent service, high morals, and professionalism. You are a doctor in every sense of the word.",
    lang: "en",
  },
  {
    author: "Salah Eddine",
    rating: 5,
    date: "2026-04",
    text: "Excellent doctor, thank you for your excellent service and your high morals.",
    lang: "en",
  },
];
