import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import useResumeStore from "@/lib/store/resume";
import { Trash } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/Button";
import { Textarea } from "../ui/textarea";
const InputSection = () => {
  const data = useResumeStore((state) => state.data);
  const updateField = useResumeStore((state) => state.updateField);
  const addEducation = useResumeStore((state) => state.addEducation);
  const addWorkExperience = useResumeStore((state) => state.addWorkExperience);
  const handleChange = (path) => (event) => {
    updateField(path, event.target.value);
  };
  return (
    <div>
      <Accordion
        defaultValue="basics"
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value="basics">
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
        <AccordionItem value="education">
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
                {data.education.length > 0 ? "Add one more" : "Add"}
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="work">
          <AccordionTrigger>
            <h2 className="h2">Work Experience</h2>
          </AccordionTrigger>
          <AccordionContent>
            <div className="">
              {data.work.map((work, index) => (
                <WorkExperienceForm work={work} key={index} index={index} />
              ))}
              <Button
                className="w-full"
                variant={"default"}
                onClick={addWorkExperience}
              >
                {data.work.length > 0 ? "Add one more" : "Add"}
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
  const deleteEducation = useResumeStore((state) => state.deleteEducation);
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
      <div className="flex item-center justify-between">
        <h2
          onClick={() => setOpen((state) => !state)}
          className="font-semibold  flex-grow"
        >
          {education.institute || `Education #${index + 1}`}
        </h2>
        <AlertDialog>
          <AlertDialogTrigger className="" asChild>
            <Trash
              className="text-red-300 hover:text-red-500 transition-all duration-300 cursor-pointer"
              size={18}
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                details.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteEducation(index)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
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

const WorkExperienceForm = ({ work, key, index }) => {
  const updateField = useResumeStore((state) => state.updateField);
  const deleteWorkExperience = useResumeStore(
    (state) => state.deleteWorkExperience
  );
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
      <div className="flex item-center justify-between">
        <h2
          onClick={() => setOpen((state) => !state)}
          className="font-semibold  flex-grow"
        >
          {work.company || `Work Experience #${index + 1}`}
        </h2>
        <AlertDialog>
          <AlertDialogTrigger className="" asChild>
            <Trash
              className="text-red-300 hover:text-red-500 transition-all duration-300 cursor-pointer"
              size={18}
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                details.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteWorkExperience(index)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div
        key={key}
        className={`grid grid-cols-4 gap-4 transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 my-4" : "max-h-0 my-0"
        }`}
      >
        <Input
          value={work.company}
          onChange={handleChange(["work", index, "company"])}
          placeholder="Company"
          className="col-span-4"
        />
        <Input
          value={work.position}
          onChange={handleChange(["work", index, "position"])}
          placeholder="Position"
          className="col-span-4"
        />

        <Textarea
          value={work.summary}
          onChange={handleChange(["work", index, "summary"])}
          placeholder="Summary"
          className="col-span-4"
        />
        <Input
          value={work.from}
          onChange={handleChange(["work", index, "from"])}
          placeholder="From"
          className="col-span-2"
        />
        <Input
          disabled={check}
          value={check ? "current" : work.to}
          onChange={handleChange(["work", index, "to"])}
          placeholder="To"
          className="col-span-2"
        />
        <div className="col-span-4 flex items-center justify-start gap-4">
          <Checkbox onCheckedChange={(e) => setCheck(e)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I currently work here.
          </label>
        </div>
      </div>
    </div>
  );
};
