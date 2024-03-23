import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav]=useState(false)
const handleNav =()=>{
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full lg:text-4xl font-bold text-[#7a50eb] text-2xl'>SANTHOSH.</h1>
        <ul className='hidden text-xl md:flex lg:flex gap-5'>
        <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/">Home</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/about">About</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/skills">Skills</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/edu">Education</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/prj">Projects</Link></li>
            <li className='p-4 cursor-pointer hover:text-[#7a50eb] duration-300'><Link to ="/con">Contacts</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#7a50eb] m-5 pt-2'>SANTHOSH</h1>
            <ul className='uppercase p-4' onClick={handleNav}>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/">Home</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/about">About</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/skills">Skills</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/edu">Education</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/prj">Projects</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#7a50eb] duration-300'><Link to ="/con">Contacts</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
