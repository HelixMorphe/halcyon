import React from "react";
import { Input } from "../ui/input";

const Personal = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Job Title" className="col-span-2" />
        <Input placeholder="First name" className="" />
        <Input placeholder="Last name" className="" />
        <Input placeholder="E-mail" className="" />
        <Input placeholder="Phone" className="" />
      </div>
    </div>
  );
};

export default Personal;
