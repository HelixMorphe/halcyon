import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { TypographyMuted } from "../ui/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WorkExperienceForm = ({
  index,
  experience,
  onChange,
  onDelete,
  onSave,
  setValue,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("highlight")) {
      const idx = parseInt(name.split("-")[1]);
      const newHighlights = [...experience.highlights];
      newHighlights[idx] = value;
      onChange(index, { ...experience, highlights: newHighlights });
    } else {
      onChange(index, { ...experience, [name]: value });
    }
  };

  const handleDelete = () => {
    setValue(null);
    onDelete(index);
  };

  const handleSave = () => {
    console.log("Saving experience data:", experience);
    setValue(null);
    onSave(index);
  };

  return (
    <div className="work-experience-form grid grid-cols-2 gap-4 mb-3">
      <div className="col-span-2">
        <TypographyMuted>Company Name:</TypographyMuted>
        <Input
          name="name"
          value={experience.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-span-2">
        <TypographyMuted>Position:</TypographyMuted>
        <Input
          name="position"
          value={experience.position}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-span-2">
        <TypographyMuted>URL:</TypographyMuted>
        <Input
          name="url"
          value={experience.url}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-span-1">
        <TypographyMuted>Start Date:</TypographyMuted>
        <Input
          name="startDate"
          placeholder="eg: 03/05/2020"
          value={experience.startDate}
          onChange={handleChange}
          //   type="date"
          required
        />
      </div>
      <div className="col-span-1">
        <TypographyMuted>End Date:</TypographyMuted>
        <Input
          name="endDate"
          placeholder="eg: 03/11/2020"
          value={experience.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-span-2">
        <TypographyMuted>Summary:</TypographyMuted>
        <Textarea
          name="summary"
          value={experience.summary}
          onChange={handleChange}
          required
        />
      </div>
      {/* {experience.highlights.map((highlight, idx) => (
        <label key={idx}>
          {idx === 0 ? "Highlights:" : ""}
          <input
            name={`highlight-${idx}`}
            value={highlight}
            onChange={handleChange}
            required
          />
        </label>
      ))} */}
      {/* <button type="button" onClick={addHighlightField}>
        Add Another Highlight
      </button> */}
      <Button variant={"destructive"} onClick={handleDelete}>
        Delete
      </Button>
      <Button variant={"default"} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

const App = () => {
  const [workExperiences, setWorkExperiences] = useState([
    {
      name: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [""],
    },
  ]);
  const initialActiveItems = workExperiences.map((_, index) => `item-${index}`);
  const [activeItems, setActiveItems] = useState(initialActiveItems);
  const [value, setValue] = useState("0");
  useEffect(() => {
    console.log(workExperiences);
  }, [workExperiences]);
  const handleChange = (index, experience) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index] = experience;
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleDelete = (index) => {
    const updatedWorkExperiences = workExperiences.filter(
      (_, idx) => idx !== index
    );
    setWorkExperiences(updatedWorkExperiences);
  };

  const handleSave = (index) => {
    setActiveItems([]);
  };

  const addWorkExperience = () => {
    setValue(workExperiences.length.toString());
    setWorkExperiences([
      ...workExperiences,
      {
        name: "",
        position: "",
        url: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [""],
      },
    ]);
  };
  return (
    <div className="px-8 pb-8 pt-6">
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
      >
        {workExperiences.map((experience, index) => (
          <AccordionItem value={index.toString()}>
            <AccordionTrigger>{experience.name || "Untitled"}</AccordionTrigger>
            <AccordionContent>
              <WorkExperienceForm
                key={index}
                index={index}
                experience={experience}
                onChange={handleChange}
                onDelete={handleDelete}
                onSave={handleSave}
                setValue={setValue}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button
        variant={"outline"}
        className="w-full mt-4"
        onClick={addWorkExperience}
      >
        Add experience
      </Button>
    </div>
  );
};

export default App;
