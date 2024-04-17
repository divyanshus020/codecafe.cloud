import React from 'react';
import MernTime from './Merntime';
import { Link } from "react-router-dom";
import Mern from '../assets/MernCourse.png'
const Mernstack = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto p-8">
                    <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">
                        MERN Stack Course Overview by CodeCafe
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold mb-6 text-purple-700">Course Highlights</h2>
                            <p>Our MERN Stack Course at CodeCafe offers a comprehensive learning experience tailored to equip you with the essential skills for modern web development. The course encompasses a deep dive into MongoDB, Express.js, React, and Node.js, covering both frontend and backend technologies. With over 16+ hands-on projects, you'll gain practical experience and build a robust portfolio to showcase your expertise to potential employers. One of the standout features of our course is the Master Real-Time Industry Project, where you'll apply all the skills learned throughout the course to develop a real-world application. We also prioritize soft skills like teamwork and collaboration, ensuring you're well-prepared for professional settings. Additionally, our course includes dedicated interview preparation sessions to boost your confidence and readiness for job interviews. Plus, upon completion, top-performing students have the opportunity for a paid internship, allowing them to gain valuable industry experience. Don't miss out on this comprehensive learning journey that not only enhances your technical skills but also prepares you for a successful career in the tech industry.</p>
                        </div>

                        {/* Right Column */}

                        <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            {/* Course Image */}
                            <div className="mb-6">
                                <img src={Mern} alt="Course" className="w-full h-64 object-cover rounded-lg" />
                            </div>

                            {/* Course Details */}
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-2 text-blue-500">MERN Stack Course</h2>
                                <p className="text-gray-600 mb-4">Price: $4000</p>

                                {/* Trial Info */}
                                <p className="text-gray-700 mb-4">3 Days Free Trial</p>

                                {/* Buy Now Button */}
                                <Link to="/Contact">
                                    <button
                                        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
                                        onClick={() => {
                                            // Handle Buy Now action
                                        }}
                                    >
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Additional Benefits */}
                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-purple-700">Additional Benefits</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Expert-led Video Lectures</li>
                            <li>Interactive Quizzes and Assessments</li>
                            <li>Community Support and Q&A</li>
                            <li>Completion Certificate</li>
                            <li>Paid Internship Opportunity based on Performance</li>
                        </ul>
                    </div>

                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-purple-700">what you'll learn in the MERN Stack Course</h2>
                        <p>In our MERN Stack Course at CodeCafe, you'll embark on an immersive learning journey that covers a wide range of topics essential for full-stack web development. You'll start by mastering MongoDB, a leading NoSQL database, followed by Express.js to build robust backend applications. Next, you'll delve into React, a popular frontend library for building dynamic user interfaces, and Node.js for server-side JavaScript programming. Throughout the course, you'll work on over 16+ hands-on projects that reinforce your learning and help you build a diverse portfolio. Special emphasis is placed on developing a real-time industry project, allowing you to apply your skills in a practical setting. Additionally, the course includes modules on soft skills like teamwork and collaboration, ensuring you're not just technically proficient but also ready for professional environments. Interview preparation sessions are also part of the curriculum, equipping you with the confidence and skills needed to excel in job interviews. By the end of this course, you'll have a solid foundation in MERN stack development, along with the practical experience and soft skills necessary to kickstart a successful career in the tech industry.</p>
                    </div>

                    {/* Roadmap */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-6 text-purple-700">Course Roadmap</h2>
                        {/* Call your Roadmap component here */}

                        <MernTime />
                    </div>

                    {/* FAQ */}
                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-6 text-purple-700">FAQ</h2>
                        <div className="text-gray-700">
                            <h3 className="font-semibold mb-4">Is this course suitable for beginners?</h3>
                            <p>Yes, this course is designed for both beginners and those with some experience in web development.</p>

                            <h3 className="font-semibold mt-6 mb-4">Do I need to know any programming languages beforehand?</h3>
                            <p>Basic understanding of HTML, CSS, and JavaScript will be helpful, but not mandatory.</p>

                            <h3 className="font-semibold mt-6 mb-4">How long is the course?</h3>
                            <p>The course duration is 5 months.</p>

                            <h3 className="font-semibold mt-6 mb-4">Is there any support available during the course?</h3>
                            <p>Yes, you'll have access to community support, Q&A sessions, and mentorship throughout the course.</p>

                            <h3 className="font-semibold mt-6 mb-4">What are the prerequisites for the internship?</h3>
                            <p>Students must complete the course and achieve a certain point threshold to be eligible for the paid internship.</p>
                        </div>
                    </div>





                </div>
            </div>

        </div>
    );
}

export default Mernstack;
