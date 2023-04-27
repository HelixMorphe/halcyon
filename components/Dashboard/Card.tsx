import {
  Plus,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
  PlusSquare,
  PlusSquareIcon,
} from "lucide-react";
import React from "react";

const Card = ({ variant = "default" }) => {
  if (variant === "create") return <CreateNewCard />;
  return (
    <div className="cursor-pointer">
      <div className="h-[200px] w-[160px] bg-slate-300 rounded-lg"></div>
    </div>
  );
};

export default Card;

const CreateNewCard = () => {
  return (
    <div className="h-[200px] w-[160px] bg-slate-100 border-dashed border-slate-300 border-2 rounded-lg cursor-pointer flex items-center justify-center">
      <Plus className="text-slate-400" size={"30"} />
    </div>
  );
};
