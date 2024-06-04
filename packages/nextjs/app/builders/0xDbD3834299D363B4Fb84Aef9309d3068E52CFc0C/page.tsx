import Link from "next/link";
import type { NextPage } from "next";
import {
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

const HoangVu: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Hello everyone,...</span>
            <span className="block text-4xl font-bold mb-2">My name is Hoang Vu</span>
            <span className="block text-2xl font-bold">And you can call me J!</span>
          </h1>
        </div>

        <div className="flex-grow w-full mt-4 px-8 py-3">
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
              <div className="px-5 py-8 bg-base-300 rounded-xl">
                <div className="max-w-xl mx-auto">
                  <p className="text-center text-lg mb-4">
                    I&apos;m a blockchain enthusiast. I love spending time learning and building web3 projects.
                  </p>
                  <p className="text-center text-lg mb-4">
                    I&apos;m really happy to be here, and I hope that we will have a memorable time together!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
              <div className="flex flex-col py-6 text-center items-center max-w-xs rounded-3xl">
                <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl mb-6">
                  <AcademicCapIcon className="h-8 w-8 fill-secondary" />
                  <p>
                    Explore my projects on{" "}
                    <Link href="https://github.com/JeFlame" passHref className="link" target="_blank">
                      GitHub
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
                  <EnvelopeIcon className="h-8 w-8 fill-secondary" />
                  <p>
                    Contact me via this{" "}
                    <Link href="mailto:hoangvu130301@gmail.com" passHref className="link" target="_blank">
                      email
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col py-6 text-center items-center max-w-xs rounded-3xl">
                <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl mb-6">
                  <IdentificationIcon className="h-8 w-8 fill-secondary" />
                  <p>
                    View my profile on{" "}
                    <Link
                      href="https://www.linkedin.com/in/hoang-vu-847288202/"
                      passHref
                      className="link"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col bg-base-100 px-6 py-6 text-center items-center max-w-xs rounded-3xl">
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8 fill-secondary" />
                  <p>
                    Follow me on{" "}
                    <Link href="https://twitter.com/iaawyalytcl" passHref className="link" target="_blank">
                      Twitter
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoangVu;
