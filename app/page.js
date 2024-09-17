"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function updateCount() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="text-9xl">you clicked {count} times</div>
      <button onClick={updateCount} className="border-2 text-2xl">
        click
      </button>
    </div>
  );
}
