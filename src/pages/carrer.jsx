import React from 'react';
import { Link } from "react-router-dom";
import CareerLogin from '../components/careerLogin'
import Footer from '../components/Footer';
import Block from '../assets/block.png'
import Btn from '../components/Btn';
import Hover from '../components/hover'
const Carrer = () => {
    return (
        <div>
            <div className="p-8 bg-white min-h-screen flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
                    <div className="p-4">
                        <img
                            src={Block}
                            alt="Placeholder"
                            className=""
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-7xl text-purple-700 font-bold mb-2">
                            Let's work
                            <br />
                            <span>together</span></h2>
                        <p className="text-gray-700 text-2xl my-10">
                            We welcome young talents with creative minds and willingness to work towards shaping their careers.
                        </p>

                        <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-purple-700 p-2 flex justify-center items-center font-extrabold">
                            <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-700 delay-150 group-hover:delay-75"></div>
                            <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-500 delay-150 group-hover:delay-100"></div>
                            <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-700 delay-150 group-hover:delay-150"></div>
                            <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-500 delay-150 group-hover:delay-200"></div>
                            <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-700 delay-150 group-hover:delay-300"></div>
                            <p class="z-10">Join Us</p>
                        </button>
                    </div>
                </div>

                <div className=''>
                    <Hover />
                </div>

                <div className=''>
                    <CareerLogin />
                </div>

                
            </div>

            <div className='w-full mb-10 p-8' >
                    <div class="bg-purple-700 w-full p-8 flex justify-center font-sans">
                        <div class="rounded bg-grey-light w-full  py-[60px] px-[30px]">
                            <div class="flex justify-center py-1">
                                <h1 class="text-[40px] text-white font-bold">Let's talk
                                    Let's build something
                                    awesome together!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
    );
}

export default Carrer;
