import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
        <h1>Count Down</h1>
        <button onClick={() => setCount(count + 1)}> {"-->"}</button>
        <button onClick={() => setCount(count - 1)}> {"<--"}</button>
        <p>Your Count is {count}</p>
    </div>
  );
};

export default Count;