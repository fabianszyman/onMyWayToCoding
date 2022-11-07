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
                        <div id="PortfolioItemGroup" class="group">
                            <Link href='https://www.b-tu.de/' target="_blank" rel="noreferrer" >
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                    <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                        <div id='containerImageTitle' className='flex items-center gap-6'>
                                            <div className='ml-2 w-16 h-16'>
                                                <Image src={btuLogoImage} alt="fallback-text" layout='fill' objectfit='cover'/>
                                            </div>
                                            <div className='text-white'>
                                                <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis w-18 whitespace-nowrap overflow-hidden inline-block text-base'>MSc Economics and Engenieering</h4>
                                                <p className='group-hover:text-white text-left font-gothamLight'>BTU Cottbus - Senftenberg</p>
                                            </div>
                                        </div>
                                        <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>October 2015 - March 2018</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <Link href='https://www.b-tu.de/' target="_blank" rel="noreferrer">
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                    <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                        <div id='containerImageTitle' className='flex items-center gap-6'>
                                            <div className='ml-2 w-16 h-16'>
                                            <Image src={btuLogoImage} alt="fallback-text" layout='fill' objectfit='cover'/>
                                            </div>
                                            <div className='text-white'>
                                                <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis w-18 whitespace-nowrap overflow-hidden inline-block text-base'>BSc Economics and Engenieering</h4>
                                                <p className='group-hover:text-white text-left font-gothamLight'>BTU Cottbus - Senftenberg</p>
                                            </div>
                                        </div>
                                        <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>October 2011 - July 2015</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>


                    <h2 className="text-3xls p-4 pt-4 text-white">Semester Abroad</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                            <Link href='https://www.rmit.edu.vn/' target="_blank" rel="noreferrer">
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                    <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                        <div id='containerImageTitle' className='flex items-center gap-6'>
                                        <div className='ml-2 w-16 h-16'>
                                        <Image src={rmitLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                        </div>
                                        <div className='text-white w-18'>
                                            <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>RMIT University</h4>
                                            <p className='group-hover:text-white text-left font-gothamLight'>Vietnam</p>
                                        </div>
                                        </div>
                                        <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>October 2016 - January 2017</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                            <Link href='http://www.fullerton.edu/' target="_blank" rel="noreferrer">
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                    <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                        <div id='containerImageTitle' className='flex items-center gap-6'>
                                        <div className='ml-2 w-16 h-16'>
                                        <Image src={csufLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                        </div>
                                        <div className='text-white w-18'>
                                            <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>California State University (CSUF)</h4>
                                            <p className='group-hover:text-white text-left font-gothamLight'>Fullerton</p>
                                        </div>
                                        </div>
                                        <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>August 2013 - December 2013</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </div>
  )
}


