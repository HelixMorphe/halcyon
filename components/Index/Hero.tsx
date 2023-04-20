import { LucideGithub } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <section className="p-10">
      <div className="lg:min-h-[300px] flex items-center justify-center flex-col gap-10">
        <div className="text-center text-brand-900 flex flex-col gap-4">
          <h2 className="text-4xl sm:text-6xl font-bold ">
            Resume building made{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
              beautifully
            </span>{" "}
            simple.
          </h2>
          <p className="text-brand-500 text-sm lg:text-base">
            Create a minimal and professional resume with Halcyon - an
            open-source resume builder
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={"/app"}>
            <Button size={"lg"}>Get Started</Button>
          </Link>
          <Button
            className="flex items-center justify-center gap-2"
            size={"lg"}
            variant={"subtle"}
          >
            <LucideGithub className="" size={"18px"} />
            <p>Github</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
