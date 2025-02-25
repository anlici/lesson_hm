import React from "react";
import useStore from "./store/1";
export default function App1() {
  const  {count,increment,decrement,reset} = useStore();
  return (
    <>
        <h1>{count}</h1>
        <div>
            <button onClick={increment}>前一个</button>
            <button onClick={decrement}>后一个</button>
        </div>
    </>
  );
}