import React from "react";
import Link from "next/link";

export interface RelatedLink {
  title: string;
  href: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  badge?: string;
  relatedLinks?: RelatedLink[];
  children: React.ReactNode;
}

export function LegalSection({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`space-y-3 pt-6 border-t border-slate-100 first:border-t-0 first:pt-0 ${className}`}>
      {title && (
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      )}
      <div className="space-y-3 text-slate-700 text-[15px] sm:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage({
  title,
  lastUpdated = "[date]",
  badge = "Legal Document",
  relatedLinks,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-slate-50/70 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 font-sans text-slate-800">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 md:p-12">
          {/* Header */}
          <header className="border-b border-slate-200 pb-6 mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
              {badge}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last updated: <span className="text-slate-700 font-semibold">{lastUpdated}</span>
            </p>
          </header>

          {/* Document Content */}
          <div className="space-y-8">
            {children}
          </div>

          {/* Related Pages Footer */}
          {relatedLinks && relatedLinks.length > 0 && (
            <footer className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Related pages: </span>
              {relatedLinks.map((link, idx) => (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#4c1d95] font-medium underline underline-offset-2 hover:text-[#3b0764] transition-colors"
                  >
                    {link.title}
                  </Link>
                  {idx < relatedLinks.length - 1 && <span className="mx-2 text-slate-400">·</span>}
                </React.Fragment>
              ))}
            </footer>
          )}
        </article>
      </div>
    </div>
  );
}
