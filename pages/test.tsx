import React from "react";
import TextEffect from "@/components/App/TextEffect";
import { useState } from "react";
const Test = () => {
  const [replay, setReplay] = useState(true);
  return (
    <div>
      <TextEffect
        className="text-6xl font-bold p-4 border"
        text="Awesome Wavy Text!"
        replay={replay}
      />
      <button
        onClick={() => {
          setReplay(!replay);
          setTimeout(() => setReplay(true), 600);
        }}
      >
        Replay
      </button>
    </div>
  );
};

export default Test;
