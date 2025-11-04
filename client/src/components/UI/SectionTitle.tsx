import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  highlight?: string;
  className?: string;
}

export default function SectionTitle({ children, highlight, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${className}`}>
      {typeof children === "string" ? (
        <>
          {children.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-r from-[#deae40] to-[#772e98] bg-clip-text text-transparent">
            {highlight ?? children.split(" ").slice(-1)}
          </span>
        </>
      ) : (
        children
      )}
    </h2>
  );
}
