"use client";
import React from "react";
import {
  BadgeCheck, Building2, CheckCircle2, ChevronRight,
  ClipboardCheck, FileSpreadsheet, Mail, MapPin, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageContactForm } from "@/components/page-contact-form";
import { track } from "@/lib/analytics";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z" />
    </svg>
  );
}

const CORE_SERVICES = [
  "Modular building design for approval under the Florida DBPR industrialized buildings program",
  "Signed and sealed complete construction documents",
  "Structural engineering for modular and industrialized systems",
  "Residential MEP design for modular residential buildings",
  "Energy calculations and Florida code compliance documentation",
  "Coordination with recognized third-party agencies",
  "Quality manuals for manufacturing",
  "Installation manuals and installation quality procedures",
  "Site-specific construction documents",
  "Foundation plans",
  "Site plans and site coordination",
  "Product approval and wind-load coordination where applicable",
  "Panelized CFS building design",
  "CFS wall, floor, roof, diaphragm, and connection engineering",
  "Permit comment responses",
  "Agency review support",
];

const TYPICAL_CLIENTS = [
  "Modular ADU manufacturers",
  "Industrialized building manufacturers",
  "Out-of-state manufacturers entering the Florida market",
  "Panelized CFS building companies",
  "Manufacturers seeking Florida approval for repeatable building models",
  "Developers using modular or panelized construction",
  "Contractors installing approved modular buildings in Florida",
];

const WHAT_WE_PREPARE = [
  "Prototype model construction documents",
  "State approval drawing packages",
  "Structural calculations",
  "Residential MEP sheets",
  "Energy calculations",
  "Quality manuals",
  "Installation manuals",
  "Foundation plans",
  "Site-specific permit documents",
  "Responses to agency or building department comments",
];

const WHAT_TO_SEND = [
  "Existing model plans",
  "Structural drawings or calculations if available",
  "MEP drawings if available",
  "Product specifications",
  "Manufacturing method description",
  "Target Florida approval pathway",
  "Third-party agency contact if already selected",
  "Intended installation locations or project types",
  "Questions or comments already received from reviewers",
];

function SEO() {
  return (
    <>
      <title>Florida Modular Building Engineering | Industrialized Building Approval Support</title>
      <meta
        name="description"
        content="Engineering support for modular and industrialized building manufacturers seeking Florida approval. Signed and sealed construction documents, structural, MEP, energy, quality manuals, installation manuals, and site-specific permit packages."
      />
      <link rel="canonical" href="https://www.designbuild-us.com/industrialized-modular-building-engineering-florida" />
    </>
  );
}

export default function ModularManufacturerPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <SEO />
      <SiteHeader ctaLabel="Discuss Your Project" />

      {/* ── HERO ── */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <FadeIn>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border border-neutral-700 rounded-full px-4 py-1.5">
              Florida Modular Building Engineering · DBPR Industrialized Buildings · STALO Engineering
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Engineering for industrialized and modular building manufacturers in Florida.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-neutral-300 text-lg max-w-2xl leading-relaxed">
              STALO Engineering &amp; Consulting supports manufacturers of modular, industrialized, and
              panelized building systems seeking approval and deployment in Florida. We specialize in
              design and construction document preparation for modular buildings under the Florida DBPR
              industrialized buildings program.
            </p>
            <p className="mt-3 text-neutral-400 text-base max-w-2xl leading-relaxed">
              We help manufacturers convert their building systems into approval-ready and permit-ready
              construction documents for Florida. Our work can include signed and sealed complete construction
              documents, structural design, residential MEP design, energy calculations, quality documentation,
              installation documentation, third-party agency coordination, and site-specific permit packages.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <a href="#contact" onClick={() => track("manufacturer_engineering_click")}>Discuss Manufacturer Engineering Support <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-xl font-semibold bg-white text-neutral-900 hover:bg-neutral-100">
                <a href="#contact" onClick={() => track("modular_plans_review_click")}>Submit Modular Plans for Florida Review <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-400">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Florida PE / COA No. 35044" },
                { icon: <ShieldIcon />, label: "HVHZ Ready" },
                { icon: <FileSpreadsheet className="h-4 w-4" />, label: "FBC 2023 / ASCE 7-22" },
                { icon: <Building2 className="h-4 w-4" />, label: "Florida DBPR Modular" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 bg-neutral-800 rounded-full px-3 py-1.5">
                  {b.icon}<span>{b.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Core Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 max-w-2xl mb-10">
              Engineering and documentation for modular manufacturers.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_SERVICES.map((service, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE + TYPICAL CLIENTS ── */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Experience</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
              Documents that support approval, production, and permitting.
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We have experience working with recognized third-party agencies involved in the review and
              approval of industrialized and modular building systems. We understand that manufacturers need
              more than calculations; they need complete, coordinated documents that can support approval,
              production, installation, local permitting, and repeatable deployment.
            </p>

            <div className="mt-10">
              <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">What We Can Prepare</p>
              <ul className="space-y-2.5">
                {WHAT_WE_PREPARE.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <ClipboardCheck className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">Typical Clients</p>
            <ul className="space-y-3">
              {TYPICAL_CLIENTS.map((client, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-700">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <span className="text-sm leading-relaxed">{client}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Manufacturer engineering inquiry.
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Tell us about your building system, target market, and where you are in the approval process.
              We will respond within 1 business day.
            </p>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">What to Send</p>
              <ul className="space-y-2.5">
                {WHAT_TO_SEND.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-3 text-neutral-700 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+17864404097" onClick={() => track("phone_click")} className="hover:text-neutral-900">(786) 440-4097</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a className="underline hover:text-neutral-900" href="mailto:info@designbuild-us.com" onClick={() => track("email_click")}>
                  info@designbuild-us.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Weston, Florida — distributed statewide</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle>Discuss Manufacturer Engineering Support</CardTitle>
                <CardDescription>We respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <PageContactForm
                  inquiryType="Modular/Industrialized Manufacturer Engineering"
                  submitLabel="Discuss Manufacturer Engineering Support"
                  messagePlaceholder="Describe your building system, approval stage, target Florida market, and what documents you need. Include links to existing drawings or specifications if available."
                  companyLabel="Company / Manufacturer"
                  analyticsEvent="manufacturer_form_submit"
                />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
