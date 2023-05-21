import React from "react";

const TemplateStore = () => {
  return (
    <div>
      {/* <p className="text-slate-700 text-sm">Choose a template wisely.</p> */}
      <div className="grid grid-cols-2 gap-4 overflow-auto">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
};

export default TemplateStore;

const TemplateCard = ({ selected }) => {
  return <div className={`h-[220px] w-full bg-slate-100 rounded-lg `}></div>;
};
