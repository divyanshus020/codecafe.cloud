import React from 'react';
import Beam from './beams'
import Pin from './Pin'
import { BackgroundBeams } from "../components/ui/background-beams";
const ContactUs = () => {
    return (
        <div>
             <>
            {/* <BackgroundBeams/> */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-2 bg-gray-900  ">

                {/* Left Part */}
                <div className="w-full">
                    <Beam />
                </div>

                {/* Right Part */}
                <div className="w-full lg:w-2/2 mt-40">
                    <Pin/>
                </div>
            </div>
        </>
        </div>
    );
}

export default ContactUs;
