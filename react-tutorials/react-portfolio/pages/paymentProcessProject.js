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
  let pageName = "Payment process (Stripe)";
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
                  src={minimalisticLPBigImage}
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
                  Adding 3x the flexibility to future feature ideas by planning
                  new IT-infrastructure, rebuilding 1st-level features and
                  defining backbone services and their relevant API-endpoints,
                  that future forks will be using as shared functionality.
                  Delivering critical must have features on time by identifying
                  blocking topics and coordinating 4 different IT-teams
                  (1.Backend, 2.Frontend [iOS] 3.Frontend [Android] 4.Frontend
                  [React]).
                </p>
              </div>
              <h3>Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  During my first 3 year within CHECK24 Profis we had one
                  IT-system, that included features for every category of
                  services. Every new feature requirement had to be quite broad
                </p>
                <ul className="pb-2">
                  <li className="pt-0">a) relevant for each service</li>
                  <li>b) fitting - for each service</li>
                </ul>
                <p>
                  When talking to service provider from different categories, we
                  frequently came to the conclusion, that critical feature
                  requests for service provider A were not solving issues for
                  service provider B.
                </p>
              </div>
              <h3>Problem:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Customers needs are different between categories, so that the
                  one IT system fits all approach was limiting new product
                  ideas. Concrete example: A feature concept that would help
                  moving companies to predict a better price was not beneficial
                  to a personal trainer or english teacher, since their pricing
                  structure is way simpler and usually consists of a hour-based
                  price. Thus important feature requests:
                </p>
                <ul>
                  <li className="pt-0">a) were getting deprioritized </li>
                  <li>b) not able to bee implemented without workarounds</li>
                </ul>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Divide one overall IT system into three independent IT-silos
                  (Mover, Craftsman, Lessons and Events), which have a very thin
                  common ground using backbone services (Email, Account
                  handling, Push Notifications, Payment Processing).
                </p>
                <p>
                  Each page inside alle application needs to be identified as
                  1st level (Portal-level - information that are collected from
                  different forks, getting aggregated and displayed inside one
                  1st-level page) or 2nd level (Fork-level - information e.g. a
                  mover-pricelist, that are inside mover-fork and another
                  personal trainer pricelist, that lays inside a lesson and
                  events-fork. Fork IT-systems are completely decentralized and
                  thus able to implement individual features.
                </p>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  Building 1st-level Backoffice features from scratch (Define
                  API endpoint structure + Design Frontend layouts)
                </p>
                <p>
                  Building 1st-level Native App features - iOS / Android /
                  Huawei (Define API endpoint structure + Design Frontend
                  layouts)
                </p>
              </div>
              <h3>Team:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1 UX designer</li>
                  <li>3 Backend engineers</li>
                  <li>4 iOS engineers</li>
                  <li>6 Android engineers</li>
                </ul>
              </div>
              <h3>Process:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">
                    1. Create strategic roadmap including high level topics.
                  </li>
                  <li>
                    2. Define common 1st-level features, that need to be used by
                    every fork project.
                  </li>
                  <li>3. Scope down 1st-level must have features.</li>
                  <li>4. Mark dependencies towards other teams' topics.</li>
                  <li>
                    5. Discuss with other team leads to Identify critical
                    blocker.
                  </li>
                  <li>6. Split down must have features into smaller epics.</li>
                  <li>
                    7. Identify individual topics, that can be parallelized.
                  </li>
                  <li>
                    8. Estimate time for small topics including including
                    IT-teams.
                  </li>
                  <li>9. Update roadmap topics WoW with current status</li>
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
          </div>
        </div>
      </main>
    </div>
  );
}
