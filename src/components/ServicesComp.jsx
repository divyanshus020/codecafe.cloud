import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import WebIcon from '../assets/webpage.png'
import Web1 from "../assets/web1.png"
import Mobe from "../assets/mobe.png"
import AI from "../assets/ai.png"
import Cloud from "../assets/cloud.png"
import Back1 from "../assets/back1.png"
import Bot from "../assets/bot.png"
import Ui from "../assets/ui.png"
import Graphic from "../assets/graphic.png"
import Cad from "../assets/cad.png"
import Seo from "../assets/seo.png"
import SocialMarketing from "../assets/SocialMarketing.png"
const ServicesComp = () => {
  const [services] = useState([
    {
      title: 'Web Development',
      description: 'Create stunning websites and web applications that captivate your audience.',
      icon: <img src={Web1} alt="" />
    },
    {
      title: 'Mobile App Development',
      description: 'Build innovative and user-friendly mobile apps for iOS and Android platforms.',
      icon: <img src={Mobe} alt="" />
    },
    {
      title: 'AI Projects',
      description: 'Leverage artificial intelligence to develop intelligent systems and solutions.',
      icon: <img src={AI} alt="" />
    },
    {
      title: 'Cloud Projects',
      description: 'Design, deploy, and manage scalable cloud solutions for your business needs.',
      icon: <img src={Cloud} alt="" />
    },
    {
      title: 'Backend Projects',
      description: 'Develop robust and efficient backend systems to power your applications.',
      icon: <img src={Back1} alt="" />
    },
    {
      title: 'Chatbots',
      description: 'Create conversational interfaces and virtual assistants using chatbot technology.',
      icon: <img src={Bot} alt="" />
    },
    {
      title: 'UI/UX Design',
      description: 'Craft visually appealing and intuitive user interfaces that enhance user experience.',
      icon: <img src={Ui} alt="" />
    },
    {
      title: 'Graphic Designing',
      description: 'Create stunning visuals and graphics for branding, marketing, and digital media.',
      icon: <img src={Graphic} alt="" />
    },
    {
      title: 'AutoCAD Projects',
      description: 'Design and draft precise 2D and 3D models for architectural and engineering projects.',
      icon: <img src={Cad} alt="" />
    },
    {
      title: 'SEO Projects',
      description: 'Optimize websites to rank higher in search engine results and attract more organic traffic.',
      icon: <img src={Seo} alt="" />
    },
    {
      title: 'Social Media Handling',
      description: 'Manage and grow your brand\'s presence on social media platforms with strategic planning and content creation.',
      icon: <img src={SocialMarketing} alt="" />
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Explore Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="p-6 ">

              <div className='flex justify-between'>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                <div className=' w-10 '>
                  {service.icon}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/Contact">
                <a className="inline-block cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Learn More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComp;
