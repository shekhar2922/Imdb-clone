import React from 'react'
import Logo from '../logo.png'
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <div className="border-2 px-2 md:px-8 py-2 space-x-6 md:space-x-8 bg-blue-400 items-center text-yellow-300 flex font-bold ">
    <Link to="/"><img className='w-[20px] md:w-[40px]' src={Logo} alt='img'></img></Link>
    <Link to="/" className=' md:flex md:flex-row cursor-pointer text-sm md:text-xl'>Movies</Link> 
    <Link to="/wishlist" className=' md:flex md:flex-row cursor-pointer text-sm md:text-xl'>Wishlist</Link>

    </div>
  )
}

export default Navbar;
