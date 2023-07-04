'use client'
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
// import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className='navcontainer h-[100px] flex  justify-between items-center'>
      <Link className='logo font-bold text-xl' href='/'>Next Blog</Link>
      <div className='flex items-center gap-5'>
        <DarkModeToggle></DarkModeToggle>
        {
          links.map((link) => (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
        <button className='px-3 py-1 bg-green-600 hover:bg-green-500 transition-all duration-300 text-white cursor-pointer rounded-md' onClick={() => { console.log('loggedout') }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar