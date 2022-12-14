import Head from "next/head";
import Image from "next/image";
import profileImage from "../public/profileImage.jpg";
import reaectToDoAppImage from "../public/reactToDoAppImage.png";
import minimalisticLandingPageImage from "../public/minimalisticLandingPage.png";
import check24ProfisLogo from "../public/check24ProfisLogo.png";
import printManiaLogo from "../public/print_mania.png";
import instaBotLogo from "../public/instabot.jpeg";
import btuLogoImage from "../public/btuLogo.png";
import ibmIxLogo from "../public/ibmIx.png";
import auto1Logo from "../public/auto1GroupLogo.jpeg";
import bvLogo from "../public/bvLogo.jpeg";
import { MdVerified } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BigListItem from "../components/BigListItem";

let growSignUpsRatesProjectPage = "/growSignUpsRatesProject";
let documentUploaderProjectPage = "/documentUploaderProject";
let happinessGarantieProjectPage = "/happinessGarantieProject";
let invoiceProjectPage = "/invoiceProject";
let backofficeProjectPage = "/backofficeProject";

export default function Home() {
  let pageName = "Work related projects (Professional PM)";
  return (
    <div>
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className="text-white font-gothamBold bg-black h-screen md:px-24 lg:px-48 3xl:px-128 ">
        <Navbar headerName={pageName} />
        {/*SECTION: Employment History*/}
        <div className="w-screen pt-14">
          <div id="employmentHistorySection" className="bg-black">
            <h2 className="text-3xls p-4 text-white">
              Professional Product Manager (CHECK24 Profis)
            </h2>
            <div id="myPortfolioItems" className=" font-gothamBold text-xs">
              <BigListItem
                src={check24ProfisLogo}
                title="Backoffice project"
                subline="CHECK24 Profis"
                durationText="2021"
                href={backofficeProjectPage}
              />

              <BigListItem
                src={check24ProfisLogo}
                title="Grow sign ups rates"
                subline="CHECK24 Profis"
                durationText="2020"
                href={growSignUpsRatesProjectPage}
              />
              {/*
              <BigListItem
                src={check24ProfisLogo}
                title="Document Uploader"
                subline="CHECK24 Profis"
                durationText="January 2022 - Present"
                href={documentUploaderProjectPage}
              />
             

              <BigListItem
                src={check24ProfisLogo}
                title="Invoice feature - TBD"
                subline="CHECK24 Profis"
                durationText="2020"
                href={invoiceProjectPage}                
              />
               */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
