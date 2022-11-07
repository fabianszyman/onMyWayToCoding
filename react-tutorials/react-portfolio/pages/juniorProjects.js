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
import {MdVerified} from 'react-icons/md';
import {AiFillPlayCircle} from 'react-icons/ai';
import {BsThreeDots, BsFillPlayFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';
import Navbar from '../components/Navbar';


export default function Home() {
    let pageName ='Work related projects (Junior PM)'
  return (
    <div >
      <Head>
        <title>{pageName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className='text-white font-gothamBold bg-black h-screen '>
      <Navbar headerName={pageName}/>
            {/*SECTION: Employment History*/}
            <div className='w-screen'>
                <div id='employmentHistorySection' className='bg-black'>
                    <h2 className="text-3xls p-4 text-white">Junior Product Manager (CHECK24 Profis)</h2>
                    <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
                        <div id="PortfolioItemGroup" class="group">
                            <Link href='/questionEditor'>
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <div className='ml-2 w-16 h-16'>
                                    <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                    </div>
                                    <div className='text-white'>
                                        <h4 className='text-ellipsis w-18 whitespace-nowrap overflow-hidden inline-block text-base'>Question Editor</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>January 2022 - Present</p>
                                </div>
                                </div>
                            </Link>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <Link href='/instantResultPage'>
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <div className='ml-2 w-16 h-16'>
                                    <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                    </div>
                                    <div className='text-white w-18'>
                                        <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Instant Result Page</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>April 2019 - December 2021</p>
                                </div>
                                </div>
                            </Link>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <Link href='/paymentProcessProject'>
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <div className='ml-2 w-16 h-16'>
                                    <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                    </div>
                                    <div className='text-white w-18'>
                                        <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Payment process (Stripe)</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>March 2019 - Present</p>
                                </div>
                                </div>
                            </Link>
                        </div>

                        <div id="PortfolioItemGroup" class="group">
                            <Link href='/happinessGarantieProject'>
                                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                                <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                                    <div id='containerImageTitle' className='flex items-center gap-6'>
                                    <div className='ml-2 w-16 h-16'>
                                    <Image src={check24ProfisLogo} alt="fallback-text" layout='fill' objectfit='cover'/>
                                    </div>
                                    <div className='text-white w-18'>
                                        <h4 className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Happiness Garantie</h4>
                                        <p className='group-hover:text-white text-left font-gothamLight'>CHECK24 Profis</p>
                                    </div>
                                    </div>
                                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>March 2019 - Present</p>
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


