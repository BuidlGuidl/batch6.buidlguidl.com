"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Builders: NextPage = () => {
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
            <span className="block text-4xl font-bold">Get to know Batch 6 builders!!</span>
          </h1>
        </div>
        <div className="flex items-center flex-col flex-grow">
          {isCheckedInEventsLoading ? (
            <div className="flex justify-center items-center mt-10">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="mt-8">
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
                        .slice()
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
      </div>
    </>
  );
};

export default Builders;
