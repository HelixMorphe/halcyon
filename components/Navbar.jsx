import React from "react";
import { Minimize } from "lucide-react";
const Navbar = ({ variant = "nav" }) => {
  if (variant === "APP") {
    return (
      <div>
        <div className="border-b h-16 flex items-center justify-between px-4 ">
          <div className="flex items-center gap-10 text-base">
            <div className="text-black flex gap-2 items-center font-bold ">
              <Minimize className="" />
              <p>fabresume.</p>
            </div>
          </div>
          {/* <div>Button</div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border-b h-16 flex items-center justify-between px-4 ">
        <div className="flex items-center gap-10 text-base">
          <div className="text-black flex gap-2 items-center font-bold ">
            <Minimize className="" />
            <p>fabresume.</p>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-[500] text-slate-600">
            <p>Features</p>
            <p>Documentation</p>
            <p>Pricing</p>
            <p>Blog</p>
          </nav>
        </div>
        {/* <div>Button</div> */}
      </div>
    );
  }
};

export default Navbar;
