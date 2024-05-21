import React from 'react';
import AutocadMap from './AutoCadMap';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { LampDemo } from './LampDemo';
import GridBackgroundDemo from './Autocadcomp'
const Autocad = () => {
    return (
        <div>
            <GridBackgroundDemo />
            <div className="min-h-screen flex items-center justify-center">
                <div className="container mx-auto p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold mb-6 text-purple-700">Course Highlights</h2>
                            <p>

                                At CodeCafe, our AutoCAD course is a comprehensive program designed to provide you with a deep understanding of 2D and 3D drafting, modeling, and design using AutoCAD's powerful features. Throughout the course, you'll progress from mastering basic drafting techniques to advanced 3D modeling and layout designs. One of the course highlights is the opportunity to work on over 16 real-world projects, giving you hands-on experience and helping you build a portfolio that showcases your skills to potential employers. These projects cover a range of topics and complexities, ensuring you're well-prepared for various industry challenges.

                                In addition to technical skills, we focus on preparing you for the professional world. Our course includes interview preparation sessions, resume-building workshops, and teamwork exercises to enhance your soft skills and collaborative abilities. As an added benefit, top-performing students have the opportunity to secure a paid internship after completing the course, providing valuable industry experience.

                                To help you make an informed decision, we offer a 3-day free trial, allowing you to experience our teaching methods and course content before committing to the full program. Join us at CodeCafe to unlock your potential in drafting and design with AutoCAD.
                            </p>
                        </div>

                        {/* Right Column */}

                        <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            {/* Course Image */}
                            <div className="mb-6">
                                <img src="https://www.thinknexttraining.com/images/what-is-autocad-min.jpg" alt="Course" className="w-full h-64 object-cover rounded-lg" />
                            </div>

                            {/* Course Details */}
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-2 text-blue-500">Autocad Course</h2>
                                <p className="text-gray-600 mb-4">Price:₹10,000</p>

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
                        <h2 className="text-3xl font-semibold mb-6 text-purple-700">Additional Benefits</h2>
                        <ul className=" list-inside text-gray-700 p-7">
                            <li className='list-disc'>40+ Desgins: Gain hands-on experience with a variety of Desgins.</li>
                            <li className='list-disc'>Master Real-Time Industry Project: Work on a project that mirrors industry standards.</li>
                            <li className='list-disc'>Teamwork and Soft Skills: Develop essential soft skills like communication, problem-solving, and teamwork.</li>
                        </ul>
                    </div>

                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-semibold mb-6 text-purple-700">what you'll learn in the Blender Course</h2>
                        <p className='text-base'>
                            <br />
                            1. 2D Drafting in AutoCAD
                            <br />
                            Understanding Basic Elements: Learn about lines, polylines, circles, arcs, and other essential drawing elements.
                            <br />
                            Creating and Modifying Objects: Techniques for drawing and editing shapes, using commands like trim, extend, offset, and mirror.
                            <br />
                            Layers and Line Types: Organizing your drawing with layers, setting line types, and understanding layer properties.
                            <br />
                            Annotations and Dimensions: Adding text, dimensions, and leaders to your drawings to communicate detailed information.
                            <br />
                            <br />
                            2. 3D Modeling in AutoCAD
                            <br />
                            Basic 3D Object Creation: Using primitives like boxes, cylinders, and spheres to create basic 3D models.
                            <br />
                            Advanced 3D Modeling Techniques: Learning about solid modeling, surface modeling, and mesh modeling.
                            <br />
                            Using the UCS: Understanding and manipulating the User Coordinate System for accurate 3D modeling.
                            <br />
                            Rendering and Visualization: Applying materials, setting up lights, and rendering scenes to create realistic images.
                            <br />
                            <br />
                            3. Drafting and Annotation
                            <br />
                            Drafting Standards: Understanding and applying industry standards for architectural and engineering drawings.
                            <br />
                            Templates and Title Blocks: Creating and using templates to standardize drawings, and designing title blocks.
                            <br />
                            Annotation Tools: Using tools for adding notes, dimensions, and other annotations to your drawings.
                            <br />
                            <br />

                            4. Layout and Printing
                            <br />
                            Model Space and Paper Space: Working with model space for drafting and paper space for plotting.
                            Viewports: Setting up and managing viewports to control the display of different parts of your drawing.
                            <br />
                            Plotting and Printing: Configuring plot settings, choosing the right scale, and printing drawings to scale
                            <br />
                            <br />

                            5. Advanced Features
                            <br />
                            Blocks and Attributes: Creating and using blocks to streamline repetitive tasks, and adding attributes to blocks for more detailed information.
                            <br />
                            Dynamic Blocks: Creating blocks with flexible parameters and actions.
                            <br />
                            Xrefs (External References): Attaching and managing external references to keep drawings up-to-date with changes from other files.

                            <br />
                            <br />
                            6. Project Management
                            <br />
                            Project Setup: Setting up project directories and organizing files efficiently.
                            <br />
                            Collaboration Tools: Using AutoCAD's collaboration features to work with team members and share drawings.
                            <br />
                            File Management: Understanding file formats, saving practices, and version control.
                        </p>
                    </div>

                    {/* Roadmap */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold mb-6 text-purple-700">Course Roadmap</h2>
                        {/* Call your Roadmap component here */}

                        <AutocadMap />
                    </div>

                    {/* FAQ */}
                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-purple-700">FAQ</h2>
                        <div className="text-gray-700 text-base">
                            <h3 className="font-semibold mb-4">Is this course suitable for beginners?</h3>
                            <p>Yes, this course is designed for both beginners and those with some experience in Autocad.</p>

                            <h3 className="font-semibold mt-6 mb-4">Do I need prior experience with Autocad?</h3>
                            <p>A: No, our courses cater to both beginners and those with some experience.</p>

                            <h3 className="font-semibold mt-6 mb-4">Is there any post-course support?</h3>
                            <p>A: Yes, we offer post-course support through our community forums and one-on-one mentorship.</p>

                            <h3 className="font-semibold mt-6 mb-4">How does the 3-day free trial work?</h3>
                            <p>A: The 3-day free trial allows you to access a limited set of course materials to get a feel for our teaching style and course content.</p>

                        </div>
                    </div>

                    <div className="mt-16 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <p className='text-base'>By enrolling in CodeCafe's Autocad course, you'll not only master the technical skills but also gain the confidence and soft skills needed to excel in the industry. Our comprehensive approach ensures that you're well-equipped to tackle real-world challenges and stand out in the competitive job market.</p>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Autocad;




