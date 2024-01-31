import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full pt-8 pb-8 bg-[#E5E7EB] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Get To Know Me</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. Im David and welcome to my website portfolio. Take a look around and I hope you Like what you see.</p>
                    </div>
                    <div>
                        <p>Welcome to my little corner of the internet. I think I should tell you a little 
                            about myself. I am a graduate from the University of Hertfordshire where I completed my
                            BSc Computer Science(Software Engineering) getting a 2.1 at the end of the period. 
                            While in university I worked for the university as a student guide and a wifi warrior and did 
                            a few virtual interships to gain valuable experience. After my degree, I signed up to an online 
                            bootcamp offered by FreeCodeCamp Academy in web development which was where my web development learning
                            process started. The bootcamp introduced the basics in HTML,CSS and JavaScript and during the bootcamp
                            successfully completed a wide variety tasks offered from frontend simplified to practice out what i had learnt.
                            After the bootcamp I went on to learn frameworks of the technology in React and Tailwind to further my knowledge 
                            in the field. With my extensive learning experience I deem myself a well educated Web Developer 
                            currently looking for a role where I can learn, grow, contribute and thrive.
                        </p>
                    </div>

                </div>
            

        </div>
      
    </div>
  )
}

export default About
