import Features from "@/components/Index/Features";
import Hero from "@/components/Index/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-[1400px] m-auto">
        <Navbar />
      </div>
      <div className="max-w-5xl m-auto mt-4 p-4">
        <Hero />
        <Features />
      </div>
    </>
  );
}
