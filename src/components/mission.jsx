import React from 'react';
import Globe from '../components/globe';

const TwoPartContainer = () => {
    return (
        <div className=" mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto border-2">
                {/* Left Part - Globe */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300">
                        <Globe />
                    </div>
                </div>

                {/* Right Part - Mission Content */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-purple-700 tracking-tight">
                        Mission of CodeCafe
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                1. Empowering Learning and Innovation
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed">
                                We strive to provide a dynamic and inclusive learning environment where individuals 
                                from all backgrounds can acquire, enhance, and apply cutting-edge technical skills. 
                                Through our comprehensive educational programs, workshops, and collaborative projects, 
                                we aim to foster innovation and inspire a new generation of tech leaders who are 
                                equipped to solve real-world problems with creativity and expertise.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                2. Delivering Excellence in Tech Services
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed">
                                Our goal is to deliver top-tier technology solutions that drive business growth 
                                and efficiency. We specialize in offering tailored services, including software 
                                development, digital transformation, and tech consulting, to help organizations 
                                navigate the complexities of the digital age. By combining technical prowess 
                                with a deep understanding of client needs, we ensure that our solutions are 
                                not only effective but also aligned with the strategic goals of our partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoPartContainer;
