import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Navbar";
import React from "react";
import InputSection from "@/components/App/InputSection";
const App = () => {
  return (
    <div>
      <div className="">
        <Navbar variant={"APP"} />
      </div>
      <div className="flex">
        {/* <div>Sidebar</div> */}
        <div className="grid grid-cols-3 w-full h-[calc(100vh-64px)] overflow-auto ">
          <div className="p-10 col-span-1 overflow-auto">
            <InputSection />
          </div>
          <div className="bg-neutral-100 col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
