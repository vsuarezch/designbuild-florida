import type { Metadata } from "next";
import { ResourceShell } from "../_shell";

export const metadata: Metadata = {
  title: "Unpermitted ADU in Florida: Risks & How to Legalize It | designbuild-us",
  description:
    "Built an ADU or guesthouse without a permit in Florida? Understand the real risks and how the as-built permitting process works to bring it into compliance.",
  alternates: { canonical: "https://www.designbuild-us.com/resources/unpermitted-adu-florida" },
  openGraph: {
    title: "Unpermitted ADU in Florida: Risks & How to Legalize It",
    description: "The real risks of skipping the permit and how to fix it before it costs you more.",
    url: "https://www.designbuild-us.com/resources/unpermitted-adu-florida",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens if I sell a house with an unpermitted ADU in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida requires sellers to disclose known unpermitted improvements. Buyers' lenders may reject the loan or require the ADU to be permitted or demolished before closing. Title insurance may be limited. Buyers who discover unpermitted work after closing can pursue legal remedies. Legalizing before listing is almost always the better financial decision.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a permit for an ADU after it has already been built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is called as-built or after-the-fact permitting. The process involves preparing construction documents that reflect what was actually built, submitting them to the local AHJ, and passing inspections. Some jurisdictions require opening walls or exposing structural elements for inspection. The process is more complex than permitting before construction but is generally achievable.",
      },
    },
    {
      "@type": "Question",
      name: "Will I be fined for having an unpermitted ADU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida counties and cities have code enforcement powers and can levy fines for unpermitted structures. Fines vary by jurisdiction — some counties issue daily fines once a violation notice is issued. Proactively applying for a permit before a complaint is filed typically results in a more cooperative code enforcement response.",
      },
    },
    {
      "@type": "Question",
      name: "What if the unpermitted ADU doesn't meet current code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is the most common complication in as-built permitting. If the structure doesn't meet current Florida Building Code requirements, the AHJ will require corrections before issuing a permit. Common issues include inadequate foundation systems, missing hurricane straps or holddowns, insufficient electrical panels, or setback violations. In some cases a variance may be available for minor setback issues.",
      },
    },
  ],
};

