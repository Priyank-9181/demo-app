import React, { useEffect, useState } from "react";

function HookStateInputExample() {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState("");

  useEffect(() => {
    setcount((rc) => rc + 1);
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
      <h1>Count:- {count}</h1>
    </div>
  );
}

export default HookStateInputExample;
