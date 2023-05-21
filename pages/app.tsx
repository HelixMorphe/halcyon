import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import TabSection from "@/components/App/TabSection";
import GradientBg from "@/components/App/GradientBg";
import useResumeStore from "@/lib/store/resume";
const App = () => {
  const resume = useResumeStore((state) => state.data);
  useEffect(() => {
    console.log(resume);
  }, [resume]);
  return (
    <div>
      <div className="">
        <Navbar variant={"APP"} />
      </div>
      <div className="flex">
        {/* <div>Sidebar</div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[calc(100vh-64px)] overflow-auto ">
          <div className="p-10 h-[calc(100vh-64px)] overflow-auto max-w-lg mx-auto w-full">
            <TabSection />
          </div>
          <div className="bg-neutral-100 lg:col-span-2 flex items-center justify-center hero-pattern relative">
            <div className="bg-white shadow-md h-[700px] w-[550px] rounded-lg">
              <div className="bg-blue-100 h-[100px] w-full p-4 flex items-start justify-center flex-col">
                <h1 className="font-bold text-2xl text-slate-800">
                  {resume.basics.firstName} {resume.basics.lastName}
                </h1>
                <p className="text-sm font-semibold text-blue-900/40">
                  {resume.basics.jobTitle}
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