export default function UnpermittedADU() {
  return (
    <ResourceShell current="/resources/unpermitted-adu-florida">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Resources</p>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        Unpermitted ADU in Florida: Risks, Consequences, and How to Fix It
      </h1>
      <p className="mt-4 text-neutral-500 text-sm">Florida Building Code · As-Built Permitting</p>

      <div className="mt-10 prose prose-neutral max-w-none">

        <h2>Why People Skip the Permit</h2>
        <p>
          It is more common than most people think. A homeowner adds a studio apartment over the garage,
          converts a guesthouse, or installs a prefab unit in the backyard — and skips the permit to avoid
          the cost, delay, and complexity of dealing with the local building department. In the short term,
          it works. The structure gets built. Life goes on.
        </p>
        <p>
          The problem surfaces later — sometimes years later — when the stakes are much higher.
        </p>

        <h2>The Real Risks of an Unpermitted ADU</h2>

        <h3>When You Try to Sell</h3>
        <p>
          Florida law requires sellers to disclose known unpermitted improvements. When a buyer&apos;s
          lender orders an appraisal or title search, unpermitted structures often surface. Lenders
          may refuse to finance the purchase, require the ADU to be demolished, or require it to be
          permitted before closing. In a competitive market, this can kill a deal entirely or force a
          significant price reduction.
        </p>

        <h3>When You Try to Refinance</h3>
        <p>
          Refinancing requires an updated appraisal. Appraisers note unpermitted square footage and
          may exclude it from the valuation. Lenders may flag it as a condition that must be resolved
          before the loan closes.
        </p>

        <h3>Code Enforcement</h3>
        <p>
          Florida counties and municipalities have active code enforcement programs. A neighbor
          complaint, a permit pulled for unrelated work, or a routine survey can trigger an inspection.
          Once a violation notice is issued, fines can accrue daily until the issue is resolved.
          Some counties levy fines of $250 per day or more. Proactively permitting is almost always
          cheaper than responding to a violation.
        </p>

        <h3>Insurance</h3>
        <p>
          Homeowner&apos;s insurance policies typically exclude coverage for unpermitted structures.
          If an unpermitted ADU suffers fire or storm damage, the insurance company may deny the claim
          entirely. In a state with Florida&apos;s storm exposure, this is a significant financial risk.
        </p>

        <h3>Safety</h3>
        <p>
          The permit process exists to ensure structures are safe. Unpermitted work may have inadequate
          hurricane strapping, undersized electrical panels, improper egress, or deficient foundation
          systems — none of which are visible until something fails.
        </p>

        <h2>What Is As-Built Permitting?</h2>
        <p>
          As-built permitting — also called after-the-fact permitting — is the process of obtaining a
          building permit for a structure that was already constructed. It is more complex than permitting
          before construction, but it is achievable in most cases.
        </p>
        <p>The general process:</p>
        <ol>
          <li>
            <strong>Field measurements and documentation</strong> — we document the structure as it
            exists, including dimensions, materials, foundation type, and mechanical systems.
          </li>
          <li>
            <strong>Construction document preparation</strong> — we prepare as-built drawings reflecting
            the existing construction, along with any required engineering analysis.
          </li>
          <li>
            <strong>Code compliance review</strong> — we identify any elements that do not meet current
            Florida Building Code and advise on the most practical path to compliance.
          </li>
          <li>
            <strong>AHJ submission and review</strong> — the package is submitted to the local building
            department. Inspections will be required, which may involve opening walls or exposing
            structural connections.
          </li>
          <li>
            <strong>Corrections if needed</strong> — if non-compliant elements are found, corrections
            are made and re-inspected.
          </li>
          <li>
            <strong>Certificate of completion</strong> — once all inspections pass, the permit is closed
            and the structure is legal.
          </li>
        </ol>

        <h2>What If the Structure Doesn&apos;t Meet Code?</h2>
        <p>
          This is the most common complication. Structures built without permits frequently have
          deficiencies — inadequate foundation systems, missing hurricane straps, improper electrical,
          or setback violations. The AHJ will require these to be corrected.
        </p>
        <p>
          For setback violations (the structure is too close to the property line), a variance may
          be available. For structural deficiencies, repairs are typically required before the permit
          can be closed. We assess these issues upfront so there are no surprises mid-process.
        </p>

        <h2>The Window to Act Is Now</h2>
        <p>
          Florida&apos;s new ADU legislation (SB 48 / HB 313) is bringing increased attention to
          accessory dwelling units statewide. As local governments amend their zoning codes and
          inspectors become more active in this area, the risk of unpermitted ADUs being flagged
          increases. Addressing it proactively — before a complaint or enforcement action — is the
          lower-cost, lower-stress path.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>What happens if I sell a house with an unpermitted ADU?</h3>
        <p>
          You are required to disclose it. Buyers&apos; lenders may require it to be permitted or removed
          before closing. It can reduce your sale price or kill the deal entirely. Legalizing before
          listing is almost always the better financial decision.
        </p>

        <h3>Can I get a permit for an ADU after it has already been built?</h3>
        <p>
          Yes — this is as-built permitting. The process involves documenting the existing structure,
          preparing engineering drawings, submitting to the AHJ, and passing inspections. It is more
          involved than permitting before construction but is achievable in most cases.
        </p>

        <h3>Will I be fined for having an unpermitted ADU?</h3>
        <p>
          If code enforcement issues a violation notice, daily fines can accrue. Proactively applying
          for a permit before a complaint is filed typically results in a more cooperative process.
        </p>

        <h3>What if the structure doesn&apos;t meet current code?</h3>
        <p>
          The AHJ will require corrections before issuing the permit. Common issues include foundation
          deficiencies, missing hurricane straps, and setback violations. We identify these upfront
          so you know what you&apos;re facing before committing to the process.
        </p>
      </div>
    </ResourceShell>
  );
}
