import { useEffect, useRef, useState } from "react";
import { LucidePause, LucidePlay } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useAnimationConfig, useScaffoldReadContract, useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth";

const MARQUEE_PERIOD_IN_SEC = 5;

export const ContractData = () => {
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRightDirection, setIsRightDirection] = useState(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);

  const { data: totalCounter } = useScaffoldReadContract({
    contractName: "Greetings",
    functionName: "totalCounter",
  });

  const { data: currentGreeting, isLoading: isGreetingLoading } = useScaffoldReadContract({
    contractName: "Greetings",
    functionName: "greeting",
  });

  useScaffoldWatchContractEvent({
    contractName: "Greetings",
    eventName: "GreetingChange",
    onLogs: () => {
      console.log("Greeting event emitted");
    },
    // listener: (greetingSetter, newGreeting, premium, value) => {
    //   console.log(greetingSetter, newGreeting, premium, value);
    // },
  });

  const { showAnimation } = useAnimationConfig(totalCounter);

  const showTransition = transitionEnabled && !!currentGreeting && !isGreetingLoading;

  useEffect(() => {
    if (transitionEnabled && containerRef.current && greetingRef.current) {
      setMarqueeSpeed(
        Math.max(greetingRef.current.clientWidth, containerRef.current.clientWidth) / MARQUEE_PERIOD_IN_SEC,
      );
    }
  }, [transitionEnabled, containerRef, greetingRef]);

  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] overflow-hidden">
      <div className="UnauthenticatedPage__SectionRight-sc-1ayouh5-4 dCkNVo absolute -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="900"
          fill="none"
          viewBox="0 0 1440 900"
          className="UnauthenticatedPage__PositionedBackground-sc-1ayouh5-5 fXNnuB"
        >
          <defs>
            <linearGradient id="i0" x1="720" x2="720" y1="0" y2="1702.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EBF3FF" stopOpacity="0.32"></stop>
              <stop offset="1" stopColor="#B9D4FE" stopOpacity="0.14"></stop>
            </linearGradient>
          </defs>
          <path fill="#4700EB" d="M0 0h1440v900H0z"></path>
          <path fill="url(#i0)" d="M0 0h1440v900H0z"></path>
          <g fill="#FFFAEB" opacity="0.03">
            <rect
              width="327.93"
              height="163.96"
              x="583.5"
              y="752.12"
              rx="8"
              transform="rotate(-180 583.5 752.12)"
            ></rect>
            <path d="M1067 196.93a7.85 7.85 0 0 0 8 7.9 331.5 331.5 0 0 0 118.22-24.86 330 330 0 0 0 107.01-71.09 327.9 327.9 0 0 0 71.5-106.39 326.3 326.3 0 0 0 25.01-117.5c.11-4.4-3.49-7.99-7.91-7.99h-148.91a8.32 8.32 0 0 0-8.2 8 163.1 163.1 0 0 1-12.36 54.75 163.7 163.7 0 0 1-35.75 53.19 164.9 164.9 0 0 1-53.5 35.54 165.7 165.7 0 0 1-55.11 12.3 8.3 8.3 0 0 0-8 8.18zM634.7 85.33a7.85 7.85 0 0 1 8-7.9c40.59.98 80.67 9.4 118.22 24.86a330 330 0 0 1 107.01 71.09 327.8 327.8 0 0 1 71.5 106.39 326.3 326.3 0 0 1 25 117.49c.12 4.42-3.48 8-7.9 8h-148.9a8.32 8.32 0 0 1-8.2-8 163.2 163.2 0 0 0-12.35-54.75 163.9 163.9 0 0 0-35.75-53.2 165 165 0 0 0-53.5-35.53 165.7 165.7 0 0 0-55.12-12.3 8.31 8.31 0 0 1-8-8.19V85.33z"></path>
          </g>
          <g fill="#F1EBFF" opacity="0.04">
            <rect width="199.62" height="99.81" x="1331.81" y="303" rx="8" transform="rotate(90 1331.81 303)"></rect>
            <path d="M1285.62 794.27a7.76 7.76 0 0 0-7.84 8 201.8 201.8 0 0 0 15.04 68.84 200.8 200.8 0 0 0 43.27 65.14 199.6 199.6 0 0 0 64.76 43.52 198.7 198.7 0 0 0 68.4 15.13c4.41.17 8-3.42 8-7.84v-84.4c0-4.41-3.59-7.96-8-8.32a99.3 99.3 0 0 1-30.2-7.32 99.8 99.8 0 0 1-32.38-21.76 100.5 100.5 0 0 1-21.64-32.57c-4-9.71-6.45-19.98-7.28-30.43-.35-4.4-3.9-7.99-8.32-7.99z"></path>
            <rect width="199.62" height="99.81" x="878.38" y="538.94" rx="8"></rect>
            <rect width="199.62" height="100.97" x="69.44" y="475.11" rx="8" transform="rotate(90 69.44 475.1)"></rect>
            <path d="M544.24 157.1a7.76 7.76 0 0 0 7.84-8A199.62 199.62 0 0 0 360.62-42.35a7.76 7.76 0 0 0-8 7.84V49.3c0 4.42 3.59 7.97 8 8.32a99.8 99.8 0 0 1 62.58 28.92 99.8 99.8 0 0 1 28.91 62.58c.36 4.4 3.9 8 8.32 8h83.81zm36.7 801.67a7.76 7.76 0 0 0 7.99 7.84 199.62 199.62 0 0 0 176.43-123.07 199.6 199.6 0 0 0 15.03-68.4c.18-4.4-3.42-8-7.83-8h-83.82c-4.41 0-7.96 3.6-8.32 8a99.81 99.81 0 0 1-61.3 84.22 99.8 99.8 0 0 1-30.2 7.28c-4.4.35-7.99 3.9-7.99 8.32v83.81zM387.97 263.16a7.76 7.76 0 0 0-8-7.84 199.63 199.63 0 0 0-191.46 191.46 7.76 7.76 0 0 0 7.84 8h83.8c4.43 0 7.98-3.59 8.33-8a99.8 99.8 0 0 1 91.5-91.5c4.4-.34 8-3.9 8-8.31v-83.81z"></path>
          </g>
        </svg>
      </div>

      <div
        className={`flex flex-col max-w-2xl bg-base-200 bg-opacity-70 rounded-md shadow-lg px-0 pb-4 w-full ${
          showAnimation ? "animate-zoom" : ""
        }`}
      >
        <div className="p-4 font-bold text-xl">Latest shoutout</div>
        <div className="mt-0 border border-primary bg-base-300 rounded-md text-secondary  overflow-hidden text-[140px] whitespace-nowrap w-full uppercase tracking-tighter font-bai-jamjuree leading-tight">
          <div className="relative overflow-x-hidden" ref={containerRef}>
            {/* for speed calculating purposes */}
            <div className="absolute -left-[9999rem]" ref={greetingRef}>
              <div className="px-4 bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                {currentGreeting}
              </div>
            </div>
            {new Array(3).fill("").map((_, i) => {
              const isLineRightDirection = i % 2 ? isRightDirection : !isRightDirection;
              return (
                <Marquee
                  key={i}
                  direction={isLineRightDirection ? "right" : "left"}
                  gradient={false}
                  play={showTransition}
                  speed={marqueeSpeed}
                  className={i % 2 ? "overflow-y-hidden -my-10" : ""}
                >
                  <div className="px-4 overflow-y-hidden font-normal bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                    {currentGreeting || " "}
                  </div>
                </Marquee>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-between px-4 w-full">
          <button
            className="btn btn-circle bg-base-100 relative bg-center"
            onClick={() => {
              setTransitionEnabled(!transitionEnabled);
            }}
          >
            {/* <div
              className={`absolute inset-0 bg-center bg-no-repeat bg-[url('/assets/switch-button-off.png')] transition-opacity ${
                transitionEnabled ? "opacity-0" : "opacity-100"
              }`}
            /> */}
            {transitionEnabled ? <LucidePause /> : <LucidePlay />}
          </button>

          <div className="bg-base-100/60 border border-primary rounded-xl flex items-center px-2">
            <div className="p-2 py-1 border-r border-primary flex items-end">Total shoutouts: 📣</div>
            <div className="text-4xl text-right min-w-[3rem] px-2 py-1 flex justify-end font-bai-jamjuree">
              {totalCounter?.toString() || "0"}
            </div>
          </div>
        </div>

        <div className="hidden mt-3 flex items-end justify-between">
          <button
            className={`btn btn-circle btn-ghost border border-primary hover:border-primary w-12 h-12 p-1 bg-neutral flex items-center ${
              isRightDirection ? "justify-start" : "justify-end"
            }`}
            onClick={() => {
              if (transitionEnabled) {
                setIsRightDirection(!isRightDirection);
              }
            }}
          >
            <div className="border border-primary rounded-full bg-secondary w-2 h-2" />
          </button>
          <div className="w-44 p-0.5 flex items-center bg-neutral border border-primary rounded-full">
            <div
              className="h-1.5 border border-primary rounded-full bg-secondary animate-grow"
              style={{ animationPlayState: showTransition ? "running" : "paused" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
