import React, { useEffect, useState } from "react";

function HookStateExample() {
  const [count, setcount] = useState(0);

  function handleClick() {
    setcount((c) => c + 1);
  }

//   useEffect(() => {
//     handleClick();
//   }, [count]);

  return (
    <div>
      <div>
        <h1>Count:-{count}</h1>
        <button onClick={handleClick}>Okkkk</button>
      </div>
    </div>
  );
}

export default HookStateExample;
