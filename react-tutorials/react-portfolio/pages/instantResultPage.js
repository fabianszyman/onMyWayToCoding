import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../public/profileImage.jpg';
import reaectToDoAppImage from '../public/reactToDoAppImage.png'
import minimalisticLandingPageImage from '../public/minimalisticLandingPage.png'
import check24ProfisLogo from '../public/check24ProfisLogo.png'
import printManiaLogo from '../public/print_mania.png'
import instaBotLogo from '../public/instabot.jpeg'
import btuLogoImage from '../public/btuLogo.png'
import {MdVerified} from 'react-icons/md';
import {AiFillPlayCircle} from 'react-icons/ai';
import {BsThreeDots, BsFillPlayFill, BsGithub} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default function Home() {
    let pageName ='Instant Result Page'
  return (
    <div >
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className='text-white font-gothamBold bg-black h-screen '>
      <Navbar headerName={pageName}/>
        <div className=' bg-black pt-4 px-4'>
            <h4 className=' font-gothamLight text-sm'>Work related project</h4>
            <h1 className=' text-xl '>Instant Result Page</h1>
                <div className='pt-2 h-1/3 md:w-2/3 lg:w-2/3'>
                    <div className='relative'>
                        <Image src={minimalisticLandingPageImage} alt="fallback-text" className='overflow-hidden'/> 
                        <a href='https://github.com/fabianszyman/onMyWayToCoding/tree/main/html-css-tutorials/minimalistic-website' target="_blank" rel="noreferrer">
                            <button className=' absolute top-4 right-4 text-black bg-white rounded-full px-7 py-3 hover:scale-105'>
                                <div className='flex items-center gap-2'>
                                    <BsGithub/> 
                                        Github
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            <div className='text-xl pt-6'>
            Overview

            </div>
            <div className='font-gothamLight text-lg pt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi. 
            </div>
            <div className='text-xl pt-6'>
            Goal

            </div>
            <div className='font-gothamLight text-lg pt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. 
         
            </div>
            <div className='text-xl pt-6'>
            Results

            </div>
            <div className='font-gothamLight text-lg pt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. 
         
            </div>
            <div className='text-xl pt-6'>
            Process

            </div>
            <div className='font-gothamLight text-lg pt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. 
         
            </div>
            <div className='text-xl pt-6'>
            Responsibilities

            </div>
            <div className='font-gothamLight text-lg pt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. 
         
            </div>
            <div className='text-xl pt-6'>
            Team

            </div>
            <ul className='font-gothamLight text-lg pt-1 pb-20'>
                <li>1. Backend</li>
                <li>2. Frontend</li>
                <li>1. UX-Designer</li>
                <li>1. Product Manager</li>
         
            </ul>
        </div>



      </main>
    </div>
  )
}


