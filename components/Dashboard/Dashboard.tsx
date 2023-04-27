import React from "react";
import { Button } from "../ui/Button";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold">Recent</h2>
      <div className="flex flex-wrap gap-8 mt-8">
        <Card variant="create" />
      </div>
    </div>
  );
};

export default Dashboard;
