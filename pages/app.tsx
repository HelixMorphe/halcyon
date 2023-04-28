import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Navbar";
import React from "react";
import Main from "@/components/App/Main.jsx";
import SectionWrapper from "@/components/App/SectionsWrapper";
const App = () => {
  return (
    <div>
      <div className="max-w-[1400px] m-auto">{/* <Navbar /> */}</div>
      <div className="flex">
        {/* <div>Sidebar</div> */}
        <div className="grid grid-cols-2 w-full h-screen overflow-auto ">
          <div className="p-10 bg-zinc-50 overflow-auto">
            <SectionWrapper />
          </div>
          <div>Preview</div>
        </div>
      </div>
    </div>
  );
};

export default App;
