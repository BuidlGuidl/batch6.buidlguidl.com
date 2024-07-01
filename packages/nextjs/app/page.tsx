"use client";

import { useState } from "react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ContractData } from "~~/components/assets/ContractData";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [newGreeting, setNewGreeting] = useState("");

  const { writeContractAsync: writeGreetingGreetingAsync, isPending } = useScaffoldWriteContract("Greetings");

  const handleSendGreeting = async () => {
    try {
      await writeGreetingGreetingAsync({
        functionName: "setGreeting",
        args: [newGreeting],
        value: parseEther("0.001"),
      });
    } catch (e) {
      console.error("Error setting greeting:", e);
    }
  };

  const checkedInCounter = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <>
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent flex flex-row flex-grow lg:grid lg:grid-cols-2">
        <div className="bg-orange-10 flex-1 flex flex-col p-8">
          <Link
            href={"/blockexplorer"}
            title="transaction explorer"
            className="btn absolute right-8 flex flex-row items-center gap-x-4 w-full max-w-xs bg-base-100 border-base-300 ring-1 rounded-full p-0 z-30"
          >
            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
            <span>Click here to see your transactions</span>
          </Link>

          <div className="stats px-4 py-4 dark:bg-transparent">
            <div className="stat">
              <div className="stat-title text-lg">Welcome to</div>
              <div className="stat-value">
                <span className="inline-block text-5xl font-bold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  Batch 6
                </span>
              </div>
              <div className="stat-actions">
                <div className="flex justify-start">
                  <Link
                    className="inline-flex items-center gap-x-2 bg-white border border-gray-200 font-medium text-md text-gray-600 p-3 px-3 rounded-full transition hover:border-gray-300 dark:bg-base-300 dark:border-0 dark:hover:border-neutral-600 dark:text-neutral-400"
                    href="/builders"
                  >
                    See our batch builders 😎
                    <span className="flex items-center gap-x-1">
                      <span className="flex flex-row items-center border-s border-gray-200 font-bold text-md text-blue-600 ps-3 px-3 dark:text-blue-500 dark:border-neutral-700">
                        {!checkedInCounter.isFetched ? (
                          <span className="loading loading-lg loading-ring" />
                        ) : (
                          <span>{checkedInCounter?.data?.toString() || 0} builders</span>
                        )}
                      </span>
                      <svg
                        className="hidden border-s border-gray-200 flex-shrink-0 size-4 text-blue-600 dark:text-blue-500 dark:border-neutral-700"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 mt-8 rounded-3xl bg-base-100">
            <div className="relative flex flex-row items-center font-bold text-7xl">Write a Shoutout 📣</div>
            <div className="relative flex flex-row items-center font-bold text-md p-3 bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              and we will display it for you
            </div>

            <div className="mt-2 sm:mt-6 mx-auto relative">
              <div>
                <div className="relative z-10 flex items-center space-x-3 p-3 border rounded-box shadow-lg bg-base-300 dark:border-0">
                  <div className="flex-[1_0_0%] ">
                    <label
                      htmlFor="hs-search-article-1"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      <span className="sr-only">Type your shoutout</span>
                    </label>
                    <input
                      type="text"
                      id="hs-search-article-1"
                      className="py-4 px-6 block w-full text-3xl border-transparent rounded-box outline-0 focus:border-blue-500 focus:ring-blue-500 bg-base-200"
                      placeholder="Type your shoutout"
                      onChange={e => setNewGreeting(e.target.value)}
                    />
                  </div>
                  <div className="flex-[0_0_auto] ">
                    <button
                      className={`btn btn-primary border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ${
                        isPending ? "disabled" : ""
                      }`}
                      onClick={handleSendGreeting}
                    >
                      {isPending ? <span className="loading loading-spinner"></span> : <LucideArrowRight />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="font-medium text-md my-4">Fee: 0.001 ETH + Gas</div>

              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <ContractData />

        <div className="hidden w-full p-6">
          <h1 className="text-left">
            <span className="block text-2xl mb-2">Welcome to</span>
            {/* <span className="block text-5xl font-bold">Batch 6</span> */}
            <span className="inline-block text-6xl font-bold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Batch 6
            </span>
          </h1>
          <p className="text-left text-lg">Get started by taking a look at your batch GitHub repository.</p>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            {!checkedInCounter.isFetched ? (
              <span className="loading" />
            ) : (
              <span>{checkedInCounter?.data?.toString() || 0}</span>
            )}
          </p>
        </div>

        <div className="hidden px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 6</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            {!checkedInCounter.isFetched ? (
              <span className="loading" />
            ) : (
              <span>{checkedInCounter?.data?.toString() || 0}</span>
            )}
          </p>
        </div>

        <div className="hidden flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
