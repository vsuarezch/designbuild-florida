import type { Metadata } from "next";
import { ResourceShell } from "../_shell";

export const metadata: Metadata = {
  title: "Florida ADU Law SB 48 / HB 313 (2026): What It Means for Homeowners | designbuild-us",
  description:
    "Florida SB 48 requires local governments to allow ADUs by right in single-family zones by December 1, 2026. What the law does, what it doesn't do, and what homeowners should do now.",
  alternates: { canonical: "https://www.designbuild-us.com/resources/florida-adu-law-sb48" },
  openGraph: {
    title: "Florida ADU Law SB 48 / HB 313 Explained",
    description: "New law requires ADUs by right statewide by December 2026. What it means for you.",
    url: "https://www.designbuild-us.com/resources/florida-adu-law-sb48",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Florida SB 48 / HB 313 require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida SB 48 / HB 313 requires all local governments to amend their zoning ordinances by December 1, 2026 to allow accessory dwelling units (ADUs) by right in single-family residential zones. This means local governments cannot prohibit or require a special permit or variance for ADUs in these zones — they must be permitted through the standard building permit process.",
      },
    },
    {
      "@type": "Question",
      name: "What does ADU by right mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADU by right means that if a proposed ADU meets the applicable zoning standards (setbacks, size limits, height), the local government must approve it without requiring a special use permit, variance, conditional use permit, or public hearing. It eliminates the discretionary approval layer that previously allowed cities and counties to deny ADU applications on a case-by-case basis.",
      },
    },
    {
      "@type": "Question",
      name: "Does SB 48 mean I no longer need a building permit for an ADU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SB 48 removes the zoning barrier — the discretionary approval that many local governments previously required before a homeowner could even apply for a building permit. The building permit itself is still required. A complete site-specific construction document package must still be submitted to the local building department.",
      },
    },
    {
      "@type": "Question",
      name: "When does SB 48 take effect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local governments have until December 1, 2026 to amend their zoning ordinances to comply with SB 48. Some jurisdictions may amend earlier. Homeowners in jurisdictions that already allow ADUs by right are not affected by the deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Does SB 48 apply to my city or county?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SB 48 applies to all Florida local governments that have not already adopted zoning ordinances allowing ADUs by right in single-family residential zones. Many Florida counties and cities already allow ADUs with varying requirements. Contact your local planning or zoning department to confirm current rules and the status of any pending ordinance amendments.",
      },
    },
  ],
};

