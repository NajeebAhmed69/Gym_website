import React from 'react'

function Navbar() {
  return (
   <nav className="bg-black text-white font-bold text-xl py-4 px-12 flex justify-between items-center border-b border-white">

<a href="#" className="text-2xl tracking-wide hover:text-blue-700 transition duration-300">
    Najeeb Ahmed <span className="text-blue-700">GYM</span>
  </a>
    <ul className='flex space-x-8   '>
        <li> <a  className="hover:text-blue-700 transition duration-300" href="">Home</a></li>
        <li><a  className="hover:text-blue-700 transition duration-300" href="">About</a></li>
        <li><a  className="hover:text-blue-700 transition duration-300" href="">Contact</a></li>
    </ul>
   </nav>
  )
}

export default Navbar
