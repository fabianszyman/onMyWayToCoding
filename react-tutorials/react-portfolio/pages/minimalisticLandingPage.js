import Head from "next/head";
import Image from "next/image";

import profileImage from "../public/profileImage.jpg";
import reaectToDoAppImage from "../public/reactToDoAppImage.png";
import minimalisticLandingPageImage from "../public/minimalisticLandingPage.png";
import minimalisticLPBigImage from "../public/minimalisticLP_bigImage.png";
import minimalisticLPSmallImage from "../public/minimalisticLP_smallImage.png";
import loginPage from "../public/toDoApp/loginPage.png";
import loginPageMobile from "../public/toDoApp/loginHTML.png";
import check24ProfisLogo from "../public/check24ProfisLogo.png";
import printManiaLogo from "../public/print_mania.png";
import instaBotLogo from "../public/instabot.jpeg";
import btuLogoImage from "../public/btuLogo.png";
import { MdVerified } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsThreeDots, BsFillPlayFill, BsGithub } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Navbar from "../components/Navbar";

let minimalisticLPGitHubLink =
  "https://github.com/fabianszyman/onMyWayToCoding/tree/main/html-css-tutorials/minimalistic-website";

export default function Home() {
  let pageName = "Minimalistic landing page";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black break-words md:px-24 lg:px-40 2xl:px-48 pb-64">
        <Navbar headerName={pageName} />
        <div className=" bg-black px-4 grid grid-cols-1 lg:grid-cols-8 gap-6 py-20 h-fit">
          <div id="leftContainer" className="lg:col-span-4 bg-black">
            <div id="headerContainer" className=" lg:hidden">
              <h1 className=" font-gothamLight text-sm">Personal Project</h1>
              <h2 className=" text-2xl ">{pageName}</h2>
            </div>

            <div
              id="imageContainer"
              className="pt-2 lg:pt-12 w-auto rounded lg:hidden overflow-hidden relative"
            >
              <div>
                <Image
                  src={minimalisticLPBigImage}
                  alt="fallback-text"
                  className="overflow-hidden rounded w-full h-auto"
                />
                <a
                  href="https://github.com/fabianszyman/onMyWayToCoding/tree/main/html-css-tutorials/minimalistic-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" absolute top-6 right-6 text-black bg-white rounded-full px-7 py-3 hover:scale-105 border border-gray-400 hover:border-green-500  m-2 ">
                    <div className="flex items-center gap-2">
                      <BsGithub />
                      Github
                    </div>
                  </button>
                </a>
              </div>
            </div>

            <div id="headerContainer" className="hidden lg:inline-block pb-3">
              <h1 className=" font-gothamLight text-sm">Personal Project</h1>
              <h2 className=" text-2xl ">{pageName}</h2>
            </div>
            <div id="textContainer" className="pt-2">
              <div className="text-lg">Executive summary:</div>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Built a landing page for a yoga studio using basic HTML, CSS
                  and JavaScript.
                </p>
              </div>
              <div className="text-lg pt-6">Background:</div>
              <div className="font-gothamLight text-lg pt-1">
                <p>
                  I haven&apos;t written basic HTML, CSS since quite a while
                  anymore, so I decided to catch up with it by creating a
                  responsive landing page project.
                </p>
              </div>
              <div className="text-lg pt-6">Idea:</div>
              <div className="font-gothamLight text-lg pt-1">
                <p>
                  Use a project, that can be done using HTML, CSS. In addition
                  to that, I included some JavaScript scrolling animation using
                  the library{" "}
                  <a
                    href="https://greensock.com/get-started/"
                    className="underline hover:underline hover:text-green-500"
                  >
                    GSAP
                  </a>
                  .
                </p>
              </div>
              <div className="text-lg pt-6">Process:</div>
              <div className="font-gothamLight text-lg pt-1">
                <ul>
                  <li>1. Create basic Elements in basic HTML.</li>
                  <li>2. Formatting layout with CSS.</li>
                  <li>
                    3. Adding script.js file and addEventListener function
                    using.{" "}
                    <a
                      href="https://greensock.com/get-started/"
                      className="underline hover:underline hover:text-green-500"
                    >
                      GSAP
                    </a>{" "}
                    for slide in animation for burger menu click action.
                  </li>
                  <li>4. Add further sections incl. videos.</li>
                  <li>
                    5. Add function that starts video play, when user scrolls
                    down and video element is inside her view section.
                  </li>
                </ul>
              </div>
              <div className="text-lg pt-6">Github-Link:</div>
              <div className="font-gothamLight text-lg pt-1 pb-20">
                <a
                  href={minimalisticLPGitHubLink}
                  className="underline hover:underline hover:text-green-500"
                >
                  {minimalisticLPGitHubLink}
                </a>
              </div>
            </div>
          </div>

          <div
            id="rightContainer"
            className="lg:col-span-4 lg:py-4 bg-black hidden lg:inline-block"
          >
            <div
              id="imageContainer"
              className="pt-2 lg:pt-12 h-1/3 w-auto rounded relative"
            >
              <Image
                src={minimalisticLPSmallImage}
                alt="fallback-text"
                className="overflow-hidden rounded w-full h-auto"
              />
              <a
                href="https://github.com/fabianszyman/onMyWayToCoding/tree/main/html-css-tutorials/minimalistic-website"
                target="_blank"
                rel="noreferrer"
              >
                <button className=" absolute top-16 right-6 text-black bg-white rounded-full px-7 py-3 hover:scale-105 border border-gray-400 hover:border-green-500  m-2 ">
                  <div className="flex items-center gap-2">
                    <BsGithub />
                    Github
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
