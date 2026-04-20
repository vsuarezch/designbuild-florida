import type { Metadata } from "next";
import { ResourceShell } from "../_shell";

export const metadata: Metadata = {
  title: "ADU Permitting in Florida: Complete Guide (2025–2026) | designbuild-us",
  description:
    "Everything Florida homeowners need to know about ADU permitting: required documents, timeline, costs, and how to navigate the local building department process.",
  alternates: { canonical: "https://www.designbuild-us.com/resources/adu-permitting-florida" },
  openGraph: {
    title: "ADU Permitting in Florida: Complete Guide",
    description: "Required documents, timeline, and how to navigate Florida ADU permits.",
    url: "https://www.designbuild-us.com/resources/adu-permitting-florida",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does ADU permitting take in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construction document preparation typically takes 2 weeks from Notice to Proceed. Local building department review times vary by county — from 2 weeks in smaller counties to 6–10 weeks in Miami-Dade or Broward. Using a private provider for plan review can reduce review time to as little as 5 business days.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for an ADU permit in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete ADU permit package includes: a topographic survey (by a licensed surveyor), a site plan coordinating the survey with the ADU footprint, existing structures, zoning, and drainage, a foundation plan with structural calculations and wind load analysis, elevations showing flood and zoning compliance, energy performance calculations (R405), and MEP documents (electrical, plumbing, and HVAC connections).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a separate permit if my ADU is Florida state pre-approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Florida DBPR state approval covers the ADU unit itself but does not replace local permitting. Every installation still requires a complete site-specific construction document package submitted to the local Authority Having Jurisdiction (AHJ). The state approval is included in the submission package.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ADU permitting cost in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional construction document preparation for a standard ADU typically ranges from $4,500 to $8,500 depending on which services are required. This includes the site plan, foundation plan, elevations, energy calculations, and MEP documents. Topographic survey (by others) adds $800–$2,000. Local building department filing fees vary by county and project value.",
      },
    },
  ],
};

