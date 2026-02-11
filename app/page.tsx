"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage, useTheme } from "./providers";
import { translations } from "./translations";

const INSTAGRAM_HANDLE = "iconic_clothes_ks";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const products = [
  { id: 1, name: "LTB puffer jacket | nr.M-L", nameSq: "Jakë lëkure vintazh", price: "€35", image: "/images/jacket6.jpeg" },
  { id: 2, name: "Classic Denim Jacket | nr.M", nameSq: "Jakë xhinse klasike", price: "€65", image: "/images/jacket1.jpeg" },
  { id: 3, name: "Bomber Jacket | nr.L", nameSq: "Jakë bomber", price: "€75", image: "/images/jacket2.jpeg" },
  { id: 4, name: "Lekur 100% | nr.L", nameSq: "Blazer e madhe", price: "€135", image: "/images/jacket3.jpeg" },
  { id: 5, name: "Cropped Shearling | nr.M", nameSq: "Jakë shearling e shkurtër", price: "€120", image: "/images/jacket4.jpeg" },
  { id: 6, name: "Vintage Suede Jacket | nr.L", nameSq: "Jakë suede vintazh", price: "€85", image: "/images/jacket5.jpeg" },
  { id: 7, name: "Minimal Wool Coat | nr.M", nameSq: "Pallto leshi minimal", price: "€110", image: "/images/jacket7.jpeg" },
  { id: 8, name: "Lekure 100% | nr.S", nameSq: "Jakë sportive klasike", price: "€35", image: "/images/jacket8.jpeg" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const t = translations[locale];

  const base = "min-h-screen transition-colors duration-200";
  const bg = "bg-[var(--background)]";
  const bgAlt = "bg-[var(--background-alt)]";
  const bgMuted = "bg-[var(--background-muted)]";
  const text = "text-[var(--foreground)]";
  const textMuted = "text-[var(--foreground-muted)]";
  const textSubtle = "text-[var(--foreground-subtle)]";
  const border = "border-[var(--border)]";
  const accent = "bg-[#ff7f50] hover:bg-[#ff9066]";
  const accentBorder = "border-[#ff7f50] text-[#ff7f50] hover:bg-[#ff7f50] hover:text-white";

  return (
    <div className={`${base} ${bg} ${text}`}>
      {/* Header */}
      <header className={`fixed left-0 right-0 top-0 z-50 border-b ${border} ${bg}/90 backdrop-blur-lg`}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
              {t.hero.title}
            </span>
            <span className={`rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${bgAlt} ${text}`}>
              {t.hero.badge}
            </span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4">
            {/* Language: SQ | EN */}
            <div className="flex rounded-full border border-[var(--border)] p-0.5">
              <button
                type="button"
                onClick={() => setLocale("sq")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition sm:px-3 ${locale === "sq" ? "bg-[#ff7f50] text-white" : textMuted + " hover:opacity-80"}`}
                aria-label="Shqip"
              >
                SQ
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition sm:px-3 ${locale === "en" ? "bg-[#ff7f50] text-white" : textMuted + " hover:opacity-80"}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${bgAlt} ${text} transition hover:opacity-90`}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href="#products" className={`hidden text-xs uppercase tracking-widest transition hover:text-[#ff7f50] sm:inline-block ${textMuted}`}>
              {t.nav.products}
            </a>
            <a href="#about" className={`hidden text-xs uppercase tracking-widest transition hover:text-[#ff7f50] md:inline-block ${textMuted}`}>
              {t.nav.about}
            </a>
            <a href="#contact" className={`hidden text-xs uppercase tracking-widest transition hover:text-[#ff7f50] md:inline-block ${textMuted}`}>
              {t.nav.contact}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition sm:px-5 sm:py-2 ${accent}`}
            >
              {t.nav.instagram}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero – refined start of page */}
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <p className={`text-xs font-medium uppercase tracking-[0.35em] ${textSubtle}`}>
              {locale === "sq" ? "Jakna ikonike & vintage" : "Iconic & vintage jackets"}
            </p>
            <h1 className="mt-2 flex flex-wrap items-baseline gap-2 sm:mt-3">
              <span className="text-2xl font-semibold uppercase tracking-[0.2em] sm:text-3xl md:tracking-[0.28em] lg:text-4xl">
                {t.hero.title}
              </span>
              <span className={`rounded px-2.5 py-1 text-sm font-bold uppercase tracking-widest ${bgAlt} ${text}`}>
                {t.hero.badge}
              </span>
            </h1>
            <p className={`mt-3 text-lg font-medium uppercase tracking-[0.18em] sm:mt-4 sm:text-xl md:text-2xl ${textMuted}`}>
              {t.hero.tagline}
            </p>
            <p className={`mt-4 text-sm leading-relaxed sm:mt-6 sm:text-base ${textMuted}`}>
              {t.hero.subtitle}
            </p>
            <p className={`mt-2 inline-flex items-center gap-1.5 rounded-full border ${border} ${bgAlt} px-3 py-1.5 text-xs font-medium sm:mt-3 sm:px-4 sm:py-2 sm:text-sm`}>
              <span className="text-[#ff7f50]">◆</span>
              {t.hero.customJackets}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-block rounded-full px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition sm:mt-10 sm:px-8 sm:py-4 ${accent}`}
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
        <div className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=85"
            alt={locale === "sq" ? "Jakë ikonike – iconic_clothes_ks" : "Iconic jacket – iconic_clothes_ks"}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-transparent to-transparent lg:from-[var(--background)]/40`} />
        </div>
      </section>

      {/* Products */}
      <section id="products" className={`scroll-mt-20 border-t ${border} ${bgMuted} py-14 sm:py-20 md:py-24`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${textSubtle}`}>
              {t.products.label}
            </p>
            <h2 className={`mt-2 text-2xl font-medium sm:text-3xl md:text-4xl ${text}`}>
              {t.products.title}
            </h2>
            <p className={`mx-auto mt-2 max-w-sm text-sm sm:mt-3 ${textMuted}`}>
              {t.products.subtitle}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className={`group flex flex-col overflow-hidden rounded-xl border ${border} ${bgAlt} transition hover:border-[#ff7f50]/25 hover:shadow-lg`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={locale === "sq" ? product.nameSq : product.name}
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-sm font-medium tracking-wide sm:text-base">
                    {locale === "sq" ? product.nameSq : product.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#ffc107] sm:text-sm">{product.price}</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 block w-full rounded-full border py-2.5 text-center text-xs font-semibold uppercase tracking-wider transition sm:mt-4 ${accentBorder}`}
                  >
                    {t.products.viewOnInstagram}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`scroll-mt-20 border-t ${border} ${bg} py-14 sm:py-20 md:py-24`}>
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${textSubtle}`}>
            {t.about.label}
          </p>
          <p className={`mt-6 text-base leading-relaxed sm:text-lg ${textMuted}`}>
            {t.about.text}
          </p>
          <div className={`mt-8 inline-flex items-center gap-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 px-4 py-2.5 sm:mt-10 sm:px-5`}>
            <span className="text-[#ffc107]" aria-hidden>✓</span>
            <span className="text-sm font-medium">{t.about.guarantee}</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`scroll-mt-20 border-t ${border} ${bgAlt} py-14 sm:py-20 md:py-24`}>
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${textSubtle}`}>
            {t.contact.label}
          </p>
          <p className={`mt-4 text-sm sm:text-base ${textMuted}`}>
            {t.contact.text}
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition sm:mt-8 sm:px-8 sm:py-4 ${accent}`}
          >
            <InstagramIcon className="h-5 w-5" />
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${border} ${bg} py-8 sm:py-10`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">{t.hero.title}</span>
            <span className={`rounded ${bgAlt} px-2 py-0.5 text-xs font-bold uppercase tracking-wider`}>{t.hero.badge}</span>
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition hover:text-[#ff7f50] ${textSubtle}`}
            aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
        <p className={`mt-6 text-center text-xs uppercase tracking-widest ${textSubtle}`}>
          © {new Date().getFullYear()} iconic_clothes_ks. {t.footer.rights}
        </p>
      </footer>
    </div>
  );
}
