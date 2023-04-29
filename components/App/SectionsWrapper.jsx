import React, { useEffect, useState, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
// import { SortableItem } from "./SortableItem";
import { ArrowUpDown, ChevronDown, GripVertical } from "lucide-react";
import autoAnimate from "@formkit/auto-animate";
import Personal from "../Forms/Personal";
import Work from "../Forms/Work";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SECTIONS = [
  {
    id: 1,
    label: "Personal Information",
    component: <Personal />,
  },
  {
    id: 2,
    label: "Experience",
    component: <Work />,
  },
  {
    id: 3,
    label: "Hobbies",
    component: <Personal />,
  },
];

export default function SectionWrapper() {
  console.log("re-render");
  const [items, setItems] = useState(SECTIONS);
  const [activeId, setActiveId] = useState(null);
  const [minimise, setMinimise] = useState(true);
  useEffect(() => {
    console.log(minimise);
  }, [minimise]);
  useEffect(() => {
    setMinimise(!Boolean(activeId));
  }, [activeId]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem
            activeId={activeId}
            key={item.id}
            id={item.id}
            label={item.label}
            component={item.component}
            minimise={minimise}
          />
        ))}
      </SortableContext>
      <DragOverlay className="">
        {activeId ? (
          <SortableItem
            key={activeId.id}
            id={activeId.id}
            label={activeId.label}
            component={activeId.component}
            minimise={minimise}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
  function handleDragStart(event) {
    const activeItem = SECTIONS.find((item) => item.id === event.active.id);
    setActiveId(activeItem);
  }
  function handleDragEnd(event) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((obj) => obj.id === active.id);
        const newIndex = items.findIndex((obj) => obj.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }
}

function SortableItem({ id, label, component, activeId, minimise }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => {
    setShow(!show);
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-md my-4 bg-white ${
        activeId?.id === id ? "opacity-50" : ""
      } ${show ? "shadow-sm" : ""}`}
    >
      <div className="flex justify-between items-center">
        <p
          className="font-semibold text-lg w-full py-4 px-8 cursor-pointer"
          onClick={reveal}
        >
          {label}
        </p>
        <div className="flex items-center justify-center gap-2 py-4 px-8">
          {/* <button {...listeners} {...attributes}>
            <GripVertical className="opacity-5 hover:opacity-40 active:opacity-60" />
          </button> */}
        </div>
      </div>
      <div className="" ref={parent}>
        {show && minimise && <div className="">{component}</div>}
      </div>
    </div>
  );
}