export default function ADUPermittingFlorida() {
  return (
    <ResourceShell current="/resources/adu-permitting-florida">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Resources</p>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        ADU Permitting in Florida: What Homeowners Need to Know
      </h1>
      <p className="mt-4 text-neutral-500 text-sm">Updated for 2025–2026 · Florida Building Code</p>

      <div className="mt-10 prose prose-neutral max-w-none">

        <h2>The Two-Phase Reality of ADU Permitting</h2>
        <p>
          Most Florida homeowners are surprised to learn that buying or selecting an ADU unit is only the
          beginning of the permitting process. Even if you purchase a Florida state pre-approved modular
          ADU unit, you still need a complete site-specific construction document package before the local
          building department will issue a building permit.
        </p>
        <p>
          This creates what we call the <strong>permitting gap</strong> — the space between having an ADU
          and being able to legally install it. Understanding this gap is the first step to navigating it efficiently.
        </p>

        <h2>What Documents Are Required for an ADU Permit?</h2>
        <p>
          A complete ADU permit package submitted to the local Authority Having Jurisdiction (AHJ) must include:
        </p>
        <ul>
          <li>
            <strong>Topographic survey</strong> — prepared by a licensed Florida surveyor. Shows property
            boundaries, elevation contours, existing structures, trees, and utilities. This is the
            foundation everything else is built on.
          </li>
          <li>
            <strong>Site plan</strong> — coordinates the survey with the ADU footprint, existing structures,
            proposed additions (porches, stairs, carports), drainage, zoning setbacks, and utility connections.
            Must demonstrate compliance with local zoning ordinances.
          </li>
          <li>
            <strong>Elevations</strong> — architectural drawings showing the ADU and existing structures from
            all sides. Must show compliance with flood elevation requirements and zoning height limits.
          </li>
          <li>
            <strong>Foundation plan</strong> — engineered plans and structural calculations specific to your
            site. Includes wind load analysis, soil bearing assumptions, and the complete anchoring system
            (holddowns, concrete anchors, hardware). Required to be signed and sealed by a Florida PE.
          </li>
          <li>
            <strong>Energy performance calculations</strong> — an R405 energy model showing the unit meets
            Florida Energy Code requirements for your specific location, orientation, and climate zone.
          </li>
          <li>
            <strong>MEP documents</strong> — electrical and plumbing drawings showing how the ADU connects
            to site utilities. HVAC integration documents if applicable.
          </li>
          <li>
            <strong>Florida state pre-approval package</strong> — if your ADU is a factory-built modular
            unit, the manufacturer&apos;s DBPR approval is included in the submission.
          </li>
        </ul>

        <h2>ADU Permitting Works for All Construction Systems</h2>
        <p>
          The permitting process described above applies regardless of how the ADU is built. Whether
          your ADU is:
        </p>
        <ul>
          <li><strong>Site-built</strong> — traditionally constructed on your property</li>
          <li><strong>Modular</strong> — factory-built sections assembled on a permanent foundation</li>
          <li><strong>Panelized</strong> — pre-fabricated wall panels assembled on site</li>
          <li><strong>Kit homes</strong> — pre-cut components delivered and assembled</li>
        </ul>
        <p>
          ...the local jurisdiction requires the same site-specific package. The construction system
          affects the foundation design and some structural details, but not the overall permitting process.
        </p>

        <h2>How Long Does ADU Permitting Take?</h2>
        <p>
          The timeline has two components you control and one you do not:
        </p>
        <ul>
          <li>
            <strong>Survey</strong> (by others): 1–3 weeks to commission and receive a completed topographic survey.
          </li>
          <li>
            <strong>Construction documents</strong> (Design Build Florida): 2 weeks from Notice to Proceed
            once all input documents are received.
          </li>
          <li>
            <strong>AHJ review</strong> (building department): Varies significantly by county. Smaller
            counties with lighter workloads may review in 2–4 weeks. Miami-Dade and Broward can take
            6–10 weeks or longer. Using a private provider for plan review — permitted under the Florida
            Building Code — can compress this to as little as 5 business days.
          </li>
        </ul>
        <p>
          A realistic total from project start to permit in hand: <strong>6 to 16 weeks</strong>, depending
          on county and whether you use private plan review.
        </p>

        <h2>How Design Build Florida Helps</h2>
        <p>
          Design Build Florida exists specifically to fill the permitting gap. We prepare the complete
          site-specific construction document package — site plan, foundation plan, elevations, energy
          calculations, and MEP documents — signed and sealed by a Florida licensed Professional Engineer,
          formatted for electronic submission to your local AHJ.
        </p>
        <p>
          Standard turnaround is <strong>2 weeks</strong> from Notice to Proceed. Up to two AHJ review
          cycles are included. Expedited production is available.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>How long does ADU permitting take in Florida?</h3>
        <p>
          Document production takes 2 weeks. AHJ review adds 2–10 weeks depending on county. Total
          realistic timeline: 6–16 weeks from project start to permit in hand.
        </p>

        <h3>Do I need a separate permit if my ADU is Florida state pre-approved?</h3>
        <p>
          Yes. The state pre-approval covers the unit itself, not the site-specific installation. A local
          building permit is always required, and it requires a complete site-specific construction document package.
        </p>

        <h3>How much does ADU permitting cost in Florida?</h3>
        <p>
          Professional construction document preparation typically ranges from $4,500 to $8,500 depending on
          scope. Topographic survey (by others) adds $800–$2,000. Local filing fees vary by county and
          project valuation.
        </p>

        <h3>Can I hire my own surveyor?</h3>
        <p>
          Yes, and you should. The topographic survey must be prepared by a licensed Florida surveyor —
          it is not part of the engineering scope. We coordinate directly with your surveyor once you
          have engaged them.
        </p>
      </div>
    </ResourceShell>
  );
}
