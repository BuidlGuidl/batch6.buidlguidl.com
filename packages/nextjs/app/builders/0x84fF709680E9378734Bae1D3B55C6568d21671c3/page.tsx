//import Link from "next/link";
import { BellIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";


const KhayeBeth: NextPage = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Hi there!, I'm Osueni Omokhaye Elizabeth</h1>
            <p className="text-lg mb-4">
                I'm a passionate web3 developer and a blockchain enthusiast. I love exploring any technology that can help build innovative solutions. Asides technologies I read a lot, yayy!!
            </p>
            <div className="flex items-center mb-4">
                <span className="mr-2">Find me on:</span>
                <a href="https://x.com/OsueniElizabeth" target="_blank" rel="noopener noreferrer" className="flex items-center mr-2">
                    <BellIcon className="h-5 w-5 mr-1" />
                    X
                </a>
                <a href="https://www.linkedin.com/in/osueni-elizabeth-ba236719a/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <BriefcaseIcon className="h-5 w-5 mr-1" />
                    LinkedIn
                </a>
            </div>
            <p className="text-lg mb-4">
                I'm excited to be part of this project and can't wait to see what amazing things we can accomplish together as we advance in the world of web3!
            </p>
            <p className="text-lg mb-4">Glad to be in batch 6 of BG</p>
        </div>
    );
};
export default KhayeBeth;
