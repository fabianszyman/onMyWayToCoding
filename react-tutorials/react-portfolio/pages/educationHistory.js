import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../public/profileImage.jpg';
import reaectToDoAppImage from '../public/reactToDoAppImage.png'
import minimalisticLandingPageImage from '../public/minimalisticLandingPage.png'
import check24ProfisLogo from '../public/check24ProfisLogo.png'
import printManiaLogo from '../public/print_mania.png'
import instaBotLogo from '../public/instabot.jpeg'
import btuLogoImage from '../public/btuLogo.png'
import ibmIxLogo from '../public/ibmIx.png'
import auto1Logo from '../public/auto1GroupLogo.jpeg'
import bvLogo from '../public/bvLogo.jpeg'
import csufLogo from '../public/csufLogo.png'
import rmitLogo from '../public/rmitLogo.png'
import {MdVerified} from 'react-icons/md';
import {AiFillPlayCircle} from 'react-icons/ai';
import {BsThreeDots, BsFillPlayFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import BigListItem from '../components/BigListItem';

let seniorProjectPage = '/seniorProjects';
let professionalProjectPage ='/professionalProjects';
let printManiaInstagram = 'https://www.instagram.com/sneaker_mania_berlin/';
let juniorProjectPage = '/juniorProjects';
let btuPage = 'https://www.b-tu.de/';
let rmitPage = 'https://www.rmit.edu.vn/';
let csufPage = 'http://www.fullerton.edu/';



export default function Home() {
    let pageName ='Education History'
  return (
    <div >
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className='text-white font-gothamBold bg-black h-screen '>
        <Navbar headerName={pageName}/>
            {/*SECTION: Education History*/}
            <div className='w-screen pt-14'>
                <div id='educationHistorySection' className='bg-black'>
                    <h2 className="text-3xls p-4 text-white">University</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>

                        <BigListItem 
                        src={btuLogoImage}
                        title='MSc Economics and Engenieering'
                        subline='BTU Cottbus - Senftenberg'
                        durationText='October 2015 - March 2018'
                        href={btuPage}
                        />  

                        <BigListItem 
                        src={btuLogoImage}
                        title='BSc Economics and Engenieering'
                        subline='BTU Cottbus - Senftenberg'
                        durationText='October 2011 - July 2015'
                        href={btuPage}
                        />  

                    </div>


                    <h2 className="text-3xls p-4 pt-4 text-white">Semester Abroad</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>

                        <BigListItem 
                        src={rmitLogo}
                        title='RMIT University'
                        subline='Vietnam'
                        durationText='October 2016 - January 2017'
                        href={rmitPage}
                        />  
                        
                        <BigListItem 
                        src={csufLogo}
                        title='California State University (CSUF)'
                        subline='Fullerton'
                        durationText='August 2013 - December 2013'
                        href={csufPage}
                        />  

                    </div>

                </div>
            </div>
      </main>
    </div>
  )
}


