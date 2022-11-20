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

export default function Home() {
  let pageName = "Grow user sign ups";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black h-full break-words md:px-24 lg:px-40 2xl:px-48 ">
        <Navbar headerName={pageName} />
        <div className=" bg-black px-4 grid grid-cols-1 lg:grid-cols-8 gap-6 py-20">
          <div id="leftContainer" className="lg:col-span-4 bg-black">
            <div id="headerContainer" className=" lg:hidden">
              <h1 className=" font-gothamLight text-sm">
                Work related project
              </h1>
              <h2 className=" text-2xl ">Grow user sign ups</h2>
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
              </div>
            </div>

            <div id="headerContainer" className="hidden lg:inline-block pb-3">
              <h1 className=" font-gothamLight text-sm">Personal Project</h1>
              <h2 className=" text-2xl ">{pageName}</h2>
            </div>
            <div id="textContainer" className="pt-4">
              <div className="text-lg">Executive Summary: </div>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Grew users-signup number from 30 per day by 30% MoM by
                  implementing an automated e-mail sending-process which
                  informed cold leads about real customer inquiries on our
                  platform and their business growth potential.
                </p>
              </div>
              <div className="text-lg pt-6">Background:</div>
              <div className="font-gothamLight text-lg pt-1">
                By analyzing user data from past projects, we found out, that we
                are able to nudge our not yet onboarded users (service provider)
                to complete their profile information and thus finish our
                onboarding process by matching them with real customer
                inquiries.
              </div>
              <div className="text-lg pt-6">Problem</div>
              <div className="font-gothamLight text-lg pt-1">
                The customer request in certain regions were very high although
                we had very little users (service provider) offering the
                specific service in that area.
              </div>
              <div className="text-lg pt-6">Question:</div>
              <div className="font-gothamLight text-lg pt-1">
                What if we use the same mechanism for not yet sign up service
                providers, so that we are able to increase user growth?
              </div>
              <div className="text-lg pt-6">Idea:</div>
              <div className="font-gothamLight text-lg pt-1">
                <p>
                  Send out real customer inquiries to potential users (service
                  providers), that are not yet sign up on our platform and make
                  use the information, that we have collected already to build a
                  very slim sign-up process.
                </p>
                <p className="pt-2">
                  All mandatory information were prefilled and the user only had
                  to define a password.
                </p>
              </div>
              <div className="text-lg pt-6">Idea:</div>
              <div className="font-gothamLight text-lg pt-1">
                <ul>
                  <li>
                    1. Find potential users (service providers), that are not
                    yet signed up with us. (e.g. using Google Places API)
                  </li>
                  <li>
                    2. Clean Up imported data coming from API, to make sure,
                    that categorization was correct and user is providing the
                    service.
                  </li>
                  <li>
                    3. Reduce friction of sign-up process as much as possible.
                    We built an extra sign-up flow for those specific users.
                  </li>
                  <li>
                    4.Create method, that triggers Email to users including a
                    specific link to separate sign-up process.
                  </li>
                  <li>
                    5.Make sure, that users are able to sign off from email
                    easily.
                  </li>
                </ul>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
