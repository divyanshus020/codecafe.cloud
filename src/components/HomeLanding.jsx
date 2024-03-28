import React from 'react'
import Btn from './Btn'
import LandingVideo from "../assets/landing.mp4"
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
            </section>


        </>
    )
}

export default HomeLanding
