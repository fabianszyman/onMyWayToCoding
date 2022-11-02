import Head from 'next/head';
import Image from 'next/image';
import profileImage from '../public/profileImage.jpg';
import reaectToDoAppImage from '../public/reactToDoAppImage.png'
import minimalisticLandingPageImage from '../public/minimalisticLandingPage.png'
import check24ProfisLogo from '../public/check24ProfisLogo.png'
import printManiaLogo from '../public/print_mania.png'
import instaBotLogo from '../public/instabot.jpeg'
import btuLogoImage from '../public/btuLogo.png'
import googleLogo from '../public/googleLogo.png'
import courseraLogo from '../public/courseraLogo.jpeg'
import {MdVerified} from 'react-icons/md';
import {AiFillPlayCircle} from 'react-icons/ai';
import {BsThreeDots, BsFillPlayFill} from 'react-icons/bs'
import {GrCertificate} from 'react-icons/gr'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Hire Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spotifyIcon.ico" />
      </Head>
      <main className='font-gothamLight text-white scroll-smooth'>
      <div id="heroHeader" className="w-full h-1/3 max-h-96 bg-blue-200 text-white overflow-hidden relative" >  
        <Image src={profileImage} className='w-full' layout='fill' objectFit='cover' alt="fallback-text"/>
        <div id="ctasTop" className='absolute top-4 right-4 flex-auto justify-center font-gothamBold text-sm'>
          <button className='p-4 text-white hover:text-slate-50 hover:scale-105'><a href="mailto:fabianszy@gmail.com">Email</a></button>
          <button className='p-4 text-black bg-white ml-2 rounded-full px-7 py-3 hover:scale-105'> <a href="https://www.linkedin.com/in/fabian-szymanczyk-30a801154/" target="_blank" rel="noreferrer">LinkedIn</a></button>
        </div>
          <div id='heroTextContainer' className='absolute w-full bottom-4 left-4'>
            <div className='flex items-center'>
              <MdVerified className='fill-sky-600'/>
              <p className='text-sm font-bold px-1'>Fabian Szymanczyk</p>
            </div>
            <h2 className='text-4xl font-gothamBlack p-1'>
                Spotify hire me
            </h2>
            <p className='text-xs p-1 font-bold'>54 months work experience</p>
          </div>
      </div>
      <div className='font-gothamBold '>
        {/*SECTION: Portfolio*/}
        <div id="myPortfolioSection" className='bg-gradient-to-b from-gray-700 via-gray-900 to-black '>
          <div className=' flex gap-8 p-4'>
            <a href='../CVExample.pdf'>
              <AiFillPlayCircle className=' fill-green-500 w-14 h-14 hover:scale-105'/>
            </a>
            <a href='../CVExample.pdf'>
              <button className='text-white border-solid border py-2 px-6 rounded-md border-gray-400 my-2 text-sm hover:border-white hover:border-2'>RESUME</button>
            </a>
        
            <BsThreeDots className=' fill-gray-400 w-8 h-8 hover:scale-105 hover:fill-white flex my-3'/>
          </div>
            <h2 className="text-3xls p-4 text-white">Portfolio</h2>
            <div id="myPortfolioItems" className=' font-gothamLight text-xs'>
              <div id="PortfolioItemGroup" class="group">

              <Link href='/minimalisticLandingPageComingFromHome'>
                <div id='PortfolioItem' className='flex items-center gap-6 text-gray-400 py-2 pl-4 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                  <p className='group-hover:hidden px-2 w-2 h-2'>1</p>
                  <BsFillPlayFill className='hidden group-hover:block text-white w-8 h-8'/>
                  <Image src={reaectToDoAppImage} alt="fallback-text" className='w-12 h-12' layout='fill' objectFit='cover'/>
                  <h4 className='text-white max-w-lg w-40 text-ellipsis whitespace-nowrap overflow-hidden inline-block'>To Do App</h4>
                  <p className='group-hover:text-white text-right w-28'>React</p>
                  <p className='pl-4 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right'>23 hours</p>
                </div>
              </Link>



              </div>
              <div id="PortfolioItemGroup" class="group">
                <a id='PortfolioItem' className='flex items-center gap-6 text-gray-400 py-2 pl-4 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                  <p className='group-hover:hidden px-2 w-2 h-2'>2</p>
                  <BsFillPlayFill className='hidden group-hover:block text-white w-8 h-8'/>
                  <Image src={minimalisticLandingPageImage} alt="fallback-text" className='w-12 h-12' layout='fill' objectFit='cover'/>
                  <h4 className='text-white max-w-lg w-40 text-ellipsis whitespace-nowrap overflow-hidden inline-block'>Minimalistic Landing Page</h4>
                  <p className=' group-hover:text-white text-right w-28'>HTML|CSS</p>
                  <p className='pl-4 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right'>12 hours</p>
                </a>
              </div>
              <div id="PortfolioItemGroup" class="group">
                <a id='PortfolioItem' className='flex items-center gap-6 text-gray-400 py-2 pl-4 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                  <p className='group-hover:hidden px-2 w-2 h-2'>3</p>
                  <BsFillPlayFill className='hidden group-hover:block text-white w-8 h-8'/>
                  <Image src={instaBotLogo} alt="fallback-text" className='w-12 h-12' layout='fill' objectFit='cover'/>
                  <h4 className='text-white max-w-lg w-40 text-ellipsis whitespace-nowrap overflow-hidden inline-block'>Instagram LikeBot</h4>
                  <p className=' group-hover:text-white text-right w-28 text-ellipsis whitespace-nowrap overflow-hidden inline-block'>Node.js|JavaScript</p>
                  <p className='pl-4 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right'>34 hours</p>
                </a>
              </div>
              <div className='p-6 font-gothamBold ml-4 text-gray-400 hover:text-white'>
                <Link href='/portfolio'>
                    SHOW MORE
                </Link>
              </div>
            </div>
          </div>

          {/*SECTION: Employment History*/}
          <div id='employmentHistorySection' className='bg-black'>
            <h2 className="text-3xls p-4 pt-4 text-white">Employment History</h2>
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
              <div className='flex justify-center max-w-xl py-2'>
                <button className=' border border-gray-400 hover:border-green-500 hover:scale-95 text-white font-bold rounded-full m-2 py-2 px-4'>
                  Show full history
                </button>
              </div>
            </div>
          </div>

          {/*SECTION: Education History*/}
          <div id='educationHistorySection' className='bg-black'>
            <h2 className="text-3xls p-4 pt-4 text-white">Education History</h2>
            <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
              <div id="PortfolioItemGroup" class="group">
                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                  <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                    <div id='containerImageTitle' className='flex items-center gap-6'>
                      <a href='https://www.b-tu.de/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                      <Image src={btuLogoImage} alt="fallback-text" layout='fill' objectFit='cover'/>
                      </a>
                      <div className=' text-white text-ellipsis whitespace-nowrap overflow-hidden max-w-xl'>
                        <h4 className='w-44 sm:w-64 md:w-64 xl:w-72  text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>MSc Economics and Engenieering</h4>
                        <p className=' group-hover:text-white text-left font-gothamLight'>BTU Cottbus - Senftenberg</p>
                      </div>
                    </div>
                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>October 2015 - March 2018</p>
                  </div>
                </div>
              </div>
              <div id="PortfolioItemGroup" class="group">
                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                  <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                    <div id='containerImageTitle' className='flex items-center gap-6'>
                      <a href='https://www.b-tu.de/' target="_blank" rel="noreferrer" className='ml-2 w-16 h-16'>
                      <Image src={btuLogoImage} alt="fallback-text" layout='fill' objectFit='cover'/>
                      </a>
                      <div className='text-white w-18'>
                        <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>BSc Economics and Engenieering</h4>
                        <p className='group-hover:text-white text-left font-gothamLight'>BTU Cottbus - Senftenberg</p>
                      </div>
                    </div>
                    <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>April 2011 - Jul 2015</p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center max-w-xl py-2'>
                <button className=' border border-gray-400 hover:border-green-500 hover:scale-95 text-white font-bold rounded-full m-2 py-2 px-4'>
                  Show full history
                </button>
              </div>
            </div>
          </div>

          {/*SECTION: Certificates*/}
          <div id='certificatesSection' className='bg-black pb-20'>
            <h2 className="text-3xls p-4 pt-4 text-white">Certificates & Recommendations</h2>
            <div id="myPortfolioItems" className=' font-gothamBold text-xs'>
              <div id="PortfolioItemGroup" class="group">
                  <div id='PortfolioItem' className=' group-hover:bg-gray-700 rounded-md max-w-xl relative mx-4'>
                    <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/RDCB66AKZR6E' target="_blank" rel="noreferrer" className='absolute top-0 bottom-0 left-0 right-0'></a>
                    <div id='containerAllItems' className='flex items-center justify-between gap-6 '>
                      <div id='containerImageTitle' className='flex items-center py-2  gap-6'>
                        <div className='relative pointer-events-none z-0 w-16 h-16 ml-2'>
                          <a href='https://www.coursera.org/professional-certificates/google-it-automation' target="_blank" rel="noreferrer" className='pointer-events-auto'>
                          <Image src={googleLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                          </a>
                        </div>
                        <div className='text-white w-18'>
                          <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Google IT Automation with Python Certification</h4>
                          <p className='group-hover:text-white text-left font-gothamLight'>Google</p>
                        </div>
                      </div>
                      <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>Issued October 2021</p>
                    </div>
                  </div>
              </div>
              <div id="PortfolioItemGroup" class="group">
                  <div id='PortfolioItem' className=' group-hover:bg-gray-700 rounded-md max-w-xl relative mx-4'>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/4AXBCMRR3HXH' target="_blank" rel="noreferrer" className='absolute top-0 bottom-0 left-0 right-0'></a>
                    <div id='containerAllItems' className='flex items-center justify-between gap-6 '>
                      <div id='containerImageTitle' className='flex items-center py-2  gap-6'>
                        <div className='relative pointer-events-none z-0 w-16 h-16 ml-2'>
                          <a href='https://www.coursera.org/learn/bootstrap-4' target="_blank" rel="noreferrer" className='pointer-events-auto'>
                          <Image src={courseraLogo} alt="fallback-text" layout='fill' objectFit='cover'/>
                          </a>
                        </div>
                        <div className='text-white w-18'>
                          <h4 className='w-44 sm:w-64 md:w-64 xl:w-72 text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>Front-End Web UI Frameworks and Tools: Bootstrap 4</h4>
                          <p className='group-hover:text-white text-left font-gothamLight'>Coursera</p>
                        </div>
                      </div>
                      <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>Issued August 2021</p>
                    </div>
                  </div>
              </div>

              <div className='flex justify-center max-w-xl py-2'>
                <button className=' border border-gray-400 hover:border-green-500 hover:scale-95 text-white font-bold rounded-full m-2 py-2 px-4'>
                  Show all
                </button>
              </div>
            </div>
          </div>

      </div>

      <nav className="fixed bottom-0 inset-x-0 flex justify-between text-xs text-white-100 bg-black font-gothamBold">
          
          <a href="#heroHeader" class="w-full block py-2 px-3 text-center text-gray-400 hover:text-white hover:stroke-white hover:fill-white">
            <svg className="w-6 h-6 mb-2 mx-auto stroke-gray-600 fill-gray-600 hover:stroke-white hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
            </svg>
            Portfolio
          </a>
          
          <a href="#employmentHistorySection" className="w-full block py-2 px-3 text-center text-gray-400 hover:text-white hover:stroke-white hover:fill-white">
            <svg className="w6 h-6 mb-2 mx-auto stroke-gray-600 fill-gray-600 hover:stroke-white hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
            </svg>
            Employment
          </a>
          
          <a href="#educationHistorySection" class="w-full block py-2 px-3 text-center text-gray-400 hover:text-white hover:stroke-white hover:fill-white">
            <svg className="w-6 h-6 mb-2 mx-auto stroke-gray-600 fill-gray-600 hover:stroke-white hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
            </svg>
            Education
          </a>
          <a href="#certificatesSection" class="w-full block py-2 px-3 text-center text-gray-400 hover:text-white hover:stroke-white hover:fill-white">
            <div className='bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 w-6 h-6 m-auto mb-2 rounded-sm flex justify-center items-baseline relative'>
              <div className='w-4 h-4 left-1.5 top-1.5 absolute'>
                <svg className="m-auto stroke-gray-400 fill-gray-400 hover:stroke-white hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
                </svg>
              </div>
            </div>
            Certificates
          </a>
        </nav>  
      </main>
    </div>
  )
}


