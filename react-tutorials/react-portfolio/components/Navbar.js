import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';

export default function Navbar(props) {
    let ergge = 'msuterman';
    return(
        
        <nav className='flex bg-slate-800 justify-start items-center h-14'>
            <div className=' w-2/12 md:w-1/12 lg:w-1/12 text-white'>
                <Link href='./'>
                    <IoIosArrowBack className='w-8 h-14 ml-4'/>
                </Link>
            </div>
            <div className='w-screen text-center'>
                <h3>{props.headerName}</h3>
            </div>
        </nav>
    );
}