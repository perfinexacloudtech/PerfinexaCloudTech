
import Navbar from '../common/Navbar'

const HeroSection = () => {
  return (
   <div className="relative h-svh md:min-h-screen w-full bg-[#030014] overflow-hidden flex flex-col items-center justify-center">
    <Navbar />
      
      {/* 1. The Grid Layer */}
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), 
                                      linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
                    backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Top Purple Glow (Radial Blur) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] 
                      bg-blue-600/45 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 3. Central Content (The Text) */}
      <div className="relative z-10 text-center px-4">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 inline-block">
           Cloud-first. AI-ready. Future-focused
        </span>
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
       Transforming ideas  <br /> into digital solutions
        </h1>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-10">
         Cloud web AI automation and skills to scale businesses.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/5 transition">
            Learn Skills
          </button>
          <button className=" px-4 py-2 md:px-8 md:py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
