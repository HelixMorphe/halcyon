import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1400px] m-auto">
        <Navbar />
      </div>
      <div className="max-w-[1400px] m-auto mt-4 p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
