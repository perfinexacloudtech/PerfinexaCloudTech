import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-4">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#4D2C8E 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none flex items-center">
            <span className="text-[#4D2C8E]">4</span>
            <span className="text-[#F1AB31] relative">0</span>
            <span className="text-[#4D2C8E]">4</span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-[#4D2C8E] mt-4">
          Oops! Looks like you’re lost
        </h2>

        <p className="mt-6 text-slate-500 max-w-lg text-sm md:text-lg font-medium leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        <span className="absolute right-[-20%] bottom-[-10%] text-[#4D2C8E] opacity-20 text-5xl rotate-[-20deg] font-mono">
          {"</>"}
        </span>

        <Link
          href="/"
          className="mt-10 px-10 py-4 bg-[#F1AB31] hover:bg-[#e09a20] text-[#4D2C8E] font-bold rounded-full transition-all flex items-center gap-2 shadow-lg"
        >
          <span className="text-xl">←</span> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
