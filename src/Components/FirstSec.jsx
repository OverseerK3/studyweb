import React from 'react'
import { Link } from 'react-router-dom'
const FirstSec = () => {
  return (
    <>
      <section className=''>
        <div className="First_Main  bg-white min-h-screen flex wrap border-b-2 border-black ">
          <div className="First_Left bg-[#ff90e8] border-r-2 border-black  flex items-center justify-center w-[50%]">
            <div className="FIrst_Text max-w-[70%] m-auto">
              <p className='text-7xl font-[500]'>Lorem ipsum dolor sit amet.</p>
              <p className='my-11 font-[400] text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nobis hic nisi libero odio ipsum nihil excepturi veniam asperiores ut.</p>

              <Link to="hero">
                <button className='px-20 py-6 bg-black text-white '>Start Exploring</button>
              </Link>

            </div>
          </div>
          <div className="Second_Left bg-[#ffc900] w-[50vw] min-h-[50vh] z-10 flex items-center justify-center">
            <img src="https://i.ibb.co/gjqyKLW/Vector-1.png" alt="" className='w-[500px] h-[]' />
          </div>
        </div>
      </section>
    </>
  )
}

export default FirstSec
