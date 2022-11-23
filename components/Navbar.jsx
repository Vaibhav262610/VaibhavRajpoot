import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-around nav fixed z-10 p-8 w-full'>
            <h1 className='font-black text-6xl  '>
              <Link href='/'>VR</Link>
              </h1>
            <button className='main-button hover:text-yellow-400 hover:border-yellow-400'>Menu</button>
    </nav>
    </>
  )
}

export default Navbar