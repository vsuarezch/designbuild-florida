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

const COMMON_SCOPES = [
  "Load-bearing wall removal",
  "Beam and header design",
  "Garage conversions",
  "Additions and alterations",
  "Foundation repair or replacement",
  "Roof framing repairs",
  "Window and door structural modifications",
  "ADUs and detached structures",
  "Patio and enclosure conversions",
  "CFS framing",
  "CMU wall modifications",
  "Permit corrections and city comments",
  "Structural letters when appropriate",
  "Signed and sealed revised sheets when required",
];

const WHAT_TO_SEND = [
  "Property address",
  "Photos of the existing condition",
  "Existing plans if available",
  "Survey if site work is involved",
  "Building department comments if already issued",
  "Short description of the proposed work",
  "Field measurements if available",
  "Target permit or inspection deadline",
];

function SEO() {
  return (
    <>
      <title>Structural Engineering for Florida Contractors and Remodelers</title>
      <meta
        name="description"
        content="Structural engineering support for Florida contractors, remodelers, and small GCs. Beam design, load-bearing wall removal, additions, foundations, roof framing repairs, ADUs, and permit corrections."
      />
      <link rel="canonical" href="https://www.designbuild-us.com/structural-engineering-for-contractors-florida" />
    </>
  );
}

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <SEO />
      <SiteHeader ctaLabel="Send Project Information" />

      {/* ── HERO ── */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <FadeIn>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border border-neutral-700 rounded-full px-4 py-1.5">
              Florida Structural Engineering · Permit Documents · Statewide Support
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Structural engineering for Florida contractors and remodelers.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-neutral-300 text-lg max-w-2xl leading-relaxed">
              When a project needs signed and sealed structural documents, STALO Engineering &amp; Consulting
              helps small GCs, remodelers, and builders move from field condition to permit-ready solution.
            </p>
            <p className="mt-3 text-neutral-400 text-base max-w-2xl leading-relaxed">
              We help contractors solve structural permitting issues with practical engineering documents,
              details, calculations, and permit responses. Our goal is to help the contractor move the job
              forward without overcomplicating the scope.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <a href="#contact" onClick={() => track("engineering_quote_click")}>Send Project Information <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-xl font-semibold bg-white text-neutral-900 hover:bg-neutral-100">
                <a href="#contact" onClick={() => track("engineering_quote_click")}>Request an Engineering Quote <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-400">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Florida PE / COA No. 35044" },
                { icon: <FileSpreadsheet className="h-4 w-4" />, label: "FBC 2023 / ASCE 7-22" },
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Signed & Sealed Documents" },
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

      {/* ── COMMON SCOPES ── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Common Scopes</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 max-w-2xl mb-10">
              Structural engineering for the jobs contractors face.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMON_SCOPES.map((scope, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{scope}</p>
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
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Get a Quote</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Send your project information.
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Send us what you have. We will review and respond within 1 business day with a scope and fee estimate.
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
                <CardTitle>Send Project Information</CardTitle>
                <CardDescription>We respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <PageContactForm
                  inquiryType="Engineering for Contractors"
                  submitLabel="Send Project Information"
                  messagePlaceholder="Describe the scope of work, property address, current conditions, and any permit comments received. Include photos or plans if you have them."
                  companyLabel="Company / GC Name"
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
