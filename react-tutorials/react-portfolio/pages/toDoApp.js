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

let toDoAppGitHubLink =
  "https://github.com/fabianszyman/onMyWayToCoding/tree/main/react-tutorials/react-to-do-app";

export default function Home() {
  let pageName = "To do list app";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black break-words md:px-24 lg:px-40 2xl:px-48 h-full pb-80">
        <Navbar headerName={pageName} />
        <div className=" bg-black px-4 grid grid-cols-1 lg:grid-cols-8 gap-6 py-20">
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
                  src={reaectToDoAppImage}
                  alt="fallback-text"
                  className="overflow-hidden rounded w-full h-auto"
                />
                <a
                  href="https://github.com/fabianszyman/onMyWayToCoding/tree/main/react-tutorials/react-to-do-app"
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
              <h2 className=" text-3xl ">{pageName}</h2>
            </div>
            <div id="textContainer" className="pt-4">
              <h3 className="pt-0">Executive summary:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Created a web-based to-list application, to learn about
                  React.js, including Local Storage and State behavior.
                </p>
              </div>
              <h3>Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  After being familiar with HTML and CSS, I wanted to understand
                  how I can use React.js, and it&apos;s core benefit like state
                  handling and parsing information into Local Storage.
                </p>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Create a browser-based to-do list application with basic
                  functionality like adding, removing, marking a to-do as done.
                  Using Local Storage to hold the information in the frontend
                  client, so there is no need to connect to a backend server.
                </p>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1. Create a React.js file.</li>
                  <li>
                    2. Build individual react components (Form, ToDo, ToDoList).
                  </li>
                  <li>
                    3. Add function, that forwards input text by Enter click
                    action.
                  </li>
                  <li>
                    4. Add checkmark-function, so that a certain to-do can be
                    defined as done.
                  </li>
                  <li>
                    5. Add trash-function, so that a certain to-do can be
                    removed from list.
                  </li>
                  <li>
                    6. Add filter option, so that the user can switch between
                    certain states.
                  </li>
                  <li>
                    7. Add logic to store information in the browsers&apos;
                    local storage.
                  </li>
                </ul>
              </div>
              <div className="text-lg pt-6">Github-Link:</div>
              <div className="font-gothamLight text-lg pt-1 pb-20">
                <a
                  href={toDoAppGitHubLink}
                  className="underline hover:underline hover:text-green-500"
                >
                  {toDoAppGitHubLink}
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
                src={reaectToDoAppImage}
                alt="fallback-text"
                className="overflow-hidden rounded w-full h-auto"
              />
              <a
                href="https://github.com/fabianszyman/onMyWayToCoding/tree/main/react-tutorials/react-to-do-app"
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
