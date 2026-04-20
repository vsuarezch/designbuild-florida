import type { Metadata } from "next";
import Link from "next/link";
import { ALL_RESOURCES } from "./_shell";

export const metadata: Metadata = {
  title: "ADU & Modular Building Resources | designbuild-us",
  description:
    "Guides on ADU permitting in Florida, the new SB 48 ADU law, modular vs manufactured homes, guesthouse permits, and how to legalize an unpermitted ADU.",
  alternates: { canonical: "https://www.designbuild-us.com/resources" },
};

export default function ResourcesIndex() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-neutral-900" fill="currentColor" aria-hidden>
              <path d="M4 10l8-8 8 8-8 8-8-8z" />
            </svg>
            <span className="font-bold tracking-tight text-neutral-900">designbuild-us</span>
          </Link>
          <Link href="/#dbf" className="text-sm bg-neutral-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-neutral-700 transition-colors">
            Get ADU Quote
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Resources</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
          Understanding ADUs, Modular Homes &amp; Florida Permitting
        </h1>
        <p className="mt-4 text-neutral-600 text-lg max-w-2xl leading-relaxed">
          Plain-language guides for Florida homeowners, builders, and investors navigating
          ADU permits, new legislation, and construction document requirements.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {ALL_RESOURCES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-2xl border border-neutral-200 bg-white p-6 hover:border-neutral-400 hover:shadow-md transition-all group"
            >
              <h2 className="font-bold text-neutral-900 group-hover:underline">{r.title}</h2>
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{r.desc}</p>
              <p className="text-sm font-semibold text-neutral-900 mt-4">Read &rarr;</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-neutral-900 text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="font-bold text-xl">Have a project in mind?</p>
            <p className="text-neutral-300 text-sm mt-1">Get an ADU permit quote in two steps. No payment required.</p>
          </div>
          <Link href="/#dbf" className="shrink-0 bg-white text-neutral-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors">
            Get a Quote
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500 mt-8">
        &copy; {new Date().getFullYear()} designbuild-us &middot;{" "}
        <Link href="/" className="underline">designbuild-us.com</Link>
      </footer>
    </div>
  );
}
