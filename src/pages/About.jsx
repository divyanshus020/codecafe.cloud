import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Photo1 from '../assets/Founder.webp'
import Team from '../assets/team.mp4'
import Vision from '../assets/vision.mp4'
import Sai from '../assets/company/sai.png'
import Oasis from '../assets/company/oasis.jpg'
import Cip from '../assets/company/cip.png'
import Herobg1 from "../assets/herobg1.png"
import AboutThree from "../components/AboutThree"
import Slider from "../components/SliderAbout"
import Faq from '../components/Faq'
import StudentReview from '../components/StudentReview'
// import QuestionData from '../components/QuestionData'
// import TeamLead from '../components/TeamLead'

function About() {

    return (
        <>
            <div className="bg-gray-100 min-h-screen bg-about mt-20">
                <div className="container mx-auto py-12">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl  aboutname font-bold text-purple-700 mb-2">About CodeCafe</h1>
                        <p className="text-lg text-gray-600">Empowering Developers Worldwide</p>
                    </div>
                    <div className="w-full lg:w-2/2 px-4 mb-8 mt-10">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-purple-700 mb-4">About CodeCafe</h2>
                            <p className="text-gray-700 mb-4">
                                CodeCafe stands as a pioneering platform in the realm of coding education and community engagement. With a commitment to excellence and inclusivity, we provide a comprehensive array of resources tailored to individuals at every stage of their coding journey. From novices seeking to grasp the fundamentals to seasoned professionals looking to expand their skill set, CodeCafe offers a diverse range of courses, tutorials, projects, and interactive forums to meet their needs.

                                At the heart of CodeCafe lies our dedication to nurturing a supportive and collaborative community. Through our platform, learners can connect with like-minded individuals, share knowledge, and embark on collaborative projects. We believe that learning is not merely a solitary pursuit but a collective endeavor, enriched by diverse perspectives and experiences. By fostering an environment of camaraderie and mutual support, we empower our members to achieve their full potential and thrive in the dynamic world of technology.

                                Our mission extends beyond imparting technical skills; we aim to cultivate a holistic approach to learning that encompasses creativity, critical thinking, and problem-solving. Our courses are designed to not only teach coding languages and frameworks but also to encourage innovation and foster a growth mindset. Through hands-on projects and real-world challenges, learners gain practical experience and develop the confidence to tackle complex problems independently.

                                At CodeCafe, we understand that the journey to mastery is not linear. That's why we provide personalized guidance and support every step of the way. Whether it's through one-on-one mentoring, peer-to-peer collaboration, or tailored learning paths, we strive to ensure that each individual receives the assistance they need to succeed.

                                In essence, CodeCafe is more than just a platform for learning to code; it's a dynamic community where individuals come together to grow, innovate, and inspire. Join us on this exciting journey of discovery and empowerment, and unlock your full potential in the world of technology.
                            </p>
                            <p className="text-gray-700 mb-4">
                                With a focus on accessibility and inclusivity, CodeCafe offers a wide range of learning materials, project collaboration
                                opportunities, and networking events. Our mission is to inspire and support developers at every stage of their journey,
                                from beginners to seasoned professionals, as they strive for excellence in the field of technology.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center -mx-4 ">
                        <div className="w-full lg:w-1/3 px-4 mb-8">
                            <img src={Photo1} alt="Founder" className="rounded-lg shadow-lg w-full h-full object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-8">
                            <div className="bg-white  rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl   aboutname font-bold text-purple-700 mb-4">Meet Our Founder</h2>
                                <p className="text-gray-700 mb-4">
                                    Divyanshu Sharma is the visionary founder behind CodeCafe. With over three years of software development experience,
                                    including roles as a Senior Frontend Developer in a German company, Divyanshu's passion for technology and commitment
                                    to accessibility drive CodeCafe's mission to empower developers worldwide.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    As the Founder and CEO of CodeCafe, Divyanshu envisions a vibrant hub where individuals come together to share knowledge,
                                    collaborate on projects, and forge meaningful relationships. His mission is to provide comprehensive resources, foster a
                                    sense of belonging, and inspire the next generation of developers.
                                </p>

                                <div className="flex justify-center space-x-4">
                                    <a href="https://www.linkedin.com/in/divyanshu-sharma-2a0060244/" target="_blank">
                                        <i className="fab fa-linkedin text-3xl text-blue-600"></i>
                                    </a>
                                    <a href="https://www.instagram.com/sharmadivyanshu281/" target="_blank">
                                        <i className="fab fa-instagram text-3xl text-purple-600"></i>
                                    </a>
                                </div>


                                <div className="flex justify-center mt-10 space-x-4">
                                    <div className="text-center rounded-lg shadow-lg p-4">
                                        <img src={Sai} alt="Company 1" className="h-16 " />
                                        <h3 className="text-sm font-medium text-gray-700 mt-2">Ex Frontend Developer at Sheer Anylatic & Private insights </h3>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>


                </div>

                <div className="py-10">
                    <div className="container pb-5 mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="w-full md:w-3/4 lg:w-2/2 p-6 bg-white rounded-lg shadow-lg border-2 border-[#760fcb]">
                                <div className="mb-6">
                                    <h2 className="text-4xl   aboutname font-bold text-[#760fcb] mb-8 text-center">Our Vision</h2>
                                    {/* Placeholder for your vision statement */}
                                    <p className="text-gray-800 leading-relaxed">
                                        The vision of CodeCafe is to become the ultimate destination for developers worldwide, aiming to establish itself as the largest tech community platform where programmers from all corners of the globe can gather, connect, and engage. We envision CodeCafe as a vibrant hub where individuals come together to share knowledge, collaborate on projects, and forge meaningful relationships. Our mission is not only to provide comprehensive resources for learning and growth but also to foster a sense of belonging and camaraderie within the tech community. By uniting programmers worldwide, we aspire to create a legacy of innovation, empowerment, and collective success at CodeCafe.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Clints Review comes here */}
                <div className='mt-10'>
                    <Slider />
                </div>

                {/* Students Review */}

                <div className='p-10' >
                    <StudentReview />
                </div>

                {/* FAQ */}
                <div className='mt-20'>
                    <Faq />
                </div>
            </div>

            <Footer />
        </>

    )
}

export default About
