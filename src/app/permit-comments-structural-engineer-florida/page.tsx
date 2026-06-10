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

const WE_HELP_WITH = [
  "Structural plan corrections",
  "Beam, footing, wall, roof, and connection comments",
  "Wind load and product approval coordination",
  "Foundation and flood-related comments",
  "CFS, wood, CMU, concrete, and steel details",
  "Residential MEP coordination comments when part of our scope",
  "Energy calculation coordination when part of our scope",
  "Signed and sealed revised sheets when applicable",
  "Response letters when appropriate",
  "Coordination with architect, GC, owner, or permit expediter",
];

const WHAT_TO_SEND = [
  "Full building department comment letter",
  "Permit number if available",
  "Project address",
  "Current plan set",
  "Previous structural sheets if any",
  "Architectural plans",
  "Survey or site plan if relevant",
  "Photos if the issue involves existing conditions",
];

function SEO() {
  return (
    <>
      <title>Florida Structural Permit Comment Response | STALO Engineering</title>
      <meta
        name="description"
        content="STALO Engineering & Consulting helps respond to Florida structural permit comments with revised details, calculations, signed and sealed sheets, and engineering response packages."
      />
      <link rel="canonical" href="https://www.designbuild-us.com/permit-comments-structural-engineer-florida" />
    </>
  );
}

export default function PermitCommentsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans">
      <SEO />
      <SiteHeader ctaLabel="Send Permit Comments" />

      {/* ── HERO ── */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <FadeIn>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border border-neutral-700 rounded-full px-4 py-1.5">
              Florida Structural Engineering · Permit Comment Response · Signed & Sealed
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Structural permit comment response in Florida.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-neutral-300 text-lg max-w-2xl leading-relaxed">
              If your permit is delayed because the building department requested structural clarification,
              calculations, revised details, or signed and sealed engineering, we can review the comments
              and provide a response scope.
            </p>
            <p className="mt-3 text-neutral-400 text-base max-w-2xl leading-relaxed">
              We review the building department comments, identify what requires engineering, and prepare
              the appropriate revised documents, calculations, or response package when applicable.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
                <a href="#contact" onClick={() => track("permit_comments_click")}>Send Your Permit Comments <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-xl font-semibold bg-white text-neutral-900 hover:bg-neutral-100">
                <a href="#contact" onClick={() => track("permit_comments_click")}>Request a Permit Response Review <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-neutral-400">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Florida PE / COA No. 35044" },
                { icon: <FileSpreadsheet className="h-4 w-4" />, label: "FBC 2023 / ASCE 7-22" },
                { icon: <BadgeCheck className="h-4 w-4" />, label: "Signed & Sealed Responses" },
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

      {/* ── WHAT WE HELP WITH ── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Scope of Response</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 max-w-2xl mb-10">
              What we help resolve.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WE_HELP_WITH.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-neutral-400 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{item}</p>
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
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Send Permit Comments</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Send us the comment letter and current plans.
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              We review the comments and respond within 1 business day with a scope and fee estimate.
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
                <CardTitle>Send Permit Comments</CardTitle>
                <CardDescription>We respond within 1 business day.</CardDescription>
              </CardHeader>
              <CardContent>
                <PageContactForm
                  inquiryType="Permit Comment Response"
                  submitLabel="Send Permit Comments"
                  messagePlaceholder="Describe the permit situation, attach or summarize the comment letter, and note the jurisdiction and project type. We will review and respond with what is needed."
                  companyLabel="Company / Firm / Owner"
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
