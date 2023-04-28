import React, { useEffect, useState, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

// import { SortableItem } from "./SortableItem";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import autoAnimate from "@formkit/auto-animate";
const sections = [
  {
    id: 1,
    label: "Personal Information",
  },
  {
    id: 2,
    label: "Education",
  },
  {
    id: 3,
    label: "Hobbies",
  },
];
export default function SectionWrapper() {
  const [items, setItems] = useState(sections);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  //   useEffect(() => {
  //     console.log(items);
  //   }, [items]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} label={item.label} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log({ active, over });
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((obj) => obj.id === active.id);
        const newIndex = items.findIndex((obj) => obj.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 rounded-md my-4 bg-stone-100"
    >
      <div className="flex justify-between items-center">
        <p>{props.label}</p>
        <div className="flex items-center justify-center gap-2">
          <button {...listeners} {...attributes}>
            <ArrowUpDown className="opacity-5 hover:opacity-40 active:opacity-60" />
          </button>
          <button
            onClick={() => {
              reveal();
            }}
          >
            <ChevronDown className="opacity-10 hover:opacity-40 active:opacity-60" />
          </button>
        </div>
      </div>
      <div ref={parent}>
        {show && (
          <p className="h-[300px] flex items-center justify-center">
            This is content
          </p>
        )}
      </div>
    </div>
  );
}
