"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

export default function SpandanBarve() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    !mounted && setMounted(true);
  }, [mounted]);

  const socials = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/marsian83/" },
    { title: "Github", link: "https://www.github.com/marsian83" },
    { title: "Twitter", link: "https://www.twitter.com/marsian83" },
    { title: "marsian.dev", link: "https://www.marsian.dev" },
  ];

  return (
    <section className="flex flex-col-reverse md:flex-row items-center w-full p-[5vw] dark:bg-gray-950 dark:text-white bg-transparent text-black md:h-screen">
      <div className="flex-1 flex flex-col relative">
        <h1 className="text-6xl font-bold">{"It's me... Marsian"}</h1>

        <p className="text-slate-400">
          {"I'm Spandan Barve (aka Marsian), a passionate software developer."}
          <br />
          {">"} will be a Computer Science Engineering Graduate in 2025
          <br />
          {">"} winner at 7+ Web3 Hackathons
          <br />
          {">"} LFX 2023 with CNCF <span className="font-bold">&</span> GSoC 2024 with SugarLabs
          <br />
          {">"} may or may not be from the planet Mars
        </p>

        <Address address="0x472cAde746560419a407CA7103c87c79c794C418" format="long" />

        <div className="flex items-center gap-x-6">
          <h2 className="pt-2 font-semibold text-teal-300 text-lg">Connect : </h2>

          {socials.map((social, key) => (
            <Link
              key={key}
              href={social.link}
              target="_blank"
              className="underline hover:no-underline hover:text-cyan-300 duration-150"
            >
              {social.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:w-[500px] md:h-[500px] w-[80vw] aspect-square md:rounded-full md:overflow-hidden relative">
        <figure className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400 to-green-500 animate-[spin_5s_linear_infinite] hidden md:block" />
        <Image
          src="/marsian.png"
          width={500}
          height={500}
          alt="marsian"
          className={`${
            !mounted ? "md:h-[0px] md:w-[0px]" : "md:h-[500px] md:w-[500px]"
          } md:absolute bottom-0 right-0 duration-[2500ms] left-1/2 md:-translate-x-1/2`}
        />
      </div>
    </section>
  );
}
