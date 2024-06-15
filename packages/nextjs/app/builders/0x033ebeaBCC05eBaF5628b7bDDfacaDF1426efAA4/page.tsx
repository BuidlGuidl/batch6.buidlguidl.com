import type { NextPage } from "next";
import { BellIcon, BriefcaseIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const myData = [
  ["Explore my projects on", "GitHub", "https://github.com/hdevelopergit", CodeBracketIcon],
  ["Connect with me on", "Linkedin", "https://www.linkedin.com/in/hugo-hernán-angarola-bb271a7a", BriefcaseIcon],
  ["Follow me on", "Twitter", "https://x.com/hugo33612165", BellIcon],
] as const;

const Hugo: NextPage = () => {
  return (
    <>
      {/* Introduction */}
      <div className="text-center px-5 max-w-xl mx-auto pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Hi Batch 6 Team!</span>
            <span className="block text-4xl font-bold">I am Hugo</span>
          </h1>
          <p className="text-center text-lg mt-4">
            I am an experienced SAP developer. Lastly playing with web programming and solidity. I am fascinated with
            ethereum world and all the potentiality that smartcontracts can provide. I expect to learn a lot with
            BuidlGuidl and be helpful for you all!
          </p>
        </div>
      </div>
      {/* Contact */}
      <div className="flex-grow w-full mt-16 px-8 py-12 bg-base-300">
        <nav className="flex justify-center items-center gap-8 flex-col sm:flex-row">
          {myData.map(([text, title, url, Icon]) => (
            <div
              key={title}
              className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl"
            >
              <Icon className="h-8 w-8 fill-secondary" />
              <p>
                {text}{" "}
                <a href={url} target="_blank" className="link">
                  {title}
                </a>
              </p>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Hugo;
