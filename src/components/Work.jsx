import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import Work1 from '../assets/project1.png'
import Discord from '../assets/discord.jpeg'
import Luke from '../assets/look for Luke.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-[#E5E7EB]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-black'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              {/*Grid Item*/}  
                <div
                 style={{backgroundImage: `url(${Work1})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Website Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item 2*/}  
                <div
                 style={{backgroundImage: `url(${Discord})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Discord Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Cu19aaa/discordclone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item 3*/}  
                <div
                 style={{backgroundImage: `url(${Luke})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Personal Trainer Site
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                </div>


        </div>
      
    </div>
  )
}

export default Work
