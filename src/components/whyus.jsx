
import React from "react";
import Why from '../assets/why.mp4'
const BackgroundVideo = () => {
    return (
        <div className="relative w-full mt-60 h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={Why} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
                <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
                    Why Choose CodeCafe?
                </h1>
                <p className="text-white text-lg md:text-xl lg:text-xl max-w-2xl">
                    As an Institute:
                    <br />
                    Comprehensive Curriculum: CodeCafe offers robust courses taught by industry experts, covering both fundamental and advanced programming skills.
                    <br />
                    Modern Facilities: Enjoy state-of-the-art computer labs and a collaborative learning environment.
                    <br />
                    As a Service Provider:
                    Tailored Solutions: CodeCafe provides custom software development, IT consulting, and technical training, ensuring solutions are aligned with client goals.
                    <br />
                    Comprehensive Support: From consultation to implementation, CodeCafe offers ongoing support, ensuring project success and customer satisfaction.
                    <br />
                    <br />
                    Summary:
                    CodeCafe delivers expert-led courses, modern facilities, tailored solutions, and comprehensive support for exceptional learning and client satisfaction.
                </p>
            </div>
        </div>
    );
};

export default BackgroundVideo;