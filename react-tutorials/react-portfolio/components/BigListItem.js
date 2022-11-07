import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';
import btuLogoImage from '../public/btuLogo.png'
import Image from 'next/image';


export default function BigListItem({href, src, title, subline, durationText}) {

    return(
        <div id="PortfolioItemGroup" class="group">
            <Link href={href}>
                <div id='PortfolioItem' className='py-2 mx-4 group-hover:bg-gray-700 rounded-md max-w-xl'>
                    <div id='containerAllItems' className='flex items-center justify-between gap-6'>
                        <div id='containerImageTitle' className='flex items-center gap-6'>
                            <div className='ml-2 w-16 h-16'>
                            <Image src={src} alt="fallback-text" layout='fill' objectfit='cover'/>
                            </div>
                            <div className=' text-white text-ellipsis whitespace-nowrap overflow-hidden max-w-xl'>
                                <h4 className='w-44 sm:w-64 md:w-64 xl:w-72  text-ellipsis whitespace-nowrap overflow-hidden inline-block text-base'>{title}</h4>
                                <p className=' group-hover:text-white text-left font-gothamLight'>{subline}</p>
                            </div>
                        </div>
                        <p className='text-ellipsis whitespace-nowrap overflow-hidden inline-block text-right max-w-xs mr-2'>{durationText}</p>
                    </div>
                </div>
            </Link>
      </div>
    );
}
