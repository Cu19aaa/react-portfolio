import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Profile from '../assets/profile.png'
import { ReactTyped } from "react-typed";
import pdf from '../assets/Chinaza Chinonso David Ugwu Official Resume.pdf'


const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-white py-16 px-4'>
        {/*Container*/}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4 pt-4' src={Profile} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-black-600'>Hi, My name is </p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>David Ugwu</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I am a </h2>
            <ReactTyped className='text-4xl sm:text-5xl font-bold text-[#8892b0]'
             strings={['Web Developer', 'Web Designer','Full Stack Developer']} typeSpeed={120} backSpeed={140} loop/>


            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a web designer and web developer as well as a full stack web developer
            focusing on making exceptional digital products for clients and employers. I am focused on
            building fully responsive full-stack web applications. </p>
                <div>
                  <a href="/" download={pdf}>
                <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white hover:border-gray-200'>Download CV 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />   
                </span>
                 </button>
                 </a>
            </div>

          </div>

        </div>

      
    </div>
  )
}

export default Home
