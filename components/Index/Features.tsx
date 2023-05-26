import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="min-h-[600px] rounded-lg relative">
      <Image
        loading="eager"
        src={"/hero-image.png"}
        alt="hero-image"
        fill
        style={{ objectFit: "contain" }}
      />
    </section>
  );
};

export default Features;
