"use client";
import React from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M4 10l8-8 8 8-8 8-8-8z" />
            </svg>
            <span className="font-bold text-base">designbuild-us</span>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Engineering and permit support for Florida architects, builders, and industrialized construction manufacturers.
          </p>
          <Link href="/" className="inline-block mt-4 text-neutral-400 hover:text-white text-xs transition-colors">
            ← Back to main site
          </Link>
        </div>
        <div>
          <p className="font-semibold text-neutral-300 mb-3">STALO Engineering &amp; Consulting</p>
          <ul className="space-y-1.5 text-neutral-400">
            <li>Structural engineering</li>
            <li>Residential MEP design</li>
            <li>Energy calculations</li>
            <li>Modular &amp; industrialized building design</li>
            <li>Permit-ready construction documents</li>
            <li className="text-neutral-500 text-xs mt-2">FL COA No. 35044</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-neutral-300 mb-3">Contact</p>
          <ul className="space-y-1.5 text-neutral-400">
            <li><a href="tel:+17864404097" onClick={() => track("phone_click")} className="hover:text-white transition-colors">(786) 440-4097</a></li>
            <li>info@designbuild-us.com</li>
            <li>Weston, Florida — distributed statewide</li>
          </ul>
          <p className="mt-6 text-xs text-neutral-500 border-t border-neutral-800 pt-4">
            © {new Date().getFullYear()} designbuild-us · FL PE COA No. 35044 · FL CGC
          </p>
        </div>
      </div>
    </footer>
  );
}
