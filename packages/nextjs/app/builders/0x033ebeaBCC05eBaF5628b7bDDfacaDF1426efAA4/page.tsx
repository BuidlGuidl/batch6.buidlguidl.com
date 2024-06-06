import type { NextPage } from "next";
import { BellIcon, BriefcaseIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const Hugo: NextPage = () => {
  return (
    <>
      <div className="px-5 max-w-xl mx-auto">
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
      {/* </section> */}

      <div className="flex-grow w-full mt-16 px-8 py-12 bg-base-300">
        <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
            <CodeBracketIcon className="h-8 w-8 fill-secondary" />
            <p>
              Explore my projects on{" "}
              <a href="https://github.com/hdevelopergit" target="_blank" className="link">
                GitHub
              </a>
            </p>
          </div>
          <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
            <BriefcaseIcon className="h-8 w-8 fill-secondary" />
            <p>
              Connect with me on{" "}
              <a href="www.linkedin.com/in/hugo-hernán-angarola-bb271a7a" target="_blank" className="link">
                LinkedIn
              </a>
            </p>
          </div>
          <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
            <BellIcon className="h-8 w-8 fill-secondary" />
            <p>
              Follow me on{" "}
              <a href="https://x.com/hugo33612165" target="_blank" className="link">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hugo;
