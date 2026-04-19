"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Building2, Ruler, FileSpreadsheet, BadgeCheck, Phone, Mail,
  MapPin, Linkedin, ChevronRight, Images, ClipboardCheck, HardHat,
  CheckCircle2, Home, Zap, Wrench, Clock, ChevronDown, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STALO_SERVICES = [
  {
    icon: <Ruler className="h-5 w-5" />,
    title: "Structural Engineering",
    points: [
      "Cold-formed steel (CFS), structural steel, CMU & reinforced concrete",
      "FBC 2023 / ASCE 7-22 / ACI 318 / AISC 360 / AISI S100–S240",
      "Signed & sealed calculations, reports, and engineering letters",
    ],
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Permit-Ready Construction Documents",
    points: [
      "Single-family, duplex, townhomes — FBC-R and FBC-B",
      "Modular buildings under the Florida Modular Building Program",
      "Full CDs for permitting, additions, and alterations",
      "HVHZ / NOA / Florida Product Approvals",
    ],
  },
  {
    icon: <FileSpreadsheet className="h-5 w-5" />,
    title: "CFS Shop Drawings & CNC",
    points: [
      "FrameCad / Pinnacle / Howick-ready CNC exports",
      "Coil optimization, labeling, and bills of materials",
      "Coordination with factory and field teams",
    ],
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Special Inspections",
    points: [
      "Miami-Dade §8-22 compliance",
      "Concrete, reinforcing, masonry, and CFS",
      "Final sealed inspection reports and logs",
    ],
  },
];

const DBF_SERVICES = [
  { id: "selection", label: "Modular Building Selection Assistance", desc: "FL state approval review; site-specific code & AHJ conditions check" },
  { id: "siteplan",  label: "Site Plan", desc: "Survey, floor plan, existing structures, drainage, zoning & ordinance compliance" },
  { id: "elev",      label: "Elevations", desc: "Modular & existing structures; flood elevation and zoning compliance" },
  { id: "found",     label: "Foundation Plan", desc: "Structural plans, wind load analysis & full anchoring system calculations" },
  { id: "energy",    label: "Energy Performance Calculations", desc: "R405 model and report for your specific location and orientation" },
  { id: "mep",       label: "MEP — Electrical & Plumbing", desc: "Site utility connections and integration with existing structures" },
  { id: "hvac",      label: "MEP Add-On — Mechanical (HVAC)", desc: "HVAC review for local conditions and mechanical integration" },
  { id: "expedite",  label: "Expedited Production", desc: "Reduced delivery schedule — timeline confirmed at project start" },
];

const PORTFOLIO = [
  { src: "/images/portfolio/panelized2.jpg",  alt: "Design-Build of sea front luxury panelized house",       caption: "Design-Build of sea-front luxury panelized house" },
  { src: "/images/portfolio/gatlin.jpeg",     alt: "Design-Install of metal trusses for commercial project", caption: "Design-Install of metal trusses — commercial" },
  { src: "/images/portfolio/trusses1.jpeg",   alt: "Design-Install of metal trusses for residential project",caption: "Design-Install of metal trusses — residential" },
  { src: "/images/portfolio/mod1.jpg",        alt: "Modular Glamping unit",                                  caption: "Modular glamping unit" },
  { src: "/images/portfolio/mod3.jpg",        alt: "Design of modular house",                                caption: "Design of modular house" },
  { src: "/images/portfolio/cfshouse1.jpg",   alt: "Affordable CFS house",                                   caption: "Affordable CFS house" },
  { src: "/images/portfolio/duplex.jpg",      alt: "Metal trusses for Duplex house",                         caption: "Metal trusses — duplex" },
  { src: "/images/portfolio/sd2.png",         alt: "Sample truss layout plan",                               caption: "Sample truss layout plan" },
  { src: "/images/portfolio/sd1.png",         alt: "Sample shop drawing and calculation plan",               caption: "Shop drawings & calc set" },
  { src: "/images/portfolio/revit1.png",      alt: "BIM model of CFS house",                                 caption: "BIM model — CFS house" },
  { src: "/images/portfolio/revit2.png",      alt: "BIM model of modular house",                             caption: "BIM model — modular house" },
  { src: "/images/portfolio/revit3.png",      alt: "BIM model of modular building",                          caption: "BIM model — modular building" },
];

