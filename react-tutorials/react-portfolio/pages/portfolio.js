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
import {BsThreeDots, BsFillPlayFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className='text-white font-gothamBold bg-black h-screen '>
        <nav className='flex bg-slate-800 justify-start items-center h-14'>
            <div className=' w-2/12 md:w-1/12 lg:w-1/12 text-white'>
                <Link href='./'>
                    <IoIosArrowBack className='w-8 h-14 ml-4'/>
                </Link>
            </div>
            <div className='w-screen text-center'>
                <h3>My Portfolio</h3>
            </div>
        </nav>
        <div className=' bg-black pt-4 px-4'>
            <h2>Personal Projects</h2>
                {/*SECTION: To Do App*/}
                <div class='group'>
                    <div className='w-full font-gothamLight text-xs'>

                        <Link href='/minimalisticLandingPageComingFromPortfolioPage'>
                            <div className='flex items-center gap-1 text-gray-400 py-2 group-hover:bg-gray-700 rounded-md max-w-xl relative '>
                                <div className='w-1/12 h-12 py-4 px-4'>
                                    1
                                </div>
                                <div className='w-12 h-12'>
                                <Image src={minimalisticLandingPageImage} alt="fallback-text" className='w-12 h-12' layout='fill' objectfit='cover'/>
                                </div>
                                <div className='w-6/12 py-4 px-3 text-left group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    Minimalistic Landing Page
                                </div>
                                <div className=' w-2/12 h-12 py-4 text-right group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    HTML|CSS
                                </div>
                                <div className='w-2/12 h-12 py-4 px-2 text-right text-ellipsis whitespace-nowrap overflow-hidden'>
                                    12 hours
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
        </div>

        <div className=' bg-black px-4'>
                {/*SECTION: Minimalistic Landing Page*/}
                <div class='group'>
                    <div className='w-full font-gothamLight text-xs'>
                        <Link href='/toDoAppComingFromPortfolioPage'>
                            <div className='flex items-center gap-1 text-gray-400 py-2 group-hover:bg-gray-700 rounded-md max-w-xl relative '>
                                <div className='w-1/12 h-12 py-4 px-4'>
                                    2
                                </div>
                                <div className='w-12 h-12'>
                                <Image src={reaectToDoAppImage} alt="fallback-text" className='w-12 h-12' layout='fill' objectfit='cover'/>
                                </div>
                                <div className='w-6/12 py-4 px-3 text-left group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    To Do App
                                </div>
                                <div className=' w-2/12 h-12 py-4 text-right group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    React
                                </div>
                                <div className='w-2/12 h-12 py-4 px-2 text-right text-ellipsis whitespace-nowrap overflow-hidden'>
                                    23 hours
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>            

        </div>
        <div className=' bg-black p-4'>
            <h2>Work related projects</h2>
                {/*SECTION: Instagram AutoLike Bot*/}
                <div class='group'>
                    <div className='w-full font-gothamLight text-xs'>
                        <Link href='/instagramLikeBotComingFromPortfolioPage'>
                            <div className='flex items-center gap-1 text-gray-400 py-2 group-hover:bg-gray-700 rounded-md max-w-xl relative '>
                                <div className='w-1/12 h-12 py-4 px-4'>
                                    3
                                </div>
                                <div className='w-12 h-12'>
                                <Image src={instaBotLogo} alt="fallback-text" className='w-12 h-12' layout='fill' objectfit='cover'/>
                                </div>
                                <div className='w-5/12 py-4 px-3 text-left group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    Instagram LikeBot
                                </div>
                                <div className=' w-3/12 h-12 py-4 text-right group-hover:text-white text-ellipsis whitespace-nowrap overflow-hidden'>
                                    Node.js|JavaScript
                                </div>
                                <div className='w-2/12 h-12 py-4 px-2 text-right text-ellipsis whitespace-nowrap overflow-hidden'>
                                    34 hours
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>   

        </div>
      </main>
    </div>
  )
}


