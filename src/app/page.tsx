
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Ruler,
  FileSpreadsheet,
  Hammer,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ChevronRight,
  Images,
  ClipboardCheck,
  HardHat,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// =============================================
// Stalo Engineering × Design Build Florida
// Single File React Site (Next.js/Vite compatible)
// TailwindCSS + shadcn/ui + framer-motion
// =============================================

/** PRIMARY SERVICES — handled by Stalo Engineering (Engineering & CDs) */
const SERVICES_STALO = [
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Structural Engineering (FL) — STALO",
    points: [
      "Cold‑Formed Steel (CFS), structural steel, CMU & reinforced concrete",
      "Design to FBC 2023 / ASCE 7‑22 / ACI 318 / AISC 360 / AISI S100‑S240",
      "Signed & sealed calculations, reports and letters",
    ],
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Permit‑Ready Construction Documents — STALO",
    points: [
      "Single‑family, duplex, townhomes (FBC‑R / FBC‑B)",
      "Conversions from wood to CFS",
      "Modular buildings & Florida DBPR approvals",
      "Full construction documents for permitting",
      "Additions and alterations to existing buildings",
      "HVHZ / NOA / Florida Product Approvals",
    ],
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Special Inspections — STALO",
    points: [
      "Miami‑Dade §8‑22 compliance",
      "Concrete, reinforcing, masonry, CFS",
      "Final sealed reports & logs",
    ],
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6" />,
    title: "CFS Shop Drawings & CNC — STALO",
    points: [
      "Pinnacle/Howick‑ready CNC exports",
      "Coil optimization, labeling, BOMs",
      "Coordination with factory & field",
    ],
  },
];

/** SECONDARY SERVICES — handled by Design Build Florida (GC/Install) */
const SERVICES_DBF = [
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "General Contracting & Install — DBF",
    points: [
      "Florida CGC services for installation and coordination",
      "Turnkey scheduling, inspections, and site logistics",
      "Permitting/expediting with local jurisdictions",
    ],
  },
];

const PORTFOLIO = [
  // Existing images remain valid per client instruction
  { src: "/images/portfolio/panelized2.jpg", alt: "Design-Build of sea front luxury panelized house", caption: "Design‑Build of sea‑front luxury panelized house" },
  { src: "/images/portfolio/gatlin.jpeg", alt: "Design-Install of metal trusses for commercial project", caption: "Design‑Install of metal trusses — commercial" },
  { src: "/images/portfolio/trusses1.jpeg", alt: "Design-Install of metal trusses for residential project", caption: "Design‑Install of metal trusses — residential" },
  { src: "/images/portfolio/mod1.jpg", alt: "Modular Glamping unit", caption: "Modular glamping unit" },
  { src: "/images/portfolio/mod3.jpg", alt: "Design of modular house", caption: "Design of modular house" },
  { src: "/images/portfolio/cfshouse1.jpg", alt: "Affordable CFS house", caption: "Affordable CFS house" },
  { src: "/images/portfolio/duplex.jpg", alt: "Metal trusses for Duplex house", caption: "Metal trusses — duplex" },
  { src: "/images/portfolio/sd2.png", alt: "Sample truss layout plan", caption: "Sample truss layout plan" },
  { src: "/images/portfolio/sd1.png", alt: "Sample shop drawing and calculation plan", caption: "Shop drawings & calc set" },
  { src: "/images/portfolio/revit1.png", alt: "BIM model of CFS house", caption: "BIM model — CFS house" },
  { src: "/images/portfolio/revit2.png", alt: "BIM model of modular house", caption: "BIM model — modular house" },
  { src: "/images/portfolio/revit3.png", alt: "BIM model of modular building", caption: "BIM model — modular building" },
];

const BADGES = [
  {
    label: "Florida PE",
    sub: "Stalo Engineering — Professional Engineer",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    label: "Florida CGC",
    sub: "Design Build Florida — Certified General Contractor",
    icon: <HardHat className="h-5 w-5" />,
  },
  { label: "HVHZ Ready", sub: "Miami‑Dade / Broward", icon: <ShieldIcon /> },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z" />
    </svg>
  );
}

