import React from "react";
import { Input } from "../ui/input";

const Personal = () => {
  return (
    <div className="px-8 pb-8 pt-6">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <div className="col-span-2">
          <p className="text-sm text-slate-400 mb-2">Job Title</p>
          <Input placeholder="Job Title" />
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-2">First Name</p>
          <Input placeholder="First name" className="" />
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-2">Last Name</p>
          <Input placeholder="Last name" className="" />
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-2">Email</p>
          <Input placeholder="E-mail" className="" />
        </div>
        <div>
          <p className="text-sm text-slate-400 mb-2">Phone</p>
          <Input placeholder="Phone" className="" />
        </div>
      </div>
    </div>
  );
};

export default Personal;
