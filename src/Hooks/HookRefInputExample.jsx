import React, { useEffect, useRef, useState } from "react";

function HookRefInputExample() {
  const [input, setinput] = useState("");
  const count = useRef(0);
  const prevInputRef = useRef(input);

  useEffect(() => {
    count.current = count.current + 1;
    prevInputRef.current = input;
    console.log("count.current", count.current);
  }, [input]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
      </div>
      <h1>Count:- {count.current}</h1>
      <h2>Previous Input:- {prevInputRef.current}</h2>
    </div>
  );
}

export default HookRefInputExample;
