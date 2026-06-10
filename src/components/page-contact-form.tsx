"use client";
import React, { useState, useMemo } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";

interface PageContactFormProps {
  inquiryType: string;
  submitLabel: string;
  messagePlaceholder: string;
  companyLabel?: string;
  analyticsEvent?: string;
}

export function PageContactForm({
  inquiryType,
  submitLabel,
  messagePlaceholder,
  companyLabel = "Company / Firm",
  analyticsEvent = "contact_form_submit",
}: PageContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const valid = useMemo(
    () => form.name.trim() && /.+@.+\..+/.test(form.email) && form.message.trim(),
    [form],
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("https://formspree.io/f/mdkljnde", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        inquiry: inquiryType,
        _subject: `${inquiryType} — designbuild-us`,
      }),
    });
    track(analyticsEvent);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
        <p className="font-semibold text-emerald-900">
          Message received — we will be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Name *</label>
          <Input
            required
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Email *</label>
          <Input
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">Phone</label>
          <Input
            placeholder="(###) ###-####"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-neutral-600 block mb-1">{companyLabel}</label>
          <Input
            placeholder="Optional"
            value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-neutral-600 block mb-1">Project Details *</label>
        <Textarea
          required
          rows={5}
          placeholder={messagePlaceholder}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full rounded-xl" disabled={!valid}>
        {submitLabel}
      </Button>
    </form>
  );
}
