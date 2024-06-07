import React from "react";
import Link from "next/link";

const Mayowa = () => {
  const appsList = [
    {
      name: "Iris-Identity",
      description: "An ZK dApp for KYC verification",
      url: "https://zk-iris.vercel.app",
    },
    {
      name: "Peeps",
      description: "A socialFi dApp - integrating the best of both social media and DeFi functionality",
      url: "https://peeps-dev.vercel.app",
    },
    {
      name: "Wastewise",
      description: "An EcoFriendly dApp that incentivize users for plastic waste disposal",
      url: "https://wastewise.vercel.app",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-semibold">Hi, I am</div>
          <h1 className="text-7xl lg:text-8xl font-black mb-4">Mayowa Obisesan</h1>
          <div className="text-lg lg:text-2xl my-6">
            Frontend Developer | Blockchain Developer | Open source contributor
          </div>
          <div className="text-md lg:text-xl w-full lg:max-w-xl mx-auto p-2 lg:p-4">
            I love to learn and I love to build with what I learn.
            <br />
            I am actively learning about ZK proofs and Rust lang.
            <br />I am currently dedicated to open source contributions.
          </div>
          <div className="text-md lg:text-xl w-full lg:max-w-3xl mx-auto mt-4">
            <div className="py-4">Some of my recent builds:</div>
            <ol className="px-6 list-decimal text-left space-y-2 mx-auto">
              {appsList.map((eachApp, index) => (
                <li key={index}>
                  <Link href={eachApp.url} className="underline font-medium">
                    {eachApp.name}
                  </Link>
                  <div>{eachApp.description}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <footer className="mt-16 lg:mt-0 lg:absolute lg:bottom-4 lg:left-0 lg:right-0 text-center text-sm mx-auto">
          <div className="font-medium text-lg">Connect with me 🙂</div>
          <section className="flex flex-row justify-center items-center gap-x-2 py-2">
            <div className="p-1">
              <a
                className="inline-flex flex-shrink-0 justify-center items-center gap-x-2 font-medium rounded-full bg-transparent shadow-md text-gray-800 hover:bg-neutral-100/30 dark:text-neutral-200 dark:hover:bg-neutral-50/10"
                href="https://twitter.com/blessed_mayowa"
                target="_blank"
              >
                <span className="flex flex-col justify-center items-center size-12">
                  <svg
                    className="flex-shrink-0 size-3.5"
                    width="48"
                    height="50"
                    viewBox="0 0 48 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="hidden lg:block pr-4">@blessed_mayowa</span>
              </a>
            </div>
            <div className="p-1">
              <a
                className="inline-flex flex-shrink-0 justify-center items-center gap-x-2 font-medium rounded-full bg-transparent shadow-md text-gray-800 hover:bg-neutral-100/30 dark:text-neutral-200 dark:hover:bg-neutral-50/10"
                href="https://github.com/MayowaObisesan"
                target="_blank"
              >
                <span className="flex flex-col justify-center items-center size-12">
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </span>
                <span className="hidden lg:block pr-4">@MayowaObisesan</span>
              </a>
            </div>
            <div className="p-1">
              <a
                className="inline-flex flex-shrink-0 justify-center items-center gap-x-2 font-medium rounded-full bg-transparent shadow-md text-gray-800 hover:bg-neutral-100/30 dark:text-neutral-200 dark:hover:bg-neutral-50/10"
                href="https://linkedin.com/in/mayowa-obisesan"
                target="_blank"
              >
                <span className="flex flex-col justify-center items-center size-12">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>linkedin</title>{" "}
                      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="hidden lg:block pr-4">@mayowa-obisesan</span>
              </a>
            </div>
            <div className="p-1">
              <a
                className="inline-flex flex-shrink-0 justify-center items-center gap-x-2 font-medium rounded-full bg-transparent shadow-md text-gray-800 hover:bg-neutral-100/30 dark:text-neutral-200 dark:hover:bg-neutral-50/10"
                href="https://t.me/BlessedMayowa"
                target="_blank"
              >
                <span className="flex flex-col justify-center items-center size-12">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2629 9.3444 8.93015 10.3492 5.43191 11.8733C4.86385 12.0992 4.56628 12.3202 4.53919 12.5363C4.4934 12.9015 4.95073 13.0453 5.57349 13.2411C5.6582 13.2678 5.74598 13.2954 5.83596 13.3246C6.44866 13.5238 7.27284 13.7568 7.70131 13.766C8.08996 13.7744 8.52375 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.1391 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.3761 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5034 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78393 14.6448 10.8036 15.3168C11.2937 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2078 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8308 18.0694 15.3826 18.0186C15.7033 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.16098C17.5781 7.99473 17.5582 7.78197 17.5422 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0057 7.22234 16.9064 7.22408C16.455 7.23204 15.7626 7.47282 12.43 8.85893Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="hidden lg:block pr-4">@BlessedMayowa</span>
              </a>
            </div>
            <div className="p-1">
              <div className="inline-flex flex-shrink-0 justify-center items-center gap-x-2 font-medium rounded-full bg-transparent shadow-md text-gray-800 hover:bg-neutral-100/30 dark:text-neutral-200 dark:hover:bg-neutral-50/10">
                <span className="flex flex-col justify-center items-center size-12">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00122C15.4007 2.9956 15.3695 3.00965 15.3534 3.03777C15.1424 3.40697 14.9087 3.88862 14.7451 4.26719C12.9004 3.99545 11.0652 3.99545 9.25832 4.26719C9.09465 3.8802 8.85248 3.40697 8.64057 3.03777C8.62449 3.01059 8.59328 2.99654 8.56205 3.00122C6.84791 3.29172 5.20756 3.80054 3.67693 4.4921C3.66368 4.49772 3.65233 4.5071 3.64479 4.51928C0.533392 9.09311 -0.31895 13.5545 0.0991801 17.9606C0.101072 17.9822 0.11337 18.0028 0.130398 18.0159C2.18321 19.4993 4.17171 20.3998 6.12328 20.9967C6.15451 21.0061 6.18761 20.9949 6.20748 20.9695C6.66913 20.3492 7.08064 19.6952 7.43348 19.0073C7.4543 18.967 7.43442 18.9192 7.39186 18.9033C6.73913 18.6597 6.1176 18.3626 5.51973 18.0253C5.47244 17.9981 5.46865 17.9316 5.51216 17.8997C5.63797 17.8069 5.76382 17.7104 5.88396 17.613C5.90569 17.5952 5.93598 17.5914 5.96153 17.6026C9.88928 19.3672 14.1415 19.3672 18.023 17.6026C18.0485 17.5905 18.0788 17.5942 18.1015 17.612C18.2216 17.7095 18.3475 17.8069 18.4742 17.8997C18.5177 17.9316 18.5149 17.9981 18.4676 18.0253C17.8697 18.3692 17.2482 18.6597 16.5945 18.9024C16.552 18.9183 16.533 18.967 16.5538 19.0073C16.9143 19.6942 17.3258 20.3483 17.7789 20.9686C17.7978 20.9949 17.8319 21.0061 17.8631 20.9967C19.8241 20.3998 21.8126 19.4993 23.8654 18.0159C23.8834 18.0028 23.8948 17.9831 23.8967 17.9616C24.3971 12.8676 23.0585 8.4428 20.3482 4.52021C20.3416 4.5071 20.3303 4.49772 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.2095 5.86313 12.8976C5.86313 11.5857 6.8186 10.5175 8.02002 10.5175C9.23087 10.5175 10.1958 11.5951 10.1769 12.8976C10.1769 14.2095 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.2095 13.8379 12.8976C13.8379 11.5857 14.7933 10.5175 15.9947 10.5175C17.2056 10.5175 18.1705 11.5951 18.1516 12.8976C18.1516 14.2095 17.2056 15.2778 15.9947 15.2778Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="hidden lg:block pr-4">@Blessed07</span>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </section>
  );
};

export default Mayowa;
