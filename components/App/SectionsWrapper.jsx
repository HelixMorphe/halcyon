import React, { useEffect, useState } from "react";
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

import { SortableItem } from "./SortableItem";
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
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((obj) => obj.id === active.id);
        const newIndex = items.findIndex((obj) => obj.id === over.id);
        console.log({ oldIndex, newIndex });
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
