import Head from "next/head";
import Image from "next/image";
import profileImage from "../public/profileImage.jpg";
import reaectToDoAppImage from "../public/reactToDoAppImage.png";
import minimalisticLandingPageImage from "../public/minimalisticLandingPage.png";
import check24ProfisLogo from "../public/check24ProfisLogo.png";
import printManiaLogo from "../public/print_mania.png";
import instaBotLogo from "../public/instabot.jpeg";
import googleLogo from "../public/googleLogo.png";
import btuLogoImage from "../public/btuLogo.png";
import ibmIxLogo from "../public/ibmIx.png";
import auto1Logo from "../public/auto1GroupLogo.jpeg";
import bvLogo from "../public/bvLogo.jpeg";
import csufLogo from "../public/csufLogo.png";
import rmitLogo from "../public/rmitLogo.png";
import courseraLogo from "../public/courseraLogo.jpeg";
import { MdVerified } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Navbar from "../components/Navbar.js";
import BigListItem from "../components/BigListItem";

let seniorProjectPage = "/seniorProjects";
let professionalProjectPage = "/professionalProjects";
let printManiaInstagram = "https://www.instagram.com/sneaker_mania_berlin/";
let juniorProjectPage = "/juniorProjects";
let bvbPage = "https://www.berliner-volksbank.de/homepage.html";
let ibmiXPage = "https://ibmix.de/en/";
let btuPage = "https://www.b-tu.de/";
let auto1GroupPage = "https://www.auto1-group.com/";
let check24excellenceURL =
  "https://jobs.check24.de/de/blog/check24-excellence-programm/";
let googleItAutomationWithPython =
  "https://www.coursera.org/account/accomplishments/specialization/certificate/RDCB66AKZR6E";
let crashCourseOnPython =
  "https://www.coursera.org/account/accomplishments/certificate/Q7JSQHAYXBLD";
let frontendWebUIBootstrap =
  "https://www.coursera.org/account/accomplishments/certificate/4AXBCMRR3HXH";
let usingPythonToInteractWithTheOperatingSystem =
  "https://www.coursera.org/account/accomplishments/certificate/B86VSHH48CUE";
let introductionToGitAndGitHub =
  "https://www.coursera.org/account/accomplishments/certificate/Y73BAXWKKXHW";
let troubleshootingAndDebuggingTechniques =
  "https://www.coursera.org/account/accomplishments/certificate/KD826V2FYTTT";
let configurationManagementAndTheCloud =
  "https://www.coursera.org/account/accomplishments/certificate/8E2587W6GASA";
let automatingRealWorldTasksWithPython =
  "https://www.coursera.org/account/accomplishments/certificate/P74P725PVAWL";
let rmitPage = "https://www.rmit.edu.vn/";
let csufPage = "http://www.fullerton.edu/";

export default function Home() {
  let pageName = "Certifications & Awards";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold h-screen md:px-24 lg:px-48 3xl:px-128 bg-black  ">
        <Navbar headerName={pageName} />

        {/*SECTION: Certificates*/}
        <div className="w-screen pt-14">
          <div id="certificationsHistorySection" className="bg-black">
            <h2 className="text-3xls p-4 text-white">Awards</h2>
            <div id="myPortfolioItems" className=" font-gothamBold text-xs ">
              <BigListItem
                src={check24ProfisLogo}
                title="Excellence Programm"
                subline="CHECK24 Top 10% Performance"
                durationText="2023"
                href={check24excellenceURL}
              />
              <BigListItem
                src={check24ProfisLogo}
                title="Excellence Programm"
                subline="CHECK24 Top 10% Performance"
                durationText="2019"
                href={check24excellenceURL}
              />
            </div>

            <h2 className="text-3xls p-4 text-white ">Certifications</h2>
            <div
              id="myPortfolioItems"
              className=" font-gothamBold text-xs pb-20"
            >
              <BigListItem
                src={courseraLogo}
                title="Front-End Web UI Frameworks and Tools: Bootstrap 4"
                subline="Coursera"
                durationText="Issued Januar 2022"
                href={frontendWebUIBootstrap}
              />

              <BigListItem
                src={googleLogo}
                title="Google IT Automation with Python"
                subline="Google"
                durationText="Issued October 2021"
                href={googleItAutomationWithPython}
              />

              <BigListItem
                src={googleLogo}
                title="Automating Real-World Tasks with Python"
                subline="Google"
                durationText="Issued October 2021"
                href={automatingRealWorldTasksWithPython}
              />

              <BigListItem
                src={googleLogo}
                title="Troubleshooting and Debugging Techniques"
                subline="Google"
                durationText="Issued September 2021"
                href={troubleshootingAndDebuggingTechniques}
              />

              <BigListItem
                src={googleLogo}
                title="Introduction to Git and GitHub"
                subline="Google"
                durationText="Issued August 2021"
                href={introductionToGitAndGitHub}
              />

              <BigListItem
                src={googleLogo}
                title="Using Python to Interact with the Operating System"
                subline="Google"
                durationText="Issued June 2021"
                href={usingPythonToInteractWithTheOperatingSystem}
              />

              <BigListItem
                src={googleLogo}
                title="Crash Course on Python"
                subline="Coursera"
                durationText="Issued May 2021"
                href={crashCourseOnPython}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
