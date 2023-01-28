import React,{useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home',
            links:"/#home"
        },
        {
            id: 2,
            link: 'About',
            links:"/#about"
        },
        {
            id: 3,
            link: 'Portfolio',
            links:"/#portfolio"
        },
        {
            id: 4,
            link: 'Skills',
            links:"/#skils"
        },
        {
            id: 5,
            link: 'Contact',
            links:"/#contact"
        },
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
        <div>
            <hi className="font-vibe  text-5xl ml-2">Doyin</hi>
        </div>
        <ul className='hidden md:flex'>
        <li  className='px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200'>
            {/* <HashLink to="#home">Home </HashLink> */}
            <a href='/#Home'>Home</a>
            </li>
            <li  className='px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200'>
            {/* <HashLink to="#home">Home </HashLink> */}
            <a href='/#About'>About</a>
            </li>
            <li className='px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200'>
            <a href='/#Portfolio'>Portfolio</a>
            
            </li>
            <li  className='px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200'>
            {/* <HashLink to="#home">Home </HashLink> */}
            <a href='/#Skills'>Skills</a>
            </li>
            <li  className='px-4 cursor-pointer text-gray-500 hover:scale-105 duration-200'>
            {/* <HashLink to="#home">Home </HashLink> */}
            <a href='/#Contact'>Contact</a>
            </li>
        </ul>

        <div onClick={() => setNav(!nav)}className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
           {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>

        {nav &&(
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer py-6 text-4xl'>
             <Link onClick={()=> setNav(!nav)}  to={link} smooth duration={500}>{link}</Link>  
            </li>
             ))} 
            
        </ul>
        )}
    </div>
   
  )
}

export default Navbar
