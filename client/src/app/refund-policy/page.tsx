import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { getPageMetadata } from "@/lib/Metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Refund & Cancellation Policy | Perfinexa CloudTech",
  description:
    "Understand Perfinexa CloudTech's refund and cancellation terms for website development, software, mobile app, Salesforce and SEO services.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  const linkStyle =
    "text-[#4c1d95] font-semibold underline underline-offset-2 hover:text-[#3b0764] transition-colors";

  return (
    <LegalPage
      title="Refund and Cancellation Policy"
      lastUpdated="[date]"
      relatedLinks={[
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
        { title: "Privacy Policy", href: "/privacy-policy" },
      ]}
    >
      <section className="space-y-4">
        <p>
          At Perfinexa CloudTech, we want every client to have a clear and fair experience. This policy explains how cancellations and refunds work for our website development, software development, mobile app, Salesforce, AI automation and digital marketing services.
        </p>
      </section>

      <LegalSection title="1. Advance and Booking Payments">
        <p>
          The advance or booking amount is non-refundable once work has started, including planning, design or development.
        </p>
      </LegalSection>

      <LegalSection title="2. Cancellation Before Work Starts">
        <p>
          If you cancel before work begins, we refund your advance minus any administrative or third-party costs already incurred. Cancellation requests must be made within [7] days of payment.
        </p>
      </LegalSection>

      <LegalSection title="3. Cancellation During a Project">
        <p>
          If you cancel mid-project, you pay for all work completed up to the cancellation date.
        </p>
      </LegalSection>

      <LegalSection title="4. Completed and Delivered Work">
        <p>Work that has been delivered and approved is non-refundable.</p>
      </LegalSection>

      <LegalSection title="5. Monthly and Recurring Services">
        <p>
          For recurring services such as SEO, website maintenance and social media management, please give [30] days&apos; written notice to cancel. Fees already paid for the current month are not refunded.
        </p>
      </LegalSection>

      <LegalSection title="6. Domains, Hosting, Licences and Paid Tools">
        <p>
          Domains, hosting, software licences and paid tools are purchased from third parties and are non-refundable.
        </p>
      </LegalSection>

      <LegalSection title="7. How Refunds Are Processed">
        <p>
          Approved refunds are processed within [7-10] working days to the original payment method.
        </p>
      </LegalSection>

      <LegalSection title="8. How to Request a Cancellation or Refund">
        <p>
          Email us at [your email] with your name, project details and reason for the request, or use our{" "}
          <Link href="/contact" className={linkStyle}>
            Contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
