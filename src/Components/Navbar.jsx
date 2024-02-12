import React from 'react';
import Hero from './SecongPage/Hero';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <header className="shadow z-50 top-0 border-solid border-y-2 border-black ">
      <nav className='bg-white border-gray-200 px-4 lg:px-6'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          <div className="">
            <ul className='flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <Link
                  to='/' className='p-4'>Home</Link>
              </li>
              <li>
                <Link to='/hero' className='mx-3 p-4'>Material</Link>
              </li>
              <li>
                <Link to='/'className='mx-3 p-4' >About us </Link>
              </li>
              <li>
                <Link to='/' className='mx-3 p-4'>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <Link to="#" className='text-center p-4 border-x-2 border-x-black hover:bg-[#ff90e8]'>sign in</Link>
            <Link to="#" className='bg-black text-white p-4 hover:bg-[#ff90e8] hover:text-black' >Sign up </Link>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar
