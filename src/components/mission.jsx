import React from 'react';
import Globe from '../components/globe'
const TwoPartContainer = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-2 ">

                {/* Left Part */}
                <div className="w-full">
                    <Globe />
                </div>

                {/* Right Part */}
                <div className="w-full lg:w-2/2 mt-40">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-purple-700">Mission of CodeCafe</h2>
                    <p className="text-lg">
                        At CodeCafe, our mission is twofold:
                        <br />
                        1:- Empowering Learning and Innovation:
                        We strive to provide a dynamic and inclusive learning environment where individuals from all backgrounds can acquire, enhance, and apply cutting-edge technical skills. Through our comprehensive educational programs, workshops, and collaborative projects, we aim to foster innovation and inspire a new generation of tech leaders who are equipped to solve real-world problems with creativity and expertise.
                        <br />
                        <br />
                        2:- Delivering Excellence in Tech Services:
                        Our goal is to deliver top-tier technology solutions that drive business growth and efficiency. We specialize in offering tailored services, including software development, digital transformation, and tech consulting, to help organizations navigate the complexities of the digital age. By combining technical prowess with a deep understanding of client needs, we ensure that our solutions are not only effective but also aligned with the strategic goals of our partners.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TwoPartContainer;
