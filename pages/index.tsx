import Features from "@/components/Index/Features";
import Hero from "@/components/Index/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="max-w-[1400px] m-auto">
          <Navbar variant="NAV" />
        </div>
        <div className="max-w-5xl m-auto mt-4 p-4">
          <Hero />
          <Features />
        </div>
        {/* <div className="absolute inset-x-0 top-[-55px] z-10 h-96 overflow-hidden text-slate-600/40  [mask-image:linear-gradient(to_top,transparent,white)]">
          <div className="svg-pattern w-full h-full"></div>
        </div> */}
      </div>
    </>
  );
}
