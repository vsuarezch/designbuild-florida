"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Ruler, FileSpreadsheet, Hammer, BadgeCheck, Phone, Mail, MapPin, Linkedin, ChevronRight, Images, ClipboardCheck, HardHat, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// =============================================
// Design Build Florida - Single File React Site
// TailwindCSS + shadcn/ui + framer-motion
// How to use:
// 1) Drop into a Next.js or Vite React project with Tailwind + shadcn/ui configured.
// 2) Set this component as the default page export.
// 3) Replace placeholder images in PORTFOLIO with your own.
// 4) Hook the contact form to your backend or a service like Formspree.
// =============================================

const SERVICES = [
  {
    icon: <Ruler className="h-6 w-6" />, 
    title: "Structural Engineering (FL)",
    points: [
      "Cold-Formed Steel (CFS), structural steel, CMU & reinforced concrete",
      "Design to FBC 2023 / ASCE 7-22 / ACI 318 /  AISC360 / AISI S100-S240",
      "Signed & sealed calculations and letters"
    ],
  },
  
  {
    icon: <Building2 className="h-6 w-6" />, 
    title: "Complete Permit CD Packages",
    points: [
      "Single-family, duplex, townhouses",
      "Conversion from wood to steel",
      "Modular Buildings and Florida approval process",
      "Full construction documents for permitting",
      "Additions and alterations to existing buildings",
      "HVHZ / NOA / Florida Product Approvals"
    ],
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />, 
    title: "Special Inspection Services",
    points: [
      "Miami-Dade §8-22 compliance",
      "Concrete, reinforcing, masonry, CFS",
      "Final sealed reports & logs"
    ],
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6" />, 
    title: "CFS Shop Drawings & CNC Files",
    points: [
      "Pinnacle/Howick-ready CNC exports",
      "Coil optimization, labeling, BOMs",
      "Coordination with factory & field"
    ],
  },
  {
    icon: <Hammer className="h-6 w-6" />, 
    title: "General Contracting & Permitting",
    points: [
      "Florida CGC services",
      "Turnkey coordination & inspections",
      "Expediting with local jurisdictions"
    ],
  },
];

const PORTFOLIO = [
  // Replace the src values with your real images (Wix Media, S3, or local /public)
  { src: "/images/portfolio/panelized2.jpg", alt: "Design-Build of sea front luxury panelized house", caption: "Design-Build of sea front luxury panelized house" },
  { src: "/images/portfolio/gatlin.jpeg", alt: "Design-Build of metal trusses for commercial project", caption: "Design-Install of metal trusses for commercial project" },
  { src: "/images/portfolio/trusses1.jpeg", alt: "Design-Install of metal trusses for residential project", caption: "Design-Install of metal trusses for residential project" },
  { src: "/images/portfolio/mod1.jpg", alt: "Design-Install", caption: "Modular Glamping unit" },
  { src: "/images/portfolio/mod3.jpg", alt: "Design of modular house", caption: "Design of modular house" },
  { src: "/images/portfolio/cfshouse1.jpg", alt: "Affordable CFS house", caption: "Affordable CFS house" },
  { src: "/images/portfolio/duplex.jpg", alt: "Metal trusses for Duplex house ", caption: "Metal trusses for Duplex house" },
  { src: "/images/portfolio/sd2.png", alt: "Sample truss layout plan", caption: "Sample truss layout plan" },
  { src: "/images/portfolio/sd1.png", alt: "Sample shop drawing and calculation plan", caption: "Sample shop drawing and calculation plan" },
  { src: "/images/portfolio/revit1.png", alt: "BIM model of CFS house", caption: "BIM model of CFS house" },
  { src: "/images/portfolio/revit2.png", alt: "BIM model of modular house", caption: "BIM model of modular house" },
  { src: "/images/portfolio/revit3.png", alt: "BIM model of modular building", caption: "BIM model of modular building" },

  
  
];