const NAV = [
  { label: "Stalo Engineering", href: "#services-stalo" },
  { label: "GC / Install (DBF)", href: "#services-dbf" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Licenses", href: "#licenses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Site() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    team: "Stalo Engineering",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      /.+@.+\..+/.test(form.email) &&
      form.message.trim()
    );
  }, [form]);

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* SEO / Structured Data */}
      <SEO />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-neutral-900">
              <path
                d="M4 10l8-8 8 8-8 8-8-8z"
                fill="currentColor"
              />
            </svg>
            <div>
              <div className="font-semibold tracking-tight">
                Stalo Engineering × Design Build Florida
              </div>
              <div className="text-xs text-neutral-500">
                Engineering & CDs by Stalo • GC/Install by DBF
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-neutral-700 hover:text-neutral-900"
              >
                {n.label}
              </a>
            ))}
            <Button asChild className="rounded-2xl">
              <a href="#contact">Request a Quote</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
            >
              Stalo Engineering leads. Design Build Florida executes.
            </motion.h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              All engineering and construction documents are produced by{" "}
              <strong>Stalo Engineering</strong>. General contracting and
              installation services are delivered by{" "}
              <strong>Design Build Florida (DBF)</strong>. From single‑family to
              townhomes, we deliver Florida‑code compliant designs—including
              HVHZ work—for fast, predictable permitting and installation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#services-stalo">Work with Stalo</a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="#services-dbf" className="flex items-center">
                  GC / Install (DBF) <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-full"
                >
                  {b.icon}
                  <span className="font-medium">{b.label}</span>
                  <span className="text-neutral-500">• {b.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-neutral-200 shadow-inner overflow-hidden">
              <img
                src="/images/hero-project.jpg"
                alt="Stalo Engineering × Design Build Florida — modular CFS"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:flex gap-3 mt-3 text-xs text-neutral-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> FBC 2023
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> ASCE 7‑22
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> ACI 318 / AISI S100
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — STALO */}
      <section id="services-stalo" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Stalo Engineering — Engineering & Construction Documents
          </h2>
          <p className="mt-2 text-neutral-600">
            Primary delivery partner for all engineering, sealed documents,
            shop drawings, and CNC.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_STALO.map((s, idx) => (
              <Card key={idx} className="rounded-2xl border-neutral-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                      {s.icon}
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-neutral-700 list-disc list-inside">
                    {s.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — DBF */}
      <section id="services-dbf" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Design Build Florida — GC & Installation
          </h2>
          <p className="mt-2 text-neutral-600">
            GC services focused on installation, permitting, and on‑site
            execution to complement Stalo’s engineering.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DBF.map((s, idx) => (
              <Card key={idx} className="rounded-2xl border-neutral-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                      {s.icon}
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-neutral-700 list-disc list-inside">
                    {s.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                Portfolio
              </h2>
              <p className="mt-2 text-neutral-600">
                Selected photos and drawings (images unchanged).
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-neutral-600">
              <Images className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p, i) => (
              <figure
                key={i}
                className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-3 text-sm text-neutral-700">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Coverage */}
      <section id="licenses" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Licenses & Coverage
          </h2>
          <p className="mt-2 text-neutral-600">
            Statewide practice. Permit‑ready deliverables.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4"
              >
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                  {b.icon}
                </div>
                <div>
                  <div className="font-semibold">{b.label}</div>
                  <div className="text-sm text-neutral-600">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Florida Building Code</CardTitle>
                <CardDescription>We design to current code.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm list-disc list-inside text-neutral-700 space-y-1">
                  <li>FBC 2023 (Building & Residential)</li>
                  <li>ASCE 7‑22 wind & loads (HVHZ ready)</li>
                  <li>AISI S100/S240, ACI 318, TMS 402/602</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Submittals & Approvals</CardTitle>
                <CardDescription>Jurisdiction coordination.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm list-disc list-inside text-neutral-700 space-y-1">
                  <li>Florida Product Approvals / NOA</li>
                  <li>DBPR Modular approvals</li>
                  <li>Deferred submittals (MEP/HVAC, etc.)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Delivery & QA</CardTitle>
                <CardDescription>Field‑ready packages.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm list-disc list-inside text-neutral-700 space-y-1">
                  <li>Signed & sealed PDFs</li>
                  <li>Shop drawings + CNC/labels</li>
                  <li>Inspection logs & closeout</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              About Stalo Engineering × Design Build Florida
            </h2>
            <p className="mt-3 text-neutral-700">
              We operate as an integrated pairing:{" "}
              <strong>Stalo Engineering</strong> provides engineering design,
              sealed construction documents, shop drawings, and CNC outputs.
              <strong> Design Build Florida</strong> provides Florida CGC
              services for permitting, installation, and site execution. This
              separation keeps professional liability clear and gives you a
              faster path from sealed plans to installed work.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 bg-white">
            <img
              src="/images/about-factory.jpg"
              alt="Modular factory floor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Need sealed plans or shop drawings this month?
            </h3>
            <p className="text-neutral-300 mt-1">
              Stalo Engineering handles the engineering. DBF handles the
              installation.
            </p>
          </div>
          <Button
            asChild
            className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-2xl"
          >
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Contact
            </h2>
            <p className="mt-2 text-neutral-700">
              Share your project type, jurisdiction, target dates, and any
              reference files (PDF, DWG, CSV/BOM). Use the selector to route
              your request to Stalo (engineering) or DBF (GC/Install).
            </p>

            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" /> <span>(786) 440‑4097</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />{" "}
                <a className="underline" href="mailto:vinicio.suarez@designbuild-us.com">
                  vinicio.suarez@designbuild-us.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" /> <span>Weston, Florida</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5" />{" "}
                <a className="underline" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>We respond within 1 business day.</CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="text-green-700 text-sm">
                  Thanks—your message was captured locally for demo. Connect this
                  form to Formspree or your backend to start receiving
                  submissions.
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mdkljnde"
                  method="POST"
                  className="space-y-4"
                >
                  {/* Subject + redirect + honeypot */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New request — Stalo × DBF"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.designbuild-us.com/thank-you"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm">Name</label>
                      <Input
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Email</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm">Phone</label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="(###) ###-####"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Who do you need?</label>
                      <select
                        name="team"
                        value={form.team}
                        onChange={(e) =>
                          setForm({ ...form, team: e.target.value })
                        }
                        className="w-full h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm"
                      >
                        <option>Stalo Engineering</option>
                        <option>Design Build Florida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm">Service</label>
                    <Input
                      name="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      placeholder="e.g., Permit CDs, CFS CNC, Inspections, GC/Install"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Project Details</label>
                    <Textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Jurisdiction, scope, target dates, attachments (links)…"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-2xl" disabled={!canSubmit}>
                    Send
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">
              Stalo Engineering × Design Build Florida
            </div>
            <div className="text-neutral-600 mt-1">
              PE (Stalo) & CGC (DBF) licensed in Florida. Modular and
              conventional delivery.
            </div>
          </div>
          <div>
            <div className="font-semibold">Stalo Engineering — Primary</div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li>Structural engineering (CFS, steel, CMU, concrete)</li>
              <li>Permit‑ready CDs</li>
              <li>CFS shop drawings & CNC</li>
              <li>Special inspections</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">
              Design Build Florida — GC / Install
            </div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li>General contracting / installation</li>
              <li>Permitting & expediting</li>
              <li>Field coordination & inspections</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Stalo Engineering × Design Build Florida. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function SEO() {
  const services = [...SERVICES_STALO, ...SERVICES_DBF];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stalo Engineering × Design Build Florida",
    url: "https://www.designbuild-us.com",
    telephone: "(786) 440-4097",
    email: "vinicio.suarez@designbuild-us.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Weston",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: "Florida",
    image: ["https://www.designbuild-us.com/images/hero-modular.jpg"],
    sameAs: ["https://www.linkedin.com/"],
    openingHours: "Mo-Fr 09:00-17:00",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
    department: [
      {
        "@type": "LocalBusiness",
        name: "Stalo Engineering (Engineering & CDs)",
        makesOffer: SERVICES_STALO.map((s) => ({
          "@type": "Service",
          name: s.title,
        })),
      },
      {
        "@type": "LocalBusiness",
        name: "Design Build Florida (GC/Install)",
        makesOffer: SERVICES_DBF.map((s) => ({
          "@type": "Service",
          name: s.title,
        })),
      },
    ],
  };

  return (
    <>
      <title>
        Stalo Engineering × Design Build Florida — Engineering • CDs • CFS CNC •
        GC/Install
      </title>
      <meta
        name="description"
        content="All engineering & construction documents by Stalo Engineering. GC/Install by Design Build Florida. Florida PE & CGC delivering permit-ready CDs, CFS shop drawings & CNC, inspections, and installation for SFR, duplex, and townhomes (HVHZ included)."
      />
      <link rel="canonical" href="https://www.designbuild-us.com" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
