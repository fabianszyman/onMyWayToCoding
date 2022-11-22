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
  let pageName = "Backoffice project";
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
                  Reduced business spent per year by 25k EUR by replacing our
                  Salesforce integration with custom build back office features
                  (e.g. call logs, e-mail inbox, ticketing system).
                </p>
              </div>
              <h3>Background:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  When CHECH24 Profis started Salesforce was integrated within
                  our internally built Backoffice application. While this was
                  maybe useful for the beginning growth phase of the company, it
                  was causing trouble when our product was getting more complex.
                </p>
              </div>
              <h3>Problem:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  We constantly got the feedback from our Customer Support Team,
                  that
                </p>
                <ul>
                  <li className="pt-0">
                    a) our customer data in our internal Backoffice application
                    is not consistent with the the Salesforce data.
                  </li>
                  <li>
                    b) asynchronous data were triggering different function that
                    e.g. send out Email accidentally.
                  </li>
                </ul>
              </div>
              <h3>Idea:</h3>
              <div className="font-gothamLight text-lg pt-1">
                <p className="pb-2">
                  What if we are able to get rid of Salesforce completely, but
                  implemented the functionality, which was used inside
                  Salesforce.
                </p>
              </div>
              <h3>Team:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">1 UX designer</li>
                  <li>2 Backend engineers</li>
                  <li>2 Frontend engineers (React)</li>
                  <li>1 Assistent product manager</li>
                </ul>
              </div>
              <h3>Process:</h3>
              <div className="font-gothamLight text-lg pt-0">
                <ul>
                  <li className="pt-1">
                    1. 1.collecting qualitative data by talking to our Customer
                    Service team.
                  </li>
                  <li>
                    2. Unterstanding feature usage while observing customer
                    support employees as they do their work.
                  </li>
                  <li>3. Identify all critical features.</li>
                  <li>
                    4. Identify all critical data, which needs to be migrated.
                  </li>
                  <li>
                    5. Building Call Log feature for Inbound and Outbound Calls.
                  </li>
                  <li>
                    6. Building Inbound Email process that links a contact
                    activity to relevant consumer or service provider account
                    automatically.
                  </li>
                  <li>
                    7. Building an Outbound Email sending tool, that is able to
                    use email templates and creates an contact activity, which
                    is can be linked a relative inbound Contact activity (call
                    or email).
                  </li>
                  <li>
                    8. Building a ticketing system, that can be linked to
                    multiple contact activities.
                  </li>
                  <li>
                    9. Adding a personal reminder function to the ticketing
                    system by using a basic three column Kanban (To Do, In
                    Progress, Done) approach, where I can see all the to dos
                    (tickets) I need to work on today and set a reminder for the
                    future, that moves the ticket in another column.
                  </li>
                  <li>
                    10. Building a Note taking Feature to a user account, so
                    that internal information can be shared between customer
                    services and everyone is updated about critical insights to
                    a person.
                  </li>
                  <li>
                    11. Building a migration Job that imports all necessary data
                    from Salesforce and maps it with all relevant new objects we
                    defined inside our new Backoffice Features.
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
