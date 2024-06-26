import React from "react";
import { GithubIcon } from "./Icons";
import { TwitterIcon } from "./Icons";
import { NextPage } from "next";

const Dominic: NextPage = () => {
  const socials = [
    {
      icon: GithubIcon,
      url: "https://github.com/devEMEL",
    },
    {
      icon: TwitterIcon,
      url: "https://x.com/emel_dot_dym",
    },
  ];

  return (
    <>
      <div className="flex items-center flex-col flex-grow py-20">
        <div>
          <h1 className="text-[#fffff] font-bold text-2xl text-center">My name is Ajaebionu Dominic</h1>
          <p className="my-10 max-w-xl mx-auto">
            I am a seasoned developer with experience in React, Solidity, and Algorand development, I have actively
            participated in numerous projects and hackathons, demonstrating his proficiency in cutting-edge
            technologies.
            <p></p>
            One of my notable achievements include winning the Goracle Hackathon with Team Go Insure for their
            innovative insurance dApp.
          </p>
        </div>
        <div className="max-w-xl mx-auto p-4">
          {socials.map((eachSocial, index) => (
            <span key={index} className="p-4">
              <a href={eachSocial.url}>{eachSocial.icon()}</a>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dominic;
