import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { getPageMetadata } from "@/lib/Metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy Policy | Perfinexa CloudTech Pvt. Ltd., Nagpur",
  description:
    "Learn how Perfinexa CloudTech, an IT company in Nagpur, collects, uses and protects your personal data on our website and across our services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const linkStyle =
    "text-[#4c1d95] font-semibold underline underline-offset-2 hover:text-[#3b0764] transition-colors";

  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="[date]"
      relatedLinks={[
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
        { title: "Refund and Cancellation Policy", href: "/refund-policy" },
        { title: "Cookie Policy", href: "/cookie-policy" },
      ]}
    >
      <section className="space-y-4">
        <p>
          Perfinexa CloudTech Pvt. Ltd. (&ldquo;Perfinexa CloudTech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a cloud-first IT company in Nagpur offering website development, software development, mobile app development, Salesforce consulting, AI automation and digital marketing services. This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, and how you can exercise your rights when you visit www.perfinexacloudtech.com or use our services.
        </p>
        <div className="bg-purple-50/80 border-l-4 border-[#4c1d95] p-4 rounded-r-lg text-slate-800 text-sm sm:text-base italic">
          <strong className="font-semibold text-slate-900 not-italic">In short: </strong>
          We collect only the data we need to respond to you and deliver our services. We never sell your personal data. You can ask us to access, correct or delete it at any time.
        </div>
      </section>

      <LegalSection title="1. Who We Are">
        <p>
          Perfinexa CloudTech Pvt. Ltd. is the &ldquo;data fiduciary&rdquo; responsible for your personal data under the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;) and the rules made under it.
        </p>
        <p>
          Registered office: 12, 1st Floor, A-Wing, Mangalwari Complex, Sadar, Nagpur, Maharashtra, India Phone: +91 8767134732 Email: [your email]
        </p>
      </LegalSection>

      <LegalSection title="2. Personal Data We Collect">
        <p>
          <strong className="font-semibold text-slate-900">Data you give us. </strong>
          When you fill out our{" "}
          <Link href="/contact" className={linkStyle}>
            contact form
          </Link>
          , request a free consultation, subscribe to our newsletter, apply to join our team or contact us by phone, email or social media, we may collect:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Your name, email address and phone number</li>
          <li>Your company name, job title and project requirements</li>
          <li>Any message, document or file you send us</li>
          <li>Your r&eacute;sum&eacute; and work details, if you apply for a job or internship</li>
        </ul>

        <p className="pt-2">
          <strong className="font-semibold text-slate-900">Data collected automatically. </strong>
          When you browse our website, we may collect:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>IP address, browser type, device type and operating system</li>
          <li>Pages visited, time spent, links clicked and the website you came from</li>
          <li>
            Cookie and analytics data (see our{" "}
            <Link href="/cookie-policy" className={linkStyle}>
              Cookie Policy
            </Link>
            )
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Why We Use Your Personal Data">
        <p>We use your personal data only for the purposes below:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>To respond to enquiries and provide consultations, proposals and quotes</li>
          <li>To deliver, manage and support our IT, software, web, app, Salesforce and marketing services</li>
          <li>To send service updates, newsletters or offers (you can unsubscribe at any time)</li>
          <li>To analyse and improve our website, content and marketing campaigns</li>
          <li>To process job and internship applications</li>
          <li>To prevent fraud and misuse, and to meet our legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Consent">
        <p>
          We process your personal data based on your consent, which you give when you submit a form on our website or contact us, or where the law otherwise permits. You can withdraw your consent at any time by writing to us at [your email]. Withdrawing consent does not affect processing done before the withdrawal, and it may mean we can no longer provide some services to you.
        </p>
      </LegalSection>

      <LegalSection title="5. Sharing of Your Personal Data">
        <p>We do not sell or rent your personal data. We share it only with:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>
            Trusted service providers that help us run our business, such as hosting, email, analytics, CRM and communication tools. They may process data only on our instructions and must protect it.
          </li>
          <li>Authorities or courts, when required by law or to protect our legal rights.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Data Security">
        <p>
          We use reasonable technical and organisational safeguards, such as secure hosting, encryption where appropriate and access controls, to protect your data. However, no method of online transmission or storage is 100% secure, so we cannot guarantee absolute security. If a personal data breach affects you, we will inform you and the relevant authority as required by law.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Retention">
        <p>
          We keep your personal data only as long as it is needed for the purposes described above or as required by law. After that, we delete or anonymise it.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <p>Under the DPDP Act and other applicable Indian laws, you may:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Request a summary of the personal data we hold about you and how we process it</li>
          <li>Ask us to correct, complete or update your data</li>
          <li>Ask us to erase your data</li>
          <li>Withdraw your consent at any time</li>
          <li>Nominate another person to exercise your rights if you are unable to do so</li>
          <li>Make a complaint about how we handle your data</li>
        </ul>
        <p className="pt-2">
          To exercise these rights, email us at [your email] or use our{" "}
          <Link href="/contact" className={linkStyle}>
            Contact page
          </Link>
          . We aim to respond within a reasonable time and in any case within the period required by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Grievance Contact">
        <p>
          If you have a concern about how we handle your personal data, please contact:
        </p>
        <p>
          [Name of designated person], [designation] Perfinexa CloudTech Pvt. Ltd., 12, 1st Floor, A-Wing, Mangalwari Complex, Sadar, Nagpur, Maharashtra, India Email: [your email] | Phone: +91 8767134732
        </p>
        <p>
          If you are not satisfied with our response, you may approach the Data Protection Board of India as provided under the DPDP Act.
        </p>
      </LegalSection>

      <LegalSection title="10. Third-Party Links">
        <p>
          Our website may link to other sites such as LinkedIn, Instagram and Facebook. We are not responsible for their privacy practices, so please read their policies.
        </p>
      </LegalSection>

      <LegalSection title="11. Children's Privacy">
        <p>
          Our website and services are not directed at children under 18, and we do not knowingly collect personal data from children. If you believe a child has given us personal data, please contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to This Privacy Policy">
        <p>
          We may update this policy from time to time. The latest version will always be on this page, with the &ldquo;Last updated&rdquo; date at the top.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact Us">
        <p>
          Perfinexa CloudTech Pvt. Ltd. 12, 1st Floor, A-Wing, Mangalwari Complex, Sadar, Nagpur, Maharashtra, India Phone: +91 8767134732 | Email: [your email]
        </p>
      </LegalSection>
    </LegalPage>
  );
}
