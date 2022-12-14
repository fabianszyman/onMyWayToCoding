import Head from "next/head";
import Image from "next/image";

import profileImage from "../public/profileImage.jpg";
import reaectToDoAppImage from "../public/reactToDoAppImage.png";
import minimalisticLandingPageImage from "../public/minimalisticLandingPage.png";
import minimalisticLPBigImage from "../public/minimalisticLP_bigImage.png";
import minimalisticLPSmallImage from "../public/minimalisticLP_smallImage.png";
import nativeMessengerImage from "../public/native_Messenger.png";
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

export default function Home() {
  let pageName = "Native messengers (iOS & Android)";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black h-full break-words md:px-24 lg:px-40 2xl:px-48 ">
        <Navbar headerName={pageName} />
        <div className="float-none bg-black px-4 grid grid-cols-1 lg:grid-cols-8 gap-6 py-20">
          <div id="leftContainer" className="lg:col-span-4 bg-black float-left">
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
                  src={nativeMessengerImage}
                  alt="fallback-text"
                  className="rounded"
                />
              </div>
            </div>

            <div id="headerContainer" className="hidden lg:inline-block pb-3">
              <h1 className=" font-gothamLight text-sm">
                Work related project
              </h1>
              <h2 className=" text-3xl ">{pageName}</h2>
            </div>
            <div id="textContainer" className="pt-4">
              <h3 className="pt-0">Executive summary:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Improved the usability by 4x by replacing integrated Web Views
                  with 4 different native chat messengers including improved
                  layouts and haptic features (e.g. add appointment, swipe to
                  see message details).
                </p>
              </div>
              <h3>Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  When we went live with our fork project, we were forced to
                  disable all our native messenger.
                </p>
              </div>
              <h3>Problem:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  One user (service provider) can have chats within different
                  forks. How can we make sure that future forks are able to have
                  a native messenger integration and make sure that the UX is
                  similar.
                </p>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Instead of building the native messenger features 3 times
                  within different forks, the approach was to create an overall
                  Native Messenger project, that has all possible message types
                  integrated and can be used easily bundled into their Fork.
                </p>
              </div>

              <h3>Team:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1 UX designer</li>
                  <li>1 Backend engineers</li>
                  <li>4 iOS engineers</li>
                  <li>6 Android engineers</li>
                </ul>
              </div>
              <h3>Process:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">
                    1. Identify all message types and improve layouts.
                  </li>
                  <li>
                    2. Define API specs together with Backend engineers from
                    different forks.
                  </li>
                  <li>
                    3. Build an independent Demo App, which can be used to QA
                    the native messenger tickets without the need of creating a
                    dependency towards any for.
                  </li>
                  <li>4. Build and QA Backend endpoints.</li>
                  <li>5. Build and QA Frontend components.</li>
                  <li>6. Split down must have features into smaller epics.</li>
                  <li>7.Coordinate integration into first fork project.</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="rightContainer"
            className="lg:col-span-4 lg:py-4 bg-black hidden lg:inline-block float-right w-128"
          >
            <div
              id="imageContainer"
              className="pt-2 lg:pt-12 h-1/3 w-auto rounded "
            >
              <div className="relative">
                <Image
                  src={nativeMessengerImage}
                  alt="fallback-text"
                  className="overflow-hidden rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
