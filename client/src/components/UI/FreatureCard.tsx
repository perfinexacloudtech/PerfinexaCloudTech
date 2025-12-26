import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  subtitle,
  badge,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 bg-[#111] text-white border border-white/10 shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {badge && (
        <span className="text-xs px-3 py-1 rounded-full bg-white/20 uppercase tracking-wide">
          {badge}
        </span>
      )}

      {title && (
        <h3 className="text-lg font-semibold mt-3">
          {title}
        </h3>
      )}

      {subtitle && <p className="text-sm opacity-80 mt-1">{subtitle}</p>}

      {children}
    </div>
  );
}
