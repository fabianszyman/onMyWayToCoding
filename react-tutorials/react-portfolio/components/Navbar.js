import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link';
import { useRouter } from 'next/router'


export default function Navbar(props) {
    const router = useRouter()
    return(
        <div className='left-0 right-0 absolute ml-0 mr-0'>
            <nav className='flex bg-slate-800 justify-start items-center h-14 fixed w-full z-50 '>
                <div className=' text-white absolute  h-14 mt-1 '>
                    <button type="button" onClick={() => router.back()}>
                        <IoIosArrowBack className='m-2 w-8 h-9 text-center '/>
                    </button>
                </div>
                <div className='text-center text-ellipsis w-full whitespace-nowrap overflow-hidden inline-block text-base'>
                    <h3>{props.headerName}</h3>
                </div>
            </nav>
        </div>
       
    );
}
