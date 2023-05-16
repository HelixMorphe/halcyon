import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import useResumeStore from "@/lib/store/resume";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/Button";
const InputSection = () => {
  const data = useResumeStore((state) => state.data);
  const updateField = useResumeStore((state) => state.updateField);
  const addEducation = useResumeStore((state) => state.addEducation);
  const handleChange = (path) => (event) => {
    updateField(path, event.target.value);
  };
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="h2">Personal Information</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-4 gap-4 my-4">
              <Input
                value={data.basics.firstName}
                onChange={handleChange(["basics", "firstName"])}
                placeholder="First name"
                className="col-span-2"
              />
              <Input
                value={data.basics.lastName}
                onChange={handleChange(["basics", "lastName"])}
                placeholder="Last name"
                className="col-span-2"
              />
              <Input
                value={data.basics.jobTitle}
                onChange={handleChange(["basics", "jobTitle"])}
                placeholder="Job Title"
                className="col-span-4"
              />
              <Input
                value={data.basics.phone}
                onChange={handleChange(["basics", "phone"])}
                placeholder="Phone"
                className="col-span-2"
              />
              <Input
                value={data.basics.email}
                onChange={handleChange(["basics", "email"])}
                placeholder="Email"
                className="col-span-2"
              />
              <Input
                value={data.basics.bio}
                onChange={handleChange(["basics", "bio"])}
                className="col-span-4"
                placeholder="Short bio"
              />
              {/* <Input
                value={data.basics.url}
                onChange={handleChange(["basics", "bio"])}
                className="col-span-4"
                placeholder="URL"
              /> */}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="h2">Education</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="">
              {data.education.map((education, index) => (
                <EducationForm
                  education={education}
                  key={index}
                  index={index}
                />
              ))}
              <Button
                className="w-full"
                variant={"default"}
                onClick={addEducation}
              >
                Add one more
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InputSection;

const EducationForm = ({ education, key, index }) => {
  const updateField = useResumeStore((state) => state.updateField);
  const handleChange = (path) => (event) => {
    updateField(path, event.target.value);
  };
  const [open, setOpen] = useState(true);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    console.log(check);
  }, [check]);
  return (
    <div className="my-4 rounded-lg  p-3 border">
      <h2 onClick={() => setOpen((state) => !state)} className="font-semibold">
        {education.institute || "Untitled"}
      </h2>
      <div
        key={key}
        className={`grid grid-cols-4 gap-4 transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 my-4" : "max-h-0 my-0"
        }`}
      >
        <Input
          value={education.institute}
          onChange={handleChange(["education", index, "institute"])}
          placeholder="Institute"
          className="col-span-4"
        />
        <Input
          value={education.field}
          onChange={handleChange(["education", index, "field"])}
          placeholder="Field"
          className="col-span-2"
        />
        <Input
          value={education.degree}
          onChange={handleChange(["education", index, "degree"])}
          placeholder="Degree"
          className="col-span-2"
        />
        <Input
          value={education.score}
          onChange={handleChange(["education", index, "score"])}
          placeholder="CGPA"
          className="col-span-2"
        />
        <Input
          value={education.city}
          onChange={handleChange(["education", index, "city"])}
          placeholder="City"
          className="col-span-2"
        />
        <Input
          value={education.from}
          onChange={handleChange(["education", index, "from"])}
          placeholder="From"
          className="col-span-2"
        />
        <Input
          disabled={check}
          value={check ? "current" : education.to}
          onChange={handleChange(["education", index, "to"])}
          placeholder="To"
          className="col-span-2"
        />
        <div className="col-span-4 flex items-center justify-start gap-4">
          <Checkbox onCheckedChange={(e) => setCheck(e)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I currently study here.
          </label>
        </div>
      </div>
    </div>
  );
};
