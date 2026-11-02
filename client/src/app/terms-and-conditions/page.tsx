import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { getPageMetadata } from "@/lib/Metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Terms and Conditions | Perfinexa CloudTech Nagpur",
  description:
    "Read the terms and conditions for using the Perfinexa CloudTech website and our web, software, app, Salesforce and digital marketing services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  const linkStyle =
    "text-[#4c1d95] font-semibold underline underline-offset-2 hover:text-[#3b0764] transition-colors";

  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated="[date]"
      relatedLinks={[
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Refund and Cancellation Policy", href: "/refund-policy" },
        { title: "Cookie Policy", href: "/cookie-policy" },
      ]}
    >
      <section className="space-y-4">
        <p>
          Welcome to Perfinexa CloudTech Pvt. Ltd. By accessing www.perfinexacloudtech.com or using our services, including website development, software development, mobile app development, Salesforce consulting, AI automation and digital marketing, you agree to these Terms and Conditions. Please read them together with our{" "}
          <Link href="/privacy-policy" className={linkStyle}>
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <LegalSection title="1. Use of Our Website">
        <p>You agree to use this website lawfully. You must not:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Misuse the site or try to gain unauthorised access to it or its systems</li>
          <li>Upload viruses, malware or any harmful code</li>
          <li>Copy, scrape or reuse our content without written permission</li>
          <li>Use the site to send spam or false information</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Our Services">
        <p>
          The website describes our{" "}
          <Link href="/#services" className={linkStyle}>
            services
          </Link>{" "}
          in general terms. The actual scope of work, timelines, deliverables and pricing for each project are set out in a written proposal, quotation or agreement accepted by both parties. If there is a conflict between this page and a signed project agreement, the project agreement applies.
        </p>
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>
          All content on this website, including text, logos, graphics, designs and code, belongs to Perfinexa CloudTech Pvt. Ltd. unless stated otherwise. You may not reproduce it without our written consent. Ownership of project deliverables passes to the client as stated in the project agreement, after full payment. We may keep rights to our pre-existing tools, libraries and know-how.
        </p>
      </LegalSection>

      <LegalSection title="4. Client Responsibilities">
        <p>
          To keep your project on schedule, clients must provide content, feedback, approvals and access to required accounts on time. Delays from the client&apos;s side may extend project timelines and costs.
        </p>
      </LegalSection>

      <LegalSection title="5. Payments">
        <p>
          Payment terms, such as advance, milestone and final payments, are specified in the quotation or project agreement. Delayed payments may pause or delay work. Taxes such as GST are charged as applicable. See our{" "}
          <Link href="/refund-policy" className={linkStyle}>
            Refund and Cancellation Policy
          </Link>{" "}
          for more.
        </p>
      </LegalSection>

      <LegalSection title="6. Confidentiality">
        <p>
          Both parties agree to keep each other&apos;s confidential business, technical and personal information private and to use it only for the purpose of the project.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Tools and Platforms">
        <p>
          Projects may use third-party platforms such as Salesforce, hosting providers, payment gateways, AI services and APIs. We are not responsible for their downtime, pricing changes or policy changes.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimer">
        <p>
          Website content is provided &ldquo;as is&rdquo;. We do not guarantee that the website will always be error-free or available. Results from SEO and digital marketing services, such as rankings, traffic and leads, depend on many factors outside our control and cannot be guaranteed. Outputs from AI-based solutions may contain errors and should be reviewed by a person before use.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          To the extent permitted by law, Perfinexa CloudTech is not liable for indirect, incidental or consequential losses arising from the use of our website or services. Our total liability is limited to the amount paid for the specific service.
        </p>
      </LegalSection>

      <LegalSection title="10. Termination">
        <p>
          We may suspend or end services if these terms or the project agreement are breached.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law and Jurisdiction">
        <p>
          These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to These Terms">
        <p>
          We may revise these terms at any time. Continued use of our website or services means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
        <p>
          Questions about these terms? Reach us through our{" "}
          <Link href="/contact" className={linkStyle}>
            Contact page
          </Link>
          , at [your email] or on +91 8767134732.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