export default function FloridaADULawSB48() {
  return (
    <ResourceShell current="/resources/florida-adu-law-sb48">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Resources</p>

      {/* Legislative callout */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <strong>Legislative update:</strong> Florida SB 48 / HB 313 requires local governments to allow
        ADUs by right in single-family zones. Deadline for local compliance: <strong>December 1, 2026</strong>.
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        Florida&apos;s New ADU Law: SB 48 / HB 313 Explained
      </h1>
      <p className="mt-4 text-neutral-500 text-sm">Florida Legislature · Effective December 1, 2026</p>

      <div className="mt-10 prose prose-neutral max-w-none">

        <h2>What the Law Does</h2>
        <p>
          Florida SB 48 / HB 313 is part of the state&apos;s broader affordable housing strategy. The law
          requires all Florida local governments to amend their zoning ordinances by <strong>December 1, 2026</strong> to
          allow accessory dwelling units (ADUs) <strong>by right</strong> in single-family residential zones.
        </p>
        <p>
          Before this law, many Florida cities and counties either prohibited ADUs outright or required
          homeowners to obtain a special use permit, conditional use approval, or variance — a discretionary
          process that could result in denial even when the ADU met all zoning standards. SB 48 removes
          that discretionary layer.
        </p>

        <h2>What &ldquo;By Right&rdquo; Means</h2>
        <p>
          ADU &ldquo;by right&rdquo; means that if a proposed ADU meets the applicable development
          standards — setbacks, size limits, height, parking — the local government must approve it.
          No special permit. No public hearing. No neighbor notice period. No city council vote.
        </p>
        <p>
          The ADU goes through the standard building permit process, the same as any other residential
          addition or improvement. The local government reviews the construction documents for code
          compliance, issues the permit, and conducts inspections. That&apos;s it.
        </p>
        <p>
          This is a significant change for jurisdictions that previously made ADU approval difficult
          or unpredictable.
        </p>

        <h2>What the Law Does Not Change</h2>
        <p>
          SB 48 removes the zoning barrier. It does not remove the building permit requirement.
        </p>
        <p>
          A complete site-specific construction document package is still required for every ADU
          installation. The local building department still reviews those documents for Florida Building
          Code compliance. Inspections are still required. The engineering, energy calculations, foundation
          plans, and MEP documents that make up a permit package are all still necessary.
        </p>
        <p>
          The law makes it easier to <em>qualify</em> for a permit. It does not make the permit package
          go away.
        </p>

        <h2>What Changes on December 1, 2026</h2>
        <p>
          Cities and counties that currently prohibit ADUs or require discretionary approval will be
          required to allow them by right once their ordinances are amended. Practically, this means:
        </p>
        <ul>
          <li>Homeowners in currently restrictive jurisdictions will be able to apply for ADU building
          permits for the first time, or without the risk of discretionary denial.</li>
          <li>The volume of ADU permit applications across Florida will increase significantly.</li>
          <li>Building departments in jurisdictions with new ADU permissions will see increased workload,
          potentially lengthening review times.</li>
          <li>Demand for professional permitting services — site plans, foundation plans, energy
          calculations — will increase proportionally.</li>
        </ul>

        <h2>What Homeowners Should Do Now</h2>
        <p>
          If you are considering an ADU and your jurisdiction currently restricts them, the time to
          plan is now — not after December 2026 when permit departments are likely to be backlogged
          with new applications.
        </p>
        <p>
          Specifically:
        </p>
        <ul>
          <li>
            <strong>Check your current zoning.</strong> Contact your local planning department or
            check the county property appraiser website to confirm current ADU rules for your parcel.
            Some jurisdictions already allow ADUs by right and you may be able to proceed immediately.
          </li>
          <li>
            <strong>Commission a topographic survey.</strong> Surveyors are a bottleneck in the
            process. Starting the survey early keeps the overall timeline as short as possible.
          </li>
          <li>
            <strong>Engage your permit package team early.</strong> Construction document preparation
            takes 2 weeks from Notice to Proceed, but scheduling that work in advance keeps your
            project moving without gaps.
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What does Florida SB 48 / HB 313 require?</h3>
        <p>
          All local governments must amend their zoning ordinances by December 1, 2026 to allow ADUs
          by right in single-family residential zones. They cannot require a special permit, variance,
          or conditional use approval for ADUs that meet applicable development standards.
        </p>

        <h3>What does ADU by right mean?</h3>
        <p>
          It means if your ADU meets the setback, size, and height standards, the local government
          must approve it through the standard building permit process — no discretionary approval,
          public hearing, or neighbor notice required.
        </p>

        <h3>Does SB 48 mean I no longer need a building permit?</h3>
        <p>
          No. The building permit is still required. SB 48 removes the zoning barrier, not the
          building permit requirement. A site-specific construction document package is still needed.
        </p>

        <h3>When does SB 48 take effect?</h3>
        <p>
          Local governments must comply by December 1, 2026. Some jurisdictions may amend their
          ordinances earlier.
        </p>

        <h3>Does it apply to my city?</h3>
        <p>
          SB 48 applies to all Florida local governments that don&apos;t already allow ADUs by right.
          Many already do. Check with your local planning department to confirm the current rules
          and any pending amendments.
        </p>
      </div>
    </ResourceShell>
  );
}
