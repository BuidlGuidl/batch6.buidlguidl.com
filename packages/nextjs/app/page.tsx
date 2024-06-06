"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInEvents, isLoading: isCheckedInEventsLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 120936875n,
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 6</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            <span>To Be Implemented</span>
          </p>
        </div>
        <div className="flex items-center flex-col flex-grow">
          {isCheckedInEventsLoading ? (
            <div className="flex justify-center items-center mt-10">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="mt-8">
              <div className="text-center mb-4">
                <span className="block text-2xl font-bold">Builders List</span>
              </div>
              <div className="overflow-x-auto shadow-lg">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th className="bg-primary text-lg">Address </th>
                      <th className="bg-primary text-lg">Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!checkedInEvents || checkedInEvents.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="text-center text-3xl">
                          Loading builders...
                        </td>
                      </tr>
                    ) : (
                      checkedInEvents
                        ?.slice()
                        .reverse()
                        .filter(event => event.args.first)
                        .map((event, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">
                                <Address size="xl" address={event.args.builder} />
                              </td>
                              <td>
                                <Link href={`/builders/${event.args.builder}`} passHref className="link">
                                  <MagnifyingGlassPlusIcon className="h-8 w-8 fill-secondary" />
                                </Link>
                              </td>
                            </tr>
                          );
                        })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
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
