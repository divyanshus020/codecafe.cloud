import React from 'react';
const courses = [

    //  this is just for a object

    {
        id: 1,
        title: 'MERN STACK',
        description: 'MERN stack course: Learn MongoDB, Express.js, React.js, and Node.js for full-stack web development.',
        duration: '6 Months',
        level: 'Beginner - Advanced',
        image: 'https://ih1.redbubble.net/image.671768090.8609/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg'
    },
    {
        id: 2,
        title: 'Blender',
        description: 'Blender CodeCafe Launch: Exciting new course unveiling the power of Blender for 3D modeling and animation enthusiasts. Join the revolution!    ',
        duration: '2 months',
        level: 'Coming soon',
        image: 'https://logos-world.net/wp-content/uploads/2023/05/Blender-Logo.png'
    },
    {
        id: 3,
        title: 'Auto Cad',
        description: 'CodeCafe Autocad Course Launch: Explore the world of AutoCAD with our comprehensive course designed for aspiring designers and engineers.',
        duration: '5 weeks',
        level: 'Coming soon',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4q-m_5Crn6gYKsq31vu0trfT5f0OW72QWd6yvp9otw&s'
    },
    {
        id: 4,
        title: 'Adobe Illustrator',
        description: 'CodeCafe Adobe Illustrator Course Launch: Unleash your creativity with our comprehensive course for aspiring graphic designers.',
        duration: '10 weeks',
        level: 'Coming soon',
        image: 'https://www.syntaxworld.in/assets/svg-image/adobe-illustrator-course.png'
    },
    {
        id: 5,
        title: 'Figma',
        description: 'CodeCafe Figma Course Launch: Dive into the world of UI/UX design with our comprehensive Figma course. Join us and unleash your creativity!',
        duration: '12 weeks',
        level: 'Coming soon',
        image: 'https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png'
    },
    {
        id: 6,
        title: 'Interview Preparation',
        description: 'CodeCafe Interview Preparation Launch: Elevate your career prospects with our comprehensive interview preparation course.',
        duration: '2 weeks',
        level: 'Coming soon',
        image: 'https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png'
    }
];

const Course = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                    "Empowering Learning: CodeCafe's Expanding Course Offerings"</h2>
                <p className="text-gray-700 mb-4">
                    CodeCafe is proud to announce the launch of several new courses, catering to a diverse range of interests and skill levels. From mastering industry-standard software like AutoCAD and Adobe Illustrator to exploring cutting-edge design tools like Figma, we offer comprehensive training that empowers individuals to unleash their creativity and excel in their chosen fields. Additionally, our interview preparation course is designed to equip candidates with the skills and confidence needed to succeed in competitive job markets. At CodeCafe, we're committed to providing high-quality education that prepares learners for real-world challenges and opens doors to exciting career opportunities. Join us on this journey of growth and discovery as we continue to expand our offerings and empower individuals to achieve their goals.
                </p>

            </div>
            <h1 className="text-[36px] aboutname text-purple-600 font-bold text-center mb-10 mt-20">
                "Explore Our Diverse Course Catalog"</h1>
            <div className=" BFG grid rounded-lg shadow-lg p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="bg-white shadow-lg rounded-md overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-2">{course.description}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500">{course.duration}</p>
                                <p className="text-gray-500">{course.level}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;