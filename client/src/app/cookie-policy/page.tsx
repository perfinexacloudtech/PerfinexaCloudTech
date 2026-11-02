import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { getPageMetadata } from "@/lib/Metadata";

export const metadata: Metadata = getPageMetadata({
  title: "Cookie Policy | Perfinexa CloudTech Pvt. Ltd.",
  description:
    "Find out how Perfinexa CloudTech uses cookies and analytics on its website, and how you can control or disable them in your browser.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  const linkStyle =
    "text-[#4c1d95] font-semibold underline underline-offset-2 hover:text-[#3b0764] transition-colors";

  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="[date]"
      relatedLinks={[
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
        { title: "Refund Policy", href: "/refund-policy" },
      ]}
    >
      <LegalSection title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the site work properly and give us useful information about how visitors use it.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>
            <strong className="font-semibold text-slate-900">Essential cookies: </strong>
            Keep the website working, for example forms and security.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Analytics cookies: </strong>
            Help us understand visitor behaviour using tools such as Google Analytics, so we can improve our content and user experience.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Marketing cookies: </strong>
            Measure the performance of our campaigns, for example Meta Pixel or Google Ads, if used.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Managing Cookies">
        <p>
          You can control or delete cookies from your browser settings at any time. Disabling some cookies may affect how parts of our website work.
        </p>
      </LegalSection>

      <LegalSection title="4. Your Consent">
        <p>
          When you first visit our site, you will see a banner: &ldquo;We use cookies to improve your experience. Accept / Decline.&rdquo; You can change your choice at any time by clearing your cookies and visiting the site again.
        </p>
      </LegalSection>

      <LegalSection title="5. More Information">
        <p>
          Read our{" "}
          <Link href="/privacy-policy" className={linkStyle}>
            Privacy Policy
          </Link>{" "}
          to learn how we handle your personal data, or{" "}
          <Link href="/contact" className={linkStyle}>
            contact us
          </Link>{" "}
          with any questions.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
