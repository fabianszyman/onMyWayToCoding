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
  let pageName = "To do app";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black h-screen break-words md:px-24 lg:px-40 2xl:px-48 ">
        <Navbar headerName={pageName} />
        <div className=" bg-black px-4 grid grid-cols-1 lg:grid-cols-8 gap-6 py-20">
          <div id="leftContainer" className="lg:col-span-4 bg-black">
            <div id="headerContainer" className=" lg:hidden">
              <h1 className=" font-gothamLight text-sm">
                Work related project
              </h1>
              <h2 className=" text-2xl ">{pageName}</h2>
            </div>

            <div
              id="imageContainer"
              className="pt-2 lg:pt-12 w-auto rounded lg:hidden overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={minimalisticLPBigImage}
                  alt="fallback-text"
                  className="rounded"
                />
                <a href={toDoAppGitHubLink} target="_blank" rel="noreferrer">
                  <button className=" absolute top-4 right-4 text-black bg-white rounded-full px-7 py-3 hover:scale-105 border border-gray-400 hover:border-green-500  m-2 ">
                    <div className="flex items-center gap-2">
                      <BsGithub />
                      Github
                    </div>
                  </button>
                </a>
              </div>
            </div>

            <div id="headerContainer" className="hidden lg:inline-block pb-3">
              <h1 className=" font-gothamLight text-sm">
                Work related project
              </h1>
              <h2 className=" text-3xl ">{pageName}</h2>
            </div>
            <div id="textContainer" className="pt-4">
              <h3 className="pt-0">Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Nachdem ich nun einige erste Erfahrungen mit HTML und CSS
                  gesammelt hatte, wollte ich den nächsten Schritt machen und
                  das Frontend Framework React.js besser verstehen. Ich hatte
                  bereits einige Berührungspunkte mit React.js bei CHECK24
                  Profis, als ich Projekte umgesetzt habe und wir die das
                  Framework im Frontend eingebunden haben.
                </p>
              </div>
              <h3>Goals:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Ich wollte neben dem grundlegendem React.js aufsetzen einer
                  React-App und den dazugehörigen Bau der Komponenten auch noch
                  die Datenspeicherung bestimmte states meiner To Do object im
                  LocalStorage des Users zu hinterlegen. Sodass ein Nutzer der
                  bereits Einträge vorgenommen hat und auf zurück auf die Seite
                  kommt, seine getätigten Einträge wieder findet.
                </p>
              </div>
              <h3>Process:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1. Erstellen React.js Datei</li>
                  <li>
                    2. Bau der einzelnen components (Form, ToDo, ToDoList)
                  </li>
                  <li>
                    3. Input Text State in die To Dos component weitergeben, bei
                    Klick auf Enter
                  </li>
                  <li>4. Checkmark Funktionalität hinzufügen</li>
                  <li>5. Trash Icon Funktionalität hinzufügen</li>
                  <li>6. Filter Funktion einbauen</li>
                  <li>7. LocalStorage Speicher Funktion einbauen</li>
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
              className="pt-2 lg:pt-12 h-1/3 w-auto rounded "
            >
              <div className="relative">
                <Image
                  src={minimalisticLPSmallImage}
                  alt="fallback-text"
                  className="overflow-hidden rounded"
                />
                <a href={toDoAppGitHubLink} target="_blank" rel="noreferrer">
                  <button className=" absolute top-4 right-4 text-black bg-white rounded-full px-7 py-3 hover:scale-105 border border-gray-400 hover:border-green-500  m-2 ">
                    <div className="flex items-center gap-2">
                      <BsGithub />
                      Github
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
