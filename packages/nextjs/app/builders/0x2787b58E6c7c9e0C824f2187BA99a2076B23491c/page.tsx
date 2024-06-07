"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [visibleLines, setVisibleLines] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleLines([true, false, false]), 1000),
      setTimeout(() => setVisibleLines([true, true, false]), 2000),
      setTimeout(() => setVisibleLines([true, true, true]), 3000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <>
      <div className="container-md mx-auto my-10 text-lg">
        <div className="mockup-code item">
          <pre
            data-prefix="$"
            className={`${visibleLines[0] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          >
            <code>npx create-eth@latest</code>
          </pre>
          <pre
            data-prefix=">"
            className={`text-warning ${visibleLines[1] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          >
            <code>installing...</code>
          </pre>
          <pre
            data-prefix=">"
            className={`text-success ${visibleLines[2] ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          >
            <code>Done!</code>
          </pre>
        </div>
      </div>

      <div className="container-md mx-auto text-4xl font-mono"> Hello everyone!</div>

      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto max-w-xl my-10">
        <figure>
          <Image src="/emreknft.png" width={500} height={500} alt="emrek" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">My name is Emre</h2>
          <p className="font-mono">I am a second-year computer engineering student.</p>
          <p className="font-mono">Lets buidl together!</p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <a href="https://github.com/kocaemre" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-lg mx-5 bg-cyan-200">Github</button>
        </a>
        <a href="https://x.com/0xemrek" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-lg mx-5 bg-cyan-200">Twitter</button>
        </a>
        <a
          href="https://app.buidlguidl.com/builders/0x2787b58E6c7c9e0C824f2187BA99a2076B23491c"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-lg mx-5 bg-cyan-200">BG Profile</button>
        </a>
      </div>
    </>
  );
};

export default Page;
