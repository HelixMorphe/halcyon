import { LucideGithub } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="p-10">
      <div className="lg:min-h-[300px] flex items-center justify-center flex-col gap-10">
        <div className="text-center text-brand-900 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-6xl font-bold ">
            Resume building made beautifully simple.
          </h2>
          <p className="text-brand-500 text-sm lg:text-base">
            Create a minimal and professional resume with Halcyon - an
            open-source resume builder
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="h-12 rounded-md flex items-center px-10 bg-brand-900 text-white">
            <p>Get Started</p>
          </div>
          <div className="h-12 rounded-md flex items-center px-10 bg-brand-200 text-brand-600 gap-2">
            <LucideGithub />
            <p>Github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
