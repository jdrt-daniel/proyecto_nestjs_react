import React, { useState } from "react";

export default function Home() {
  /** reactive constats */
  const [count, setCount] = useState(0);

  /** functions */
  const getService = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Home View chikilin
      <button onClick={getService}>Click para el evento</button>
      <h1>{count}</h1>
    </div>
  );
}
