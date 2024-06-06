"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import me from "./me.webp";
import "./style.css";
import { NextPage } from "next";

const Jriyyya: NextPage = () => {
  return (
    <>
      <div className="p-4 flex h-screen bg-gradient-to-t dark:from-gray-950 dark:to-indigo-950 overflow-hidden">
        <div className="relative w-full h-full">
          <>
            {[...Array(15)].map((_, index) => (
              <Star key={index} />
            ))}
          </>

          <h1 className="text-[300px] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">JRIYYYA</h1>

          <Image
            src={me}
            alt="jriyyya"
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-3/4 object-contain"
            style={{ filter: "drop-shadow(0px -1px 8px #000)" }}
          />

          <div className="absolute bottom-0 left-0 p-10 w-[32vw] text-slate-400">
            <span className="font-bold">About Me :</span> <br />I am a software developer and have expertise in Frontend
            Development.
            <br />I have been active in the web3 community since past 2 years now. I have{" "}
            <span className="font-bold">{" won 5+ hackathons"}.</span> I also enjoy open source development, and was a
            contributor in
            <span className="font-bold">{" GSoC`23 @Sugar Labs "}</span>
            and <span className="font-bold">{" GSoC`24 @Zendalona "}</span>
          </div>

          <div className="absolute bottom-0 right-0 p-10 flex flex-col gap-y-5 text-green-500">
            <a href="https://jriyyya.dev" target="_blank">
              <span className="animate-pulse pr-1">/</span>
              Portfolio
            </a>
            <a href="mailto:riya1jain567@gmail.com" target="_blank">
              <span className="animate-pulse pr-1">/</span>
              Mail Me
            </a>
            <a href="https://x.com/jriyyya" target="_blank">
              <span className="animate-pulse pr-1">/</span>
              Twitter
            </a>
            <a href="https://github.com/jriyyya" target="_blank">
              <span className="animate-pulse pr-1">/</span>
              Github
            </a>
            <a href="https://linkedin.com/in/jriyyya" target="_blank">
              <span className="animate-pulse pr-1">/</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jriyyya;

function Star() {
  const durationStep = 4000;

  const [duration, setDuration] = useState(durationStep + Math.random() * durationStep);
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 });

  useEffect(() => {
    setTimeout(() => {
      setDuration(durationStep + Math.random() * durationStep);
      setPosition({ x: Math.random() * 100, y: Math.random() * 100 });
    }, duration);
  }, [duration]);

  return (
    <figure
      className="absolute text-purple-400 dark:text-purple-300"
      key={duration}
      style={{
        animation: `anim--star ${duration}ms`,
        top: `${position.y}%`,
        left: `${position.x}%`,
        fontSize: `${((duration - durationStep) / durationStep) * 64}px`,
      }}
    >
      {Math.random() < 0.5 ? "+" : <>&#9733;</>}
    </figure>
  );
}
