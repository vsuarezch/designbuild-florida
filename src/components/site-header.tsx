"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader({
  ctaLabel = "Get in Touch",
  ctaHref = "#contact",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-neutral-900" fill="currentColor" aria-hidden>
            <path d="M4 10l8-8 8 8-8 8-8-8z" />
          </svg>
          <span className="font-bold tracking-tight text-neutral-900 text-lg">designbuild-us</span>
        </a>
        <Button asChild size="sm" className="rounded-xl">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </header>
  );
}
