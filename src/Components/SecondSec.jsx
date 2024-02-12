import React from 'react'
import { Link } from 'react-router-dom'

const SecondSec = () => {
  return (
    <section>
      <div className='Main-Third min-h-screen w-full flex justify-center items-center'>
        <div className="Third_text w-[50%]">
          <p className='text-6xl text-center '>Find your own Material</p>
          <p className='text-2xl text-center py-7'>Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.</p>
          <Link to='hero'>
            <a href=""><p className='text-3xl text-center'>Explore Now →</p></a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SecondSec
