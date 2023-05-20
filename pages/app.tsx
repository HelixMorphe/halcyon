import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Navbar";
import React from "react";
import InputSection from "@/components/App/InputSection";
import TabSection from "@/components/App/TabSection";
import GradientBg from "@/components/App/GradientBg";
// import A4Page from "@/components/Templates/test";
const App = () => {
  return (
    <div>
      <div className="">
        <Navbar variant={"APP"} />
      </div>
      <div className="flex">
        {/* <div>Sidebar</div> */}
        <div className="grid grid-cols-3 w-full h-[calc(100vh-64px)] overflow-auto ">
          <div className="p-10">
            <TabSection />
          </div>
          <div className="bg-neutral-100 col-span-2 flex items-center justify-center hero-pattern relative">
            <div className="bg-white shadow-md h-[700px] w-[550px] rounded-lg">
              <div className="bg-blue-100 h-[100px] w-full p-4 flex items-start justify-center flex-col">
                <h1 className="font-bold text-2xl text-slate-800">
                  Sai Santhosh Pentakota
                </h1>
                <p className="text-sm font-semibold text-blue-900/40">
                  Web Developer
                </p>
              </div>
              <div></div>
            </div>

            <div className="fixed bottom-10">
              <GradientBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
