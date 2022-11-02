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
                <h3>Employment History</h3>
            </div>
        </nav>
            {/*SECTION: Employment History*/}
            <div className='w-screen'>
                <div id='employmentHistorySection' className='bg-black'>
                    <h2 className="text-3xls p-4 text-white">Full Time</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                            <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                            <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                <div id='containerImageTitle' className='flex items-center gap-6'>
                                <a href='https://www.check24.de/profis/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                </a>
                                <div className='text-white'>
                                    <h4 className='text-ellipsis w-18 whitespace-nowrap overflow-hidden inline-block text-base'>Senior Product Manager</h4>
                                    <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                </div>
                                </div>
                                <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>January 2022 - Present</p>
                            </div>
                            </div>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                            <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                <div id='containerImageTitle' className='flex items-center gap-6'>
                                <a href='https://www.check24.de/profis/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                </a>
                                <div className='text-white w-18'>
                                    <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Product Manager</h4>
                                    <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                </div>
                                </div>
                                <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>April 2019 - December 2021</p>
                            </div>
                            </div>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                            <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                <div id='containerImageTitle' className='flex items-center gap-6'>
                                <a href='https://www.instagram.com/sneaker_mania_berlin/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                <Image src={printManiaLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                </a>
                                <div className='text-white w-18'>
                                    <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Founder</h4>
                                    <p className='group-hover:text-white text-left font-gothamLight'>Print Mania UG</p>
                                </div>
                                </div>
                                <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>March 2019 - Present</p>
                            </div>
                            </div>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                            <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                <div id='containerImageTitle' className='flex items-center gap-6'>
                                <a href='https://www.check24.de/profis/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                </a>
                                <div className='text-white w-18'>
                                    <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Junior Product Manager</h4>
                                    <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                </div>
                                </div>
                                <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>April 2018 - March 2019</p>
                            </div>
                            </div>
                        </div>
                    </div>


                    <h2 className="text-3xls p-4 pt-4 text-white">Working Student</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <a href='https://ibmix.de/en/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                    <Image src={ibmIxLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                    </a>
                                    <div className='text-white w-18'>
                                        <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Project Manager</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>IBM iX</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>March 2017 - March 2018</p>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <a href='https://www.auto1-group.com/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                                    <Image src={auto1Logo} alt="fallback-text" layout='fill' objectFit='cover'/>
                                    </a>
                                    <div className='text-white w-18'>
                                        <h4 className='text-ellipsis w-40 sm:w-48 md:w-64 lg:w-64 whitespace-nowrap overflow-hidden inline-block text-base'>Business Development Manager</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>AUTO1 Group</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>October 2015 - October 2016</p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    </div>
  )
}


