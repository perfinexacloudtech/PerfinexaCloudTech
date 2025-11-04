"use client";


import Link from "next/link";
import { HiSparkles } from "react-icons/hi";


export default function CTAButtons() {
return (
<div className="text-center space-y-4 mt-12 pointer-events-auto">
<Link href="/courses" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-colors mr-4" style={{ backgroundColor: '#0d318d' }}>
<HiSparkles className="w-5 h-5" />
Explore More
</Link>
<Link href="/join" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-colors" style={{ background: 'linear-gradient(to right, #772e98, #deae40)' }}>
<HiSparkles className="w-5 h-5" />
Join Now
</Link>
</div>
);
}