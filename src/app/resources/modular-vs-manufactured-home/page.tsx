import type { Metadata } from "next";
import { ResourceShell } from "../_shell";

export const metadata: Metadata = {
  title: "Modular vs. Manufactured Home in Florida: Key Differences | designbuild-us",
  description:
    "Modular and manufactured homes are two distinct legal categories in Florida. The differences affect your building code, financing, property classification, and permitting process.",
  alternates: { canonical: "https://www.designbuild-us.com/resources/modular-vs-manufactured-home" },
  openGraph: {
    title: "Modular vs. Manufactured Home: Key Differences for Florida Homeowners",
    description: "Two different legal categories with very different implications for financing and permitting.",
    url: "https://www.designbuild-us.com/resources/modular-vs-manufactured-home",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a modular home the same as a manufactured home in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. They are legally and structurally distinct categories. Modular homes are built to the Florida Building Code, placed on permanent foundations, and classified as real property. Manufactured homes are built to the federal HUD Code, transported on a steel chassis, and typically classified as personal property. The distinction matters significantly for financing, insurance, and permitting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a conventional mortgage on a modular home in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because modular homes are classified as real property and built to state building code, they are eligible for conventional mortgage financing (Fannie Mae, Freddie Mac, FHA, VA loans) just like site-built homes. Manufactured homes, by contrast, are often limited to specialty lenders and chattel loans, which carry higher interest rates.",
      },
    },
    {
      "@type": "Question",
      name: "Do both modular and manufactured homes require a building permit in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both require permits, but through different processes. Modular homes require a Florida DBPR state approval for the unit plus a local building permit for the site-specific installation, including a complete construction document package. Manufactured homes are regulated under the HUD Code and go through a separate federal and state installation process.",
      },
    },
    {
      "@type": "Question",
      name: "Which type appreciates more in value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modular homes, because they are classified as real property on permanent foundations, typically appreciate similarly to site-built homes and the surrounding market. Manufactured homes, particularly those on leased land or not permanently affixed, tend to depreciate over time, similar to vehicles. Manufactured homes that are permanently affixed and titled as real estate perform better but still typically lag site-built homes.",
      },
    },
  ],
};

