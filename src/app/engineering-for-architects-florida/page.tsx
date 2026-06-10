"use client";
import React from "react";
import {
  BadgeCheck, CheckCircle2, ChevronRight, FileSpreadsheet,
  Mail, MapPin, Phone,
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

const SERVICES = [
  "Structural engineering for additions and renovations",
  "Townhomes, duplexes, and single-family homes",
  "Complete residential MEP design packages",
  "Energy calculations and code compliance documentation",
  "Light commercial structural scopes",
  "CFS, wood, CMU, concrete, and structural steel",
  "Foundation design and revisions",
  "Structural calculations and engineering reports",
  "Permit comment responses",
  "HVHZ and Florida Product Approval coordination",
  "Coordination with architects, GCs, owners, and building departments",
];

const WHAT_TO_SEND = [
  "Architectural drawings",
  "Survey or site plan if available",
  "Project address",
  "Scope of work",
  "Existing plans if available",
  "Building department comments if already issued",
  "Preferred schedule or permit deadline",
];

function SEO() {
  return (
    <>
      <title>Engineering Support for Florida Architects | Structural, MEP & Energy</title>
      <meta
        name="description"
        content="STALO Engineering & Consulting supports Florida architects with structural engineering, residential MEP design, energy calculations, permit responses, and signed and sealed construction documents."
      />
      <link rel="canonical" href="https://www.designbuild-us.com/engineering-for-architects-florida" />
    </>
  );
}

export default function ArchitectsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <SEO />
      <SiteHeader ctaLabel="Submit Plans for Review" />

      {/* ── HERO ── */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <FadeIn>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border border-neutral-700 rounded-full px-4 py-1.5">
              Florida Structural Engineering · Residential MEP · Energy Calculations
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Engineering support for Florida architects.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-neutral-300 text-lg max-w-2xl leading-relaxed">
              STALO Engineering &amp; Consulting supports architects with signed and sealed structural plans,
              structural calculations, complete residential MEP design, energy calculations, and permit responses
              for residential and light commercial projects across Florida.
            </p>
            <p className="mt-3 text-neutral-400 text-base max-w-2xl leading-relaxed">
              We can work as structural EOR, engineering consultant, or complete residential engineering support
              behind your architectural set. You retain the client relationship; we provide clear, coordinated,
              permit-ready engineering documents.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <a href="#contact" onClick={() => track("engineering_quote_click")}>Submit Plans for Engineering Review <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-xl font-semibold bg-white text-neutral-900 hover:bg-neutral-100">
                <a href="#contact" onClick={() => track("permit_comments_click")}>Send Permit Comments / Plans <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-400">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Florida PE / COA No. 35044" },
                { icon: <ShieldIcon />, label: "HVHZ Ready" },
                { icon: <FileSpreadsheet className="h-4 w-4" />, label: "FBC 2023 / ASCE 7-22" },
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Statewide Distributed Support" },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2 bg-neutral-800 rounded-full px-3 py-1.5">
                  {b.icon}<span>{b.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 max-w-2xl mb-10">
              What we provide behind your architectural set.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{service}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Submit Your Project</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Send plans for engineering review.
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              We review and respond within 1 business day with a scope and fee. No payment required to get a quote.
            </p>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
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
                <CardTitle>Submit Plans for Engineering Review</CardTitle>
                <CardDescription>We respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <PageContactForm
                  inquiryType="Engineering for Architects"
                  submitLabel="Submit Plans for Engineering Review"
                  messagePlaceholder="Describe the project scope, jurisdiction, building type, and any specific structural or MEP needs. Include links to drawings or permit comments if available."
                  companyLabel="Architecture Firm"
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
