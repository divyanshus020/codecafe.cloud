import React from 'react'
import Btn from './Btn'
import HomeScroll from './HomeScroll'
import LandingVideo from "../assets/landing.mp4"
import Sticky from "../components/sticky"
import TabsDemo from './Scroling'
import BackgroundVideo from './whyus'
import BackgroundBeamsDemo from './beams'
import Mission from './mission'
import Globe from './globe'
import TextGen from './textgen'
import Bento from './grid'
import Pin from './Pin'
import ContactUs from './ContactUs'
import StudentReview from '../components/StudentReview'
function HomeLanding() {
    return (
        <>
            <section>
                <div className="video-container">
                    <video autoPlay muted loop id="bg-video">
                        <source src={LandingVideo} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="content-on-top">

                    </div>
                </div>

                <main>
                    <div class="hero absolute top-[300px] right-40">
                        <div class="hero-text">
                            <div className='bg-[#760fcb]'>
                                <h1 className=''>
                                    CodeCafe:<br /> Ignite Your Passion.
                                </h1>
                            </div>

                            <div className='bg-white'>
                                <p>Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.</p>
                            </div>

                            <Btn />
                        </div>
                        <div class="hero-image">
                            {/* <!-- Add your hero image here --> */}
                        </div>
                    </div>
                </main>

                <main className='relative w-full  bg-white py-10 '>
                    <div className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-extrabold mb-7 mt-10 text-gray-400'>
                        <h1>OUR OFFERINGS
                        </h1>
                    </div>

                    <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-7 mt-10 text-purple-700'>
                        <h2>Job Bootcamp
                            For professionals
                        </h2>
                    </div>
                    <HomeScroll />

                    <div>
                        <Sticky />
                    </div>

                    <div>
                        <TabsDemo />
                    </div>

                    {/* <div>
                        <BackgroundVideo />
                        {/* <BackgroundBeamsDemo/> */}
                    {/* </div>  */}

                    <div className=''>
                        <Mission />
                    </div>

                    <div className='mt-10 border-2 p-20 bg-black'>
                        <TextGen />
                    </div>

                    <div className='my-40'>
                        <Bento />
                    </div>


                    <div className='my-40'>
                        <StudentReview />
                    </div>

                    <div className='my-40'>
                        {/* <Pin/> */}
                        {/* <ContactUs/> */}
                    </div>


                </main>
            </section>
        </>
    )
}

export default HomeLanding
