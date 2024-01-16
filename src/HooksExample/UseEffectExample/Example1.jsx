import React, { useEffect, useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const mySetInterval = setInterval(() => setCount(count + 1), 1000);

    return () => clearInterval(mySetInterval);
  }, [count]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <div>
        <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{count}</p>
      </div>
    </div>
  );
}

export default Example1;