const BADGES = [
  { label: "Florida PE", sub: "Professional Engineer", icon: <BadgeCheck className="h-5 w-5" /> },
  { label: "Florida CGC", sub: "Certified General Contractor", icon: <HardHat className="h-5 w-5" /> },
  { label: "HVHZ Ready", sub: "Miami-Dade / Broward", icon: <ShieldIcon /> },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z"/>
    </svg>
  );
}

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Licenses", href: "#licenses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function DesignBuildFloridaSite() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const canSubmit = useMemo(() => {
    return form.name.trim() && /.+@.+\..+/.test(form.email) && form.message.trim();
  }, [form]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // Replace this with your API or Formspree endpoint
  // Example: fetch("https://formspree.io/f/xxxx", { method: "POST", body: JSON.stringify(form) })
  setSent(true);
  }

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* SEO / Structured Data */}
      <SEO />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-neutral-900"><path d="M4 10l8-8 8 8-8 8-8-8z" fill="currentColor"/></svg>
            <div>
              <div className="font-semibold tracking-tight">Design Build Florida</div>
              <div className="text-xs text-neutral-500">Engineering • Modular • Permitting • GC</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">{n.label}</a>
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
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Smart Engineering for Efficiency, Value, and Speed.
            </motion.h1>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We deliver structural engineering, permit-ready construction documents, CFS shop drawings & CNC files, special inspections, and licensed GC services across Florida. From single-family to townhomes, we design and build to the Florida Building Code—HVHZ included.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#services">See Services</a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="#portfolio" className="flex items-center">View Portfolio <ChevronRight className="ml-1 h-4 w-4"/></a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
              {BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-full">
                  {b.icon}
                  <span className="font-medium">{b.label}</span>
                  <span className="text-neutral-500">• {b.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-neutral-200 shadow-inner overflow-hidden">
              {/* Replace with a hero image of your work */}
              <img src="/images/hero-project.jpg" alt="Design Build Florida – modular CFS" className="h-full w-full object-cover"/>
            </div>
            <div className="hidden md:flex gap-3 mt-3 text-xs text-neutral-500">
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> FBC 2023</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> ASCE 7-22</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> ACI 318 / AISI S100</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Services</h2>
          <p className="mt-2 text-neutral-600">End-to-end support from design through permit and delivery.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
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
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Portfolio</h2>
              <p className="mt-2 text-neutral-600">Actual project photos across Florida.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-neutral-600">
              <Images className="h-5 w-5"/>
              {/* <span className="text-sm">High-resolution recommended (1600×1200+)</span>*/}
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p, i) => (
              <figure key={i} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.src} alt={p.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
                <figcaption className="p-3 text-sm text-neutral-700">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Coverage */}
      <section id="licenses" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Licenses & Coverage</h2>
          <p className="mt-2 text-neutral-600">Statewide practice. Permit-ready deliverables.</p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4">
                <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">{b.icon}</div>
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
                  <li>ASCE 7-22 wind & loads (HVHZ ready)</li>
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
                <CardDescription>Field-ready packages.</CardDescription>
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
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">About Design Build Florida</h2>
            <p className="mt-3 text-neutral-700">
              We are a Florida-licensed Professional Engineer (PE) and Certified General Contractor (CGC) practice focused on modular and conventional delivery. Our team blends factory-grade precision with field pragmatism—so your drawings, CNC, inspections, and permits align without surprises.
            </p>
            {/*<ul className="mt-4 text-neutral-700 text-sm list-disc list-inside space-y-1">
              <li>30+ workstation modular production experience</li>
              <li>Permit-ready CDs for SFR, duplexes, and townhomes</li>
              <li>CFS detailing with X5/Howick CNC outputs</li>
              <li>Special inspections per Miami-Dade §8-22</li>
            </ul> 
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 bg-white">
            <img src="/images/about-factory.jpg" alt="Modular factory floor" className="h-full w-full object-cover"/>*/}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Need permit-ready plans or Shop Drawings this month?</h3>
            <p className="text-neutral-300 mt-1">Send your scope and we’ll reply with a same‑day plan and timeline.</p>
          </div>
          <Button asChild className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-2xl">
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Contact</h2>
            <p className="mt-2 text-neutral-700">Let us know your project type, jurisdiction, target dates, and any reference files (PDF, DWG, CSV/BOM).</p>

            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5"/> <span>(786) 440‑4097</span></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5"/> <a className="underline" href="mailto:vinicio.suarez@designbuild-us.com">vinicio.suarez@designbuild-us.com</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5"/> <span>Weston, Florida</span></div>
              <div className="flex items-center gap-3"><Linkedin className="h-5 w-5"/> <a className="underline" href="#">LinkedIn</a></div>
            </div>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
              <CardDescription>We respond within 1 business day.</CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="text-green-700 text-sm">Thanks—your message was captured locally for demo. Connect this form to Formspree or your backend to start receiving submissions.</div>
              ) : (
                <form
                action="https://formspree.io/f/mdkljnde"
                method="POST"
                className="space-y-4"
              >
                {/* Subject + redirect + honeypot */}
                <input type="hidden" name="_subject" value="New quote request - Design Build Florida" />
                <input type="hidden" name="_next" value="https://www.designbuild-us.com/thank-you" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm">Name</label>
                    <Input
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(###) ###-####"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Service</label>
                    <Input
                      name="service"
                      placeholder="e.g., Permit CDs, CFS CNC, Inspections"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm">Project Details</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Jurisdiction, scope, target dates, attachments (links)…"
                  />
                </div>

                <Button type="submit" className="w-full rounded-2xl">
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
            <div className="font-semibold">Design Build Florida</div>
            <div className="text-neutral-600 mt-1">PE & CGC licensed in Florida. Modular and conventional delivery.</div>
          </div>
          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li>Structural engineering (CFS, steel, CMU, concrete)</li>
              <li>CFS shop drawings & CNC</li>
              <li>Permit CD packages</li>
              <li>Special inspections</li>
              <li>GC & permitting</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li><a className="underline" href="mailto:info@designbuild-us.com">info@designbuild-us.com</a></li>
              <li>Medley / Miami, FL</li>
              <li>designbuild-us.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Design Build Florida. All rights reserved.</div>
      </footer>
    </div>
  );
}

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Design Build Florida",
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
    image: [
      "https://www.designbuild-us.com/images/hero-modular.jpg"
    ],
    sameAs: [
      "https://www.linkedin.com/"
    ],
    openingHours: "Mo-Fr 09:00-17:00",
    makesOffer: SERVICES.map(s => ({"@type":"Offer","itemOffered": {"@type":"Service","name": s.title}})),
  };

  return (
    <>
      <title>Design Build Florida — Structural Engineering • CFS CNC • Permit CDs • GC</title>
      <meta name="description" content="Florida PE & CGC delivering structural engineering, permit-ready CDs, CFS shop drawings & CNC files, special inspections, and GC services for SFR, duplex, and townhomes."/>
      <link rel="canonical" href="https://www.designbuild-us.com"/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
