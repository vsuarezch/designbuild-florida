import Link from "next/link";
import React from "react";

const ALL_RESOURCES = [
  { title: "ADU Permitting in Florida", href: "/resources/adu-permitting-florida", desc: "What the process involves, what documents you need, and how long it takes." },
  { title: "Unpermitted ADU: How to Legalize It", href: "/resources/unpermitted-adu-florida", desc: "Risks of skipping the permit and how to fix it before it becomes a bigger problem." },
  { title: "Florida ADU Law SB 48 / HB 313", href: "/resources/florida-adu-law-sb48", desc: "New legislation requires cities to allow ADUs by right. What it means for you." },
  { title: "Modular vs. Manufactured Home", href: "/resources/modular-vs-manufactured-home", desc: "Two different legal categories with very different implications for financing and permitting." },
  { title: "Guesthouse Permit in Florida", href: "/resources/guesthouse-permit-florida", desc: "Do you need a permit? What are the requirements? How does it differ from an ADU?" },
];

export function ResourceShell({
  children,
  current,
}: {
  children: React.ReactNode;
  current: string;
}) {
  const related = ALL_RESOURCES.filter((r) => r.href !== current);

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-neutral-900" fill="currentColor" aria-hidden>
              <path d="M4 10l8-8 8 8-8 8-8-8z" />
            </svg>
            <span className="font-bold tracking-tight text-neutral-900">designbuild-us</span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/resources" className="text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block">
              ← All Resources
            </Link>
            <Link
              href="/#dbf"
              className="bg-neutral-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-neutral-700 transition-colors whitespace-nowrap"
            >
              Get ADU Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        {children}
      </main>

      {/* Related resources */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-lg font-bold text-neutral-900 mb-5">More Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-xl border border-neutral-200 bg-white p-4 hover:border-neutral-400 hover:shadow-sm transition-all group"
              >
                <p className="text-sm font-semibold text-neutral-900 group-hover:underline">{r.title}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-8 rounded-2xl bg-neutral-900 text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg">Ready to start your permit package?</p>
              <p className="text-neutral-300 text-sm mt-1">
                Two steps. No payment required. We respond within 1 business day.
              </p>
            </div>
            <Link
              href="/#dbf"
              className="shrink-0 bg-white text-neutral-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} designbuild-us &middot;{" "}
        <Link href="/" className="underline hover:text-neutral-700">designbuild-us.com</Link>
        {" "}&middot;{" "}
        <Link href="/resources" className="underline hover:text-neutral-700">Resources</Link>
      </footer>
    </div>
  );
}

export { ALL_RESOURCES };
