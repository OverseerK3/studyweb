    import React from 'react'
import { Link } from 'react-router-dom'

    const Footer = () => {
        return (
            <>
                
                <div className='bg-white text-black h-40 w-[100%] flex flex-wrap'>
                    <div className="lis flex justify-center items-center  w-full">
                        <div className="Footer-Part w-[33%] flex justify-center font-medium">
                            <ul className=''>
                                <li>Home</li>
                                <Link to='hero'>
                                <li className='my-2'>Material</li>
                                </Link>
                                <li>Explore</li>
                            </ul>
                        </div>
                        <div className="Footer-Part w-[33%] flex justify-center font-medium">
                            <ul>
                                <li>About us</li>
                                <li className='my-2'>Contact us</li>
                            </ul>

                        </div>
                        <div className="Footer-Part w-[33%] flex justify-center font-medium ">
                            <ul>
                                <li>PDF Files</li>
                                <li className='my-2'>XL Files</li>
                                <li>DOCX-WORD Files</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Footer