const NAV = [
  { label: "STALO Engineering", href: "#stalo" },
  { label: "Design Build Florida", href: "#dbf" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z" />
    </svg>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TWO-STEP ADU QUOTE FORM
───────────────────────────────────────────── */

function ADUQuoteForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState({
    name: "", email: "", phone: "", address: "", county: "",
    role: "Homeowner", model: "", survey: "No", timeline: "Exploring options",
  });
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [allServices, setAllServices] = useState(false);

  const step1Valid = useMemo(() =>
    contact.name.trim() && /.+@.+\..+/.test(contact.email) && contact.address.trim(),
    [contact]);

  function toggleService(id: string) {
    setSelected(s => ({ ...s, [id]: !s[id] }));
    setAllServices(false);
  }

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (step1Valid) setStep(2);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
        <p className="font-semibold text-emerald-900 text-lg">Request received.</p>
        <p className="text-emerald-700 mt-1 text-sm">
          We will review your project and reach out within 1 business day.
          No payment required at this stage.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      {/* Step indicator */}
      <div className="flex border-b border-neutral-200">
        {[1, 2].map(n => (
          <div key={n} className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${step === n ? "bg-neutral-900 text-white" : "bg-neutral-50 text-neutral-400"}`}>
            Step {n} — {n === 1 ? "Your Project" : "Select Services"}
          </div>
        ))}
      </div>

      <div className="p-6">
        {step === 1 && (
          <form onSubmit={handleStep1} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Full Name *</label>
                <Input placeholder="Your full name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} required />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Email *</label>
                <Input type="email" placeholder="you@email.com" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Phone</label>
                <Input placeholder="(###) ###-####" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Your Role</label>
                <select className="w-full h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm" value={contact.role} onChange={e => setContact({ ...contact, role: e.target.value })}>
                  <option>Homeowner</option>
                  <option>Installer / GC</option>
                  <option>Manufacturer</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-600 block mb-1">Property Address *</label>
              <Input placeholder="Street address" value={contact.address} onChange={e => setContact({ ...contact, address: e.target.value })} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">County</label>
                <Input placeholder="e.g. Miami-Dade, Broward" value={contact.county} onChange={e => setContact({ ...contact, county: e.target.value })} />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">ADU Manufacturer / Model</label>
                <Input placeholder="If known" value={contact.model} onChange={e => setContact({ ...contact, model: e.target.value })} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Topographic Survey?</label>
                <select className="w-full h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm" value={contact.survey} onChange={e => setContact({ ...contact, survey: e.target.value })}>
                  <option>Yes</option>
                  <option>No</option>
                  <option>In progress</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-600 block mb-1">Timeline</label>
                <select className="w-full h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm" value={contact.timeline} onChange={e => setContact({ ...contact, timeline: e.target.value })}>
                  <option>Ready now</option>
                  <option>Within 3 months</option>
                  <option>Exploring options</option>
                </select>
              </div>
            </div>
            <Button type="submit" className="w-full rounded-xl" disabled={!step1Valid}>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-neutral-600">Select all that apply. Not sure? Check everything — we will confirm scope at no cost.</p>
            <div className="space-y-2">
              {DBF_SERVICES.map(s => (
                <label key={s.id} className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-colors ${selected[s.id] ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"}`}>
                  <input type="checkbox" className="mt-0.5 accent-neutral-900" checked={!!selected[s.id]} onChange={() => toggleService(s.id)} />
                  <div>
                    <span className="text-sm font-medium text-neutral-900">{s.label}</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">{s.desc}</span>
                  </div>
                </label>
              ))}
              <label className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-colors ${allServices ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"}`}>
                <input type="checkbox" className="mt-0.5 accent-neutral-900" checked={allServices} onChange={() => { setAllServices(v => !v); setSelected({}); }} />
                <div>
                  <span className="text-sm font-medium text-neutral-900">Full package — not sure what applies</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">We will review and confirm what your project needs</span>
                </div>
              </label>
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="outline" className="rounded-xl" onClick={() => setStep(1)}>← Back</Button>
              <Button type="submit" className="flex-1 rounded-xl">Submit Request</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RESOURCE ACCORDION
───────────────────────────────────────────── */

const RESOURCES = [
  {
    q: "What is a Modular Home?",
    a: `A modular home is a factory-built structure constructed in sections at an off-site facility and transported to the property for permanent foundation assembly. Built under controlled conditions, modular construction improves quality control and reduces weather-related delays.

In Florida, modular buildings require DBPR approval before installation — certifying the unit meets the Florida Building Code. However, that approval does not replace local permitting. Every installation still requires a site-specific construction document package submitted to the local Authority Having Jurisdiction (AHJ).

Key characteristics: built to the Florida Building Code · placed on a permanent foundation · classified as real property · eligible for conventional financing · appreciates in value like a site-built home.`,
  },
  {
    q: "Modular vs. Manufactured — What is the Difference?",
    a: `Manufactured homes are built on a permanent steel chassis and governed by the federal HUD Code. They are typically classified as personal property with more limited financing options.

Modular homes are assembled on a permanent foundation and governed by the Florida Building Code. They are classified as real property, eligible for conventional mortgage financing, and treated identically to site-built homes for insurance and resale.

In short: if it is on a chassis and follows HUD rules, it is manufactured. If it is on a foundation and follows the FBC, it is modular.`,
  },
  {
    q: "What is an ADU (Accessory Dwelling Unit)?",
    a: `An ADU is a secondary residential unit on the same property as a primary single-family home — detached, attached, or converted from existing space (garage, bonus room, etc.). Florida is actively expanding ADU adoption as part of its affordable housing strategy.

State pre-approval for modular ADU units simplifies part of the process, but a complete site-specific construction document package is still required before any local building department will issue a permit. That package includes a topographic survey, site plan, foundation plan, elevations, energy calculations, and MEP documents.

This is exactly what Design Build Florida produces.`,
  },
  {
    q: "What is the ADU Permitting Process in Florida?",
    a: `1. Select a Florida DBPR-approved ADU unit from a manufacturer.
2. Commission a topographic survey of your property (by a licensed surveyor).
3. Engage Design Build Florida to produce the site-specific construction document package (site plan, foundation plan, elevations, energy calcs, MEP).
4. Submit the complete package — including the manufacturer's FL approval — to your local building department.
5. Respond to any AHJ review comments (up to two cycles included in our standard package).
6. Receive your building permit and proceed with installation.

Standard document production: 2 weeks from Notice to Proceed.`,
  },
];

function ResourceAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {RESOURCES.map((r, i) => (
        <div key={i} className="rounded-2xl border border-neutral-200 overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {r.q}
            <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-neutral-700 whitespace-pre-line leading-relaxed border-t border-neutral-100 pt-4">
              {r.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "STALO Engineering", message: "" });
  const [sent, setSent] = useState(false);
  const valid = useMemo(() => form.name.trim() && /.+@.+\..+/.test(form.email) && form.message.trim(), [form]);

  return sent ? (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
      <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
      <p className="font-semibold text-emerald-900">Message received — we will be in touch within 1 business day.</p>
    </div>
  ) : (
    <form action="https://formspree.io/f/mdkljnde" method="POST" className="space-y-4">
      <input type="hidden" name="_subject" value="New inquiry — designbuild-us" />
      <input type="hidden" name="_next" value="https://www.designbuild-us.com/thank-you" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Name *</label>
          <Input name="name" required placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Email *</label>
          <Input name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Phone</label>
          <Input name="phone" placeholder="(###) ###-####" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Inquiry</label>
          <select name="inquiry" value={form.inquiry} onChange={e => setForm({ ...form, inquiry: e.target.value })} className="w-full h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm">
            <option>STALO Engineering</option>
            <option>Design Build Florida — ADU Permitting</option>
            <option>DBF — Manufacturer Partnership</option>
            <option>DBF — Installer Partnership</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-neutral-600 block mb-1">Message / Project Details *</label>
        <Textarea name="message" required rows={5} placeholder="Jurisdiction, scope, timeline, any reference files (links)…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <Button type="submit" className="w-full rounded-xl" disabled={!valid}>Send Message</Button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   SEO
───────────────────────────────────────────── */

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "designbuild-us",
    url: "https://www.designbuild-us.com",
    telephone: "(786) 440-4097",
    email: "info@designbuild-us.com",
    address: { "@type": "PostalAddress", addressLocality: "Weston", addressRegion: "FL", addressCountry: "US" },
    areaServed: "Florida",
    department: [
      { "@type": "LocalBusiness", name: "STALO Engineering & Consulting", description: "Structural engineering and permit-ready construction documents across Florida." },
      { "@type": "LocalBusiness", name: "Design Build Florida", description: "ADU construction documents and permitting in Florida." },
    ],
  };
  return (
    <>
      <title>designbuild-us — Structural Engineering & ADU Permitting | Florida</title>
      <meta name="description" content="designbuild-us coordinates STALO Engineering (structural engineering, permit-ready CDs, CFS) and Design Build Florida (ADU permitting and construction documents) across Florida." />
      <link rel="canonical" href="https://www.designbuild-us.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function Site() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <SEO />

      {/* ── STICKY NAV ── */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-neutral-900" fill="currentColor" aria-hidden>
              <path d="M4 10l8-8 8 8-8 8-8-8z" />
            </svg>
            <span className="font-bold tracking-tight text-neutral-900 text-lg">designbuild-us</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button asChild size="sm" className="rounded-xl hidden md:flex">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      {/* ── PLATFORM HERO ── */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <FadeIn>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border border-neutral-700 rounded-full px-4 py-1.5">
              Florida · Distributed · Licensed
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              A distributed network of design professionals —{" "}
              <span className="text-neutral-400">one platform, every step.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-neutral-300 text-lg max-w-2xl leading-relaxed">
              designbuild-us coordinates two independent licensed firms across Florida.
              Whether your project needs structural engineering and sealed construction
              documents, or a complete ADU permitting package, you reach the right
              team through a single platform.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <a href="#stalo">STALO Engineering <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-xl font-semibold bg-white text-neutral-900 hover:bg-neutral-100">
                <a href="#dbf">Design Build Florida <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-400">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Florida PE — STALO Engineering" },
                { icon: <HardHat className="h-4 w-4" />, label: "Florida CGC — Design Build Florida" },
                { icon: <ShieldIcon />, label: "HVHZ Ready — Miami-Dade / Broward" },
                { icon: <Building2 className="h-4 w-4" />, label: "FL Modular Building Program" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 bg-neutral-800 rounded-full px-3 py-1.5">
                  {b.icon}<span>{b.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STALO ENGINEERING ── */}
      <section id="stalo" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Member Firm</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  STALO Engineering & Consulting
                </h2>
                <p className="mt-3 text-neutral-600 max-w-2xl text-lg leading-relaxed">
                  Stand-alone structural engineering and permit-ready construction documents
                  across Florida — FBC 2023, ASCE 7-22, including HVHZ. You do not need
                  to build with us to engage our engineering.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs bg-neutral-900 text-white px-4 py-2 rounded-full font-semibold self-start mt-1">
                <BadgeCheck className="h-3.5 w-3.5" /> FL COA No. 35044
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STALO_SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <Card className="rounded-2xl border-neutral-200 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 mb-3">
                      {s.icon}
                    </div>
                    <CardTitle className="text-base leading-snug">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-neutral-600">
                      {s.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-neutral-400 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Code compliance strip */}
          <FadeIn delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-2">
              {["FBC 2023", "ASCE 7-22", "ACI 318", "AISI S100/S240", "HVHZ Ready", "Florida DBPR Modular"].map(tag => (
                <span key={tag} className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="mt-8">
              <Button asChild className="rounded-xl">
                <a href="#contact" onClick={() => {}}>Request an Engineering Quote</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DESIGN BUILD FLORIDA ── */}
      <section id="dbf" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Member Firm</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
                  Design Build Florida
                </h2>
                <p className="mt-3 text-neutral-600 max-w-2xl text-lg leading-relaxed">
                  ADU construction documents and permitting. We produce the complete
                  site-specific package that turns a Florida pre-approved ADU unit
                  into a building permit — quickly and completely.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs bg-neutral-900 text-white px-4 py-2 rounded-full font-semibold self-start mt-1">
                <HardHat className="h-3.5 w-3.5" /> Florida CGC
              </div>
            </div>
          </FadeIn>

          {/* Permitting gap callout */}
          <FadeIn delay={0.08}>
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-4 items-start max-w-3xl">
              <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                <Home className="h-4 w-4 text-amber-700" />
              </div>
              <div>
                <p className="font-semibold text-amber-900 text-sm">The permitting gap</p>
                <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                  A Florida state pre-approved ADU unit still requires a complete
                  site-specific construction document package before any local
                  jurisdiction will issue a building permit. That is the gap
                  Design Build Florida fills.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* What's included */}
          <FadeIn delay={0.12}>
            <div className="mt-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-5">What's included in a permit package</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DBF_SERVICES.slice(0, 8).map((s, i) => (
                  <div key={s.id} className="rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm transition-shadow">
                    <div className="text-xs font-bold text-neutral-400 mb-1">{String(i + 1).padStart(2, "0")}</div>
                    <p className="font-semibold text-sm text-neutral-900">{s.label}</p>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Delivery terms */}
          <FadeIn delay={0.18}>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: <Clock className="h-3.5 w-3.5" />, label: "Standard delivery: 2 weeks from NTP" },
                { icon: <BadgeCheck className="h-3.5 w-3.5" />, label: "All documents signed & sealed" },
                { icon: <CheckCircle2 className="h-3.5 w-3.5" />, label: "Up to 2 AHJ review cycles included" },
                { icon: <Zap className="h-3.5 w-3.5" />, label: "Expedited production available" },
              ].map(t => (
                <div key={t.label} className="flex items-center gap-2 text-xs bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700 font-medium">
                  {t.icon}{t.label}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Quote form */}
          <FadeIn delay={0.22}>
            <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">Get an ADU Permit Quote</h3>
                <p className="mt-2 text-neutral-600 text-sm">Two steps. No payment required. We will be in touch within 1 business day.</p>

                <div className="mt-8 space-y-6">
                  {/* For manufacturers */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">For ADU Manufacturers</p>
                    <h4 className="font-bold text-neutral-900">Make your unit easier to sell.</h4>
                    <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                      Permitting is where buyers hesitate. We have produced foundation systems
                      and construction documents for units by SteelCorp USA, Mesocore, and Plad.
                      A professional permitting partner in your sales process keeps deals moving.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-neutral-900 hover:underline">
                      Discuss a partnership <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* For installers */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">For Installers & GCs</p>
                    <h4 className="font-bold text-neutral-900">Offer full-service without adding overhead.</h4>
                    <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                      Add a professional permitting sub-service to your install contracts.
                      We handle the construction document package; you handle the build.
                      Consistent turnaround. Statewide coverage.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-neutral-900 hover:underline">
                      Become a referral partner <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <ADUQuoteForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Our Work</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Portfolio</h2>
                <p className="mt-2 text-neutral-600">Selected projects by platform members across Florida.</p>
              </div>
              <div className="text-sm text-neutral-500 max-w-sm text-right leading-relaxed">
                Design Build Florida has produced foundation systems and construction
                documents for modular units by <strong>SteelCorp USA</strong>, <strong>Mesocore</strong>, and <strong>Plad</strong>.
              </div>
            </div>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.06}>
                <figure className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.src} alt={p.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-3 text-sm text-neutral-600 font-medium">{p.caption}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section id="resources" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Resources</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Understanding Your Options</h2>
            <p className="mt-3 text-neutral-600 max-w-xl">
              What is a modular home? How does it differ from a manufactured home?
              What does ADU permitting actually involve?
            </p>
          </FadeIn>
          <div className="mt-10 max-w-3xl">
            <FadeIn delay={0.08}>
              <ResourceAccordion />
            </FadeIn>
          </div>
          <FadeIn delay={0.14}>
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-neutral-900">Ready to start your permit package?</p>
                <p className="text-sm text-neutral-600 mt-0.5">Two steps. No payment required at this stage.</p>
              </div>
              <Button asChild className="rounded-xl shrink-0">
                <a href="#dbf">Get an ADU Quote</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Contact</h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              For ADU permit package requests, use the quote form in the Design Build Florida
              section above. For engineering, partnerships, or general inquiries, use this form.
            </p>

            <div className="mt-8 space-y-4 text-neutral-700">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span>(786) 440-4097</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a className="underline hover:text-neutral-900" href="mailto:info@designbuild-us.com">info@designbuild-us.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Weston, Florida — distributed statewide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Linkedin className="h-4 w-4" />
                </div>
                <a className="underline hover:text-neutral-900" href="#">LinkedIn</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>We respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden><path d="M4 10l8-8 8 8-8 8-8-8z" /></svg>
              <span className="font-bold text-base">designbuild-us</span>
            </div>
            <p className="text-neutral-400 leading-relaxed">A distributed network of design professionals across Florida.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-300 mb-3">STALO Engineering</p>
            <ul className="space-y-1.5 text-neutral-400">
              <li>Structural engineering</li>
              <li>Permit-ready CDs</li>
              <li>CFS shop drawings & CNC</li>
              <li>Special inspections</li>
              <li className="text-neutral-500 text-xs mt-2">FL COA No. 35044</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-neutral-300 mb-3">Design Build Florida</p>
            <ul className="space-y-1.5 text-neutral-400">
              <li>ADU construction documents</li>
              <li>Site plans & elevations</li>
              <li>Foundation plans</li>
              <li>Energy & MEP packages</li>
              <li className="text-neutral-500 text-xs mt-2">Florida CGC</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-neutral-300 mb-3">Resources</p>
            <ul className="space-y-1.5 text-neutral-400">
              <li><a href="#resources" className="hover:text-white transition-colors">What is a Modular Home?</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Modular vs. Manufactured</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">What is an ADU?</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">ADU Permitting Process</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} designbuild-us. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
