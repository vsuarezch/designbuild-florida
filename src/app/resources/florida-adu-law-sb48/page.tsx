import type { Metadata } from "next";
import { ResourceShell } from "../_shell";

export const metadata: Metadata = {
  title: "Florida ADU Legislation: SB 48 & HB 313 Status (2026) | designbuild-us",
  description:
    "SB 48 and HB 313 both died in the Florida legislature on March 13, 2026 — the same fate as the 2025 versions. Here is what the bills proposed, why they keep failing, and what it means for ADU permitting in Florida today.",
  alternates: { canonical: "https://www.designbuild-us.com/resources/florida-adu-law-sb48" },
  openGraph: {
    title: "Florida ADU Legislation SB 48 / HB 313: What Actually Happened",
    description: "Both bills died March 13, 2026. Here is the accurate status and what it means for ADU permitting.",
    url: "https://www.designbuild-us.com/resources/florida-adu-law-sb48",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Did Florida SB 48 / HB 313 pass in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SB 48 died in the Florida House on March 13, 2026. HB 313 died with it. The 2026 session ended without passage — the same outcome as the 2025 versions of the bills. As of the end of the 2026 legislative session, Florida has no statewide ADU-by-right mandate.",
      },
    },
    {
      "@type": "Question",
      name: "What did Florida SB 48 / HB 313 propose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bills would have required all Florida local governments to allow ADUs by right in single-family residential zones — meaning homeowners whose proposed ADU meets applicable zoning standards (setbacks, size, height) could not be denied through discretionary approval processes. The bills did not propose eliminating the building permit requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Does ADU permitting in Florida still require a construction document package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every ADU and guesthouse installation in Florida requires a complete site-specific construction document package submitted to the local building department. This includes a site plan, foundation plan, elevations, energy performance calculations, and MEP documents, all signed and sealed by a Florida licensed Professional Engineer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still permit an ADU in Florida without SB 48 passing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many Florida counties and municipalities already allow ADUs under their existing zoning codes. The permitting process is the same regardless of whether a statewide ADU-by-right mandate exists. The legislation addresses zoning approval, not the building permit package requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Will Florida pass ADU legislation in a future session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The push has now failed in both the 2025 and 2026 sessions. Similar bills are expected to be reintroduced. Local governments can and do adopt ADU-friendly zoning independently of state legislation.",
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

      {/* Accurate status callout */}
      <div className="mb-6 rounded-xl border border-neutral-300 bg-neutral-100 px-5 py-4 text-sm text-neutral-800">
        <strong>Legislative status:</strong> SB 48 died in the Florida House on March 13, 2026.
        HB 313 died with it. The 2026 session ended without passage —
        the same outcome as the 2025 versions of the bills.
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        Florida ADU Legislation: SB 48 &amp; HB 313 — What Actually Happened
      </h1>
      <p className="mt-4 text-neutral-500 text-sm">
        Updated April 2026 &middot; 2026 Florida Legislative Session
      </p>

      <div className="mt-10 prose prose-neutral max-w-none">

        <h2>The Bills Failed — Again</h2>
        <p>
          SB 48 and HB 313 — Florida&apos;s 2026 ADU-by-right bills — died in the legislature
          on March 13, 2026. This follows the same outcome in the 2025 session, when companion
          bills also failed to pass. Florida enters the post-session period without a statewide
          mandate requiring local governments to allow ADUs by right in single-family zones.
        </p>
        <p>
          If you have been tracking this legislation as a manufacturer, installer, or developer,
          the result is not surprising — but it matters for how you plan.
        </p>

        <h2>What the Bills Proposed</h2>
        <p>
          Both the 2025 and 2026 versions proposed requiring Florida local governments to allow
          ADUs <strong>by right</strong> in single-family residential zones. &ldquo;By right&rdquo;
          means a proposed ADU meeting applicable development standards — setbacks, size, height —
          could not be denied through a discretionary process such as a special use permit,
          conditional use hearing, or variance.
        </p>
        <p>
          The bills addressed the zoning barrier, not the building permit requirement. Even if
          the legislation had passed, every ADU installation would still have required a complete
          site-specific construction document package submitted to the local building department.
        </p>

        <h2>What It Means for ADU Permitting Today</h2>
        <p>
          The failure of SB 48 and HB 313 does not change the permitting process — it leaves
          the zoning landscape unchanged in jurisdictions that currently restrict ADUs.
        </p>
        <p>
          In Florida counties and municipalities that already allow ADUs under existing zoning,
          the process proceeds exactly as before: commission a survey, prepare the construction
          document package, submit to the local building department, respond to review comments,
          receive the permit.
        </p>
        <p>
          In jurisdictions that restrict or prohibit ADUs, homeowners remain subject to local
          discretionary approval processes. A variance or special use permit may be required
          before a building permit application is even accepted.
        </p>

        <h2>The Broader Legislative Picture</h2>
        <p>
          Two failed sessions does not mean the push is finished. ADU reform has support from
          housing advocacy organizations, homebuilders, and manufacturers who view statewide
          by-right approval as a meaningful tool for addressing Florida&apos;s housing shortage.
          Companion bills are expected to be reintroduced in the 2027 session.
        </p>
        <p>
          Some Florida local governments are adopting ADU-friendly zoning independently —
          either in anticipation of eventual state legislation or in response to local housing
          pressure. Checking current zoning rules for a specific parcel remains the most
          reliable first step for any ADU project.
        </p>

        <h2>What Stays True Regardless of Legislation</h2>
        <p>
          Whether or not Florida passes an ADU-by-right mandate, every ADU and guesthouse
          installation requires the same construction document package for a local building permit:
        </p>
        <ul>
          <li>Topographic survey (by a licensed Florida surveyor)</li>
          <li>Site plan — coordinating survey, ADU footprint, existing structures, zoning, drainage</li>
          <li>Foundation plan — engineered for site-specific soil and wind conditions</li>
          <li>Elevations — flood elevation and zoning compliance</li>
          <li>Energy performance calculations — R405 for location and orientation</li>
          <li>MEP documents — electrical, plumbing, and HVAC connections</li>
        </ul>
        <p>
          This is the permitting gap that exists independent of any legislation — and it is
          what Design Build Florida produces, in two weeks, for any construction system.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Did Florida SB 48 / HB 313 pass in 2026?</h3>
        <p>
          No. Both bills died on March 13, 2026. The 2026 session ended without passage,
          matching the outcome of the 2025 session.
        </p>

        <h3>What did the bills propose?</h3>
        <p>
          They would have required local governments to allow ADUs by right in single-family
          zones — removing discretionary zoning approval. They did not propose eliminating
          the building permit requirement.
        </p>

        <h3>Can I still permit an ADU in Florida?</h3>
        <p>
          Yes. Many Florida jurisdictions already allow ADUs under existing zoning. The
          construction document package and local building permit process is the same
          regardless of the legislative outcome.
        </p>

        <h3>Will Florida pass ADU legislation in the future?</h3>
        <p>
          The issue has failed in two consecutive sessions. Similar bills are expected in 2027.
          Local governments can adopt ADU-friendly zoning independently of state action.
        </p>

        <h3>Does the permitting process change without SB 48?</h3>
        <p>
          No. The construction document package requirement — site plan, foundation plan,
          elevations, energy calculations, MEP — exists under the Florida Building Code
          and is not affected by the ADU zoning legislation.
        </p>
      </div>
    </ResourceShell>
  );
}
