import Head from "next/head";
import Image from "next/image";

import profileImage from "../public/profileImage.jpg";
import reaectToDoAppImage from "../public/reactToDoAppImage.png";
import minimalisticLandingPageImage from "../public/minimalisticLandingPage.png";
import minimalisticLPBigImage from "../public/minimalisticLP_bigImage.png";
import minimalisticLPSmallImage from "../public/minimalisticLP_smallImage.png";
import growSignUpsImage from "../public/growSignUps.png";
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
  let pageName = "Grow sign ups rates";
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
              <h2 className=" text-2xl ">{pageName}</h2>
            </div>

            <div
              id="imageContainer"
              className="pt-2 lg:pt-12 w-auto rounded lg:hidden overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={growSignUpsImage}
                  alt="fallback-text"
                  className="rounded"
                />
                <a
                  href="https://github.com/fabianszyman/onMyWayToCoding/tree/main/html-css-tutorials/minimalistic-website"
                  target="_blank"
                  rel="noreferrer"
                >
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
              <h3 className="pt-0">Executive summary:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Grew users-signup number from 900 per month by 30% MoM by
                  implementing an automated e-mail sending-process which
                  informed cold leads about real customer inquiries on our
                  platform and their business growth potential.
                </p>
              </div>
              <h3>Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  By analyzing user data from past projects, we found out, that
                  we are able to nudge not yet fully onboarded users (service
                  provider) to complete their profile information and thus
                  finish up our onboarding process by matching them with real
                  customer inquiries.
                </p>
              </div>
              <h3>Problem:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  The customer request in certain regions were very high,
                  although we had very little users (service provider) offering
                  the specific service in that area.
                </p>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  What if we use the same mechanism for not yet sign up service
                  providers, so that we are able to increase user growth in
                  those regions?
                </p>
                <p className="pb-2">
                  Send out real customer inquiries to potential users (service
                  providers), that are not yet sign up on our platform and make
                  use of collected information about the cold lead and thus
                  provide a frictionless sign-up process.
                </p>
                <p className="pb-2">
                  All mandatory information are getting prefilled, so that the
                  user only has to type in a password.
                </p>
              </div>
              <h3>Team:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1 UX designer</li>
                  <li>2 Backend engineers</li>
                  <li>2 Frontend engineers</li>
                </ul>
              </div>
              <h3>Process:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">
                    1. Find potential users (service providers), that are not
                    yet signed up with us (e.g. using{" "}
                    <a
                      href="https://mapsplatform.google.com/maps-products/#places-section"
                      className="underline hover:underline hover:text-green-500"
                    >
                      Google Places API
                    </a>
                    ).
                  </li>
                  <li>
                    2. Clean up imported data coming from API, to make sure,
                    that categorization was correct, and the cold lead is
                    providing the specific service, we are looking for.
                  </li>
                  <li>
                    3. Reduce friction of sign-up process by building an
                    individual sign-up flow for potential new users and prefill
                    input values with information we already have about the
                    lead.
                  </li>
                  <li>
                    4. Create method, that triggers Email to cold leads
                    including a specific link to separate sign-up process.
                  </li>
                  <li>
                    5. Make sure, that users are able to sign off from email
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
                  src={growSignUpsImage}
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
