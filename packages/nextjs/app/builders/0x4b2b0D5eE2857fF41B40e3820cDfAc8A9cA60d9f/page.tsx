import type { NextPage } from "next";
import { BellIcon, BriefcaseIcon, CodeBracketIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

const Wilman: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Hello, Batch 6!</span>
            <span className="block text-4xl font-bold">I am Wilman Vinueza</span>
          </h1>
          <p className="text-center text-lg mt-4">Blockchain Developer & Solidity Enthusiast </p>
        </div>

        <div className="px-5 py-10 bg-base-300">
          <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg mb-4">
              I am an engineer based in Ecuador. For the past few years I have been learning all things blockchain,
              ethereum and solidity.
            </p>
            <p className="text-center text-lg">
              When I am not coding, you can find me tinkering with electronics, solving puzzles, swimming or playing
              ping pong.
            </p>
          </div>
        </div>

        <div className="flex-grow w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
              <CodeBracketIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore my projects on{" "}
                <a href="https://github.com/wildanvin" target="_blank" className="link">
                  GitHub
                </a>
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
              <BriefcaseIcon className="h-8 w-8 fill-secondary" />
              <p>
                Connect with me on{" "}
                <a href="https://www.linkedin.com/in/wilman-vinueza/" target="_blank" className="link">
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
              <BellIcon className="h-8 w-8 fill-secondary" />
              <p>
                Follow me on{" "}
                <a href="https://twitter.com/wildanvin" target="_blank" className="link">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 py-10 bg-base-300">
          <h2 className="text-2xl font-bold text-center mb-4">And now a poem that I did not write:</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg">
              In the realm of chains and blocks,
              <br />
              Where data flows and never mocks,
              <br />
              Solidity, my trusty guide,
              <br />
              In Ethereum world, I do reside.
            </p>
            <p className="text-center text-lg mt-4">
              With smart contracts, I weave the thread,
              <br />
              Of decentralized dreams, ahead.
              <br />
              From hackathons to projects grants,
              <br />I code the future, hand in hand.
            </p>
            <p className="text-center text-lg mt-4">
              So here I stand, with passion bright,
              <br />
              In blockchain dawn, a guiding light.
              <br />
              Join me in this journey wide,
              <br />
              Together, we will let the code decide.
              <br />
              <FaceSmileIcon />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wilman;
