import React from "react";
// import { calsans } from "@/fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

// Define the images object
const images = {
    image1: "https://w7.pngwing.com/pngs/152/784/png-transparent-dwg-autocad-dxf-computer-aided-design-computer-software-cad-miscellaneous-label-logo-thumbnail.png",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXoTkJ6sbqw0d8ba61FH0C2hcIYbdSUQnUVuozSQHjw&s",
    image3: "https://damassets.autodesk.net/content/dam/autodesk/www/images/autocadltmotorcycle-2.jpg",
    image4: "https://5.imimg.com/data5/SELLER/Default/2022/11/ZO/FE/DX/82282074/autocad-3d-floor-plan-service.jpg",
    image5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkodB86cbxnM5VpWon1fFrfmeubMD1HlrOHfIqQGD8ag&s",
    image6: "https://www.trouttool.co.uk/wp-content/uploads/2017/12/big.png",
    image7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bpHtqeKwFjOJeBYWC_Zk-N_3sbX8OJa4rAPk_agAbA&s",
    image8: "https://1.bp.blogspot.com/-nW6YPdygci4/YD12Tzn_FlI/AAAAAAAAEJw/J6mSKqYPV1oUCIctXm-7UnSQR_2FuAwtQCLcBGAsYHQ/s16000-rw/Complete%2BIndustrial%2BPlant%2BProject%2BPlans%2B%255BDWG%255D%2B%25285%2529.png",
    image9: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvpoHDSdv_8JBJoUFZZ-Hbo8R-dBY2R7OZX3hCbFPkw&s",
};

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="100"
                                    width="200"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Introduction to AutoCAD",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Overview and History</li>
                    <li className='list-disc'>Key Features and Benefits</li>
                </ul>
            </>
        ),
        badge: "WELLCOME TO AUTOCAD",
        image: images.image1,
    },

    {
        title: "Getting Started with AutoCAD",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Installation and Setup</li>
                    <li className='list-disc'>User Interface Overview</li>
                    <li className='list-disc'>Basic Commands and Operations</li>
                </ul>
            </>
        ),
        badge: "Installation",
        image: images.image2,
    },

    {
        title: "2D Drafting and Annotation",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Drawing Basic Shapes</li>
                    <li className='list-disc'>Editing and Modifying Drawings</li>
                    <li className='list-disc'>Working with Layers</li>
                    <li className='list-disc'>Dimensioning and Annotating</li>
                    <li className='list-disc'>Plotting and Printing</li>
                </ul>
            </>
        ),
        badge: "2D Drafting",
        image: images.image3,
    },
    {
        title: "3D Modeling",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Introduction to 3D Modeling</li>
                    <li className='list-disc'>Creating and Modifying 3D Objects</li>
                    <li className='list-disc'>Using UCS and Viewports</li>
                    <li className='list-disc'>Rendering and Visualization</li>
                </ul>
            </>
        ),
        badge: "3D Modeling",
        image: images.image4,
    },
    {
        title: "Advanced AutoCAD Features",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Blocks and Attributes</li>
                    <li className='list-disc'>Dynamic Blocks</li>
                    <li className='list-disc'>Xrefs (External References)</li>
                    <li className='list-disc'>Customizing AutoCAD</li>
                </ul>
            </>
        ),
        badge: "Advance",
        image: images.image5,
    },
    {
        title: "Productivity Tools",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Using Templates</li>
                    <li className='list-disc'>Automation with Scripts and Macros</li>
                    <li className='list-disc'>Collaboration Tools</li>
                </ul>
            </>
        ),
        badge: "Tools",
        image: images.image6,
    },
    {
        title: "Project Management",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Project Setup and Organization</li>
                    <li className='list-disc'>File Management and Version Control</li>
                    <li className='list-disc'>Collaboration and Teamwork</li>
                </ul>
            </>
        ),
        badge: "Management",
        image: images.image7,
    },
    {
        title: "Industry Applications",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li lassName='list-disc'>Architectural Design</li>
                    <li lassName='list-disc'>Mechanical Design</li>
                    <li lassName='list-disc'>Civil Engineering</li>
                    <li lassName='list-disc'>Electrical Design</li>
                </ul>
            </>
        ),
        badge: "Industry Applications",
        image: images.image8,
    },
    {
        title: "Professional Development",
        description: (
            <>
                <ul className="text-ml px-10">
                    <li className='list-disc'>Preparing for Certification Exams</li>
                    <li className='list-disc'>Building a Portfolio</li>
                    <li className='list-disc'>Resume and Interview Preparation</li>
                </ul>
            </>
        ),
        badge: "Professional Development",
        image: images.image9,
    },
];

export default TracingBeamDemo;