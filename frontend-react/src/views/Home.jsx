import React, { useState } from "react";

export default function Home() {
  /** reactive constats */
  const [count, setCount] = useState(0);

  /** functions */
  const getService = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="col-sm-6">
        <h1 className="m-0">Dashboard</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">Dashboard v1</li>
        </ol>
      </div>
      dasdasdsa hola mundo
    </>
  );
}