export default function ModularVsManufactured() {
  return (
    <ResourceShell current="/resources/modular-vs-manufactured-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">Resources</p>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
        Modular vs. Manufactured Home: What Florida Homeowners Need to Know
      </h1>
      <p className="mt-4 text-neutral-500 text-sm">Florida Building Code &middot; HUD Code &middot; Property Classification</p>

      <div className="mt-10 prose prose-neutral max-w-none">

        <h2>Two Different Legal Categories</h2>
        <p>
          The terms &ldquo;modular home&rdquo; and &ldquo;manufactured home&rdquo; are used interchangeably in
          everyday conversation, but they refer to two legally and structurally distinct types of housing.
          The distinction matters for your building code, financing, property taxes, insurance, and
          the permitting process.
        </p>

        <h2>Modular Homes</h2>
        <p>
          A modular home is built in sections — called modules — at an off-site manufacturing facility
          under controlled conditions. The sections are transported to the property and assembled on a
          <strong> permanent foundation</strong>.
        </p>
        <p>Key characteristics:</p>
        <ul>
          <li><strong>Building code:</strong> Florida Building Code (FBC). In Florida, the Department of
          Business and Professional Regulation (DBPR) approves modular home designs before they can be
          sold. Each unit carries a DBPR approval number.</li>
          <li><strong>Foundation:</strong> Permanent — concrete slab, piers, or stem wall. The home is
          affixed to the land.</li>
          <li><strong>Property classification:</strong> Real property. Treated legally the same as a
          site-built home once installed.</li>
          <li><strong>Financing:</strong> Eligible for conventional mortgages (Fannie Mae, Freddie Mac,
          FHA, VA) at standard rates.</li>
          <li><strong>Value:</strong> Appreciates with the market, similar to site-built homes.</li>
          <li><strong>Local permitting:</strong> Requires a site-specific construction document package
          and local building permit for each installation.</li>
        </ul>

        <h2>Manufactured Homes</h2>
        <p>
          A manufactured home (formerly called a mobile home) is built entirely in a factory on a
          permanent <strong>steel chassis</strong>. The chassis remains part of the structure and is
          how the home is transported. It is placed on a site but may or may not be permanently affixed.
        </p>
        <p>Key characteristics:</p>
        <ul>
          <li><strong>Building code:</strong> Federal HUD Code (24 CFR Part 3280). The state building
          code does not apply. Construction is regulated by the U.S. Department of Housing and Urban
          Development.</li>
          <li><strong>Foundation:</strong> Steel chassis. May be placed on piers and skirted, or in
          some cases permanently affixed with a concrete foundation.</li>
          <li><strong>Property classification:</strong> Personal property by default (like a vehicle).
          Can be converted to real property if permanently affixed and the chassis title is retired,
          but this process varies.</li>
          <li><strong>Financing:</strong> Often limited to specialty lenders and chattel loans with
          higher interest rates. Conventional financing is available only when permanently affixed
          and titled as real estate.</li>
          <li><strong>Value:</strong> Typically depreciates over time when classified as personal
          property. Permanently affixed manufactured homes on owned land perform better.</li>
          <li><strong>Local permitting:</strong> Goes through a separate HUD/state installation process,
          not the standard Florida building permit process.</li>
        </ul>

        <h2>Side-by-Side Comparison</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Modular Home</th>
                <th className="px-4 py-3 text-left font-semibold">Manufactured Home</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {[
                ["Building code", "Florida Building Code (FBC)", "Federal HUD Code"],
                ["Foundation", "Permanent (slab, piers, stem wall)", "Steel chassis"],
                ["Property type", "Real property", "Personal property (typically)"],
                ["Financing", "Conventional mortgage", "Specialty lenders / chattel loans"],
                ["DBPR approval", "Required", "Not applicable (HUD regulated)"],
                ["Value over time", "Appreciates with market", "Typically depreciates"],
                ["Local building permit", "Required — site-specific package", "HUD installation process"],
              ].map(([f, m, mh]) => (
                <tr key={f} className="even:bg-neutral-50">
                  <td className="px-4 py-3 font-medium text-neutral-900">{f}</td>
                  <td className="px-4 py-3 text-neutral-700">{m}</td>
                  <td className="px-4 py-3 text-neutral-700">{mh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Which Makes Sense for an ADU?</h2>
        <p>
          For ADU applications, modular homes have significant advantages:
        </p>
        <ul>
          <li>They are regulated by the Florida Building Code, which means they go through the same
          local permitting process as any other residential addition.</li>
          <li>They are permanently affixed and classified as real property, which may increase your
          overall property value and simplify future financing or sale.</li>
          <li>Florida&apos;s DBPR pre-approval program specifically supports modular ADU units,
          streamlining the state-level review.</li>
        </ul>
        <p>
          Manufactured homes can be used as ADUs in some jurisdictions, but they face additional
          regulatory complexity and may not be permitted in single-family zones that allow ADUs.
        </p>
        <p>
          Design Build Florida prepares construction documents for all ADU types and construction
          systems — modular, site-built, panelized, and kit homes. The permitting process we handle
          is the local building permit package, which applies to all of them.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Is a modular home the same as a manufactured home in Florida?</h3>
        <p>
          No. They are two legally distinct categories. Modular homes follow the Florida Building Code
          and are real property. Manufactured homes follow the federal HUD Code and are typically
          personal property.
        </p>

        <h3>Can I get a conventional mortgage on a modular home?</h3>
        <p>
          Yes. Modular homes are eligible for conventional mortgage financing (Fannie Mae, Freddie Mac,
          FHA, VA) at standard rates, just like site-built homes.
        </p>

        <h3>Do both require a building permit in Florida?</h3>
        <p>
          Yes, but through different processes. Modular homes require a DBPR state approval plus a
          local building permit with a full site-specific construction document package. Manufactured
          homes go through a separate HUD/state installation process.
        </p>

        <h3>Which type appreciates more in value?</h3>
        <p>
          Modular homes appreciate similarly to site-built homes because they are real property.
          Manufactured homes, particularly those not permanently affixed, typically depreciate over time.
        </p>
      </div>
    </ResourceShell>
  );
}
