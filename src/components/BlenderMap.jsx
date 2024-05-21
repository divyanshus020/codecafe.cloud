import React from "react";
// import { calsans } from "@/fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

// Define the images object
const images = {
    image1: "https://i.all3dp.com/wp-content/uploads/2022/01/31151522/3d-print-with-blender-aftab-ali-via-all3dp-220114.jpg",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWel7mFoCXmOMjPVifDWW0nAcJAnaZim9_X7bmMCLtSA&s",
    image3: "https://blenderartists.org/uploads/default/original/4X/c/0/9/c09169065540a7215a99ca327821c3c6ce372f4e.jpeg",
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
        title: "3D Modeling in Blender",
        description: (
            <>
                <ul className='text-ml px-10'>
                    <li className='list-disc text-base'>Understanding Meshes and Vertices</li>
                    <li className='list-disc text-base'>Basic 3D Object Creation</li>
                    <li className='list-disc text-base'>Modeling Techniques: Extrude, Loop Cut, Bevel</li>
                    <li className='list-disc text-base'>Modifier Stack and Boolean Operations</li>
                    <li className='list-disc text-base'>Sculpting and Retopology</li>
                    <li className='list-disc text-base'>Advanced Modeling: Hard Surface and Organic Modeling</li>
                    <li className='list-disc text-base'>Model Optimization and Cleanup</li>
                </ul>
            </>
        ),
        badge: "3D Modeling in Blender",
        image: images.image1,
    },

    {
        title: "Lighting and Texturing in Blender",
        description: (
            <>
                <ul className='text-ml px-10'>
                    <li className='list-disc text-base'>Particle Systems for Effects</li>
                    <li className='list-disc text-base'>Fluid and Smoke Simulation</li>
                    <li className='list-disc text-base'>Cloth and Hair Dynamics</li>
                </ul>
            </>
        ),
        badge: "Lighting and Texturing in Blender",
        image: images.image2,
    },

    {
        title: "Rendering in Blender",
        description: (
            <>
                <ul className='text-ml px-10'>
                    <li className='list-disc text-base'>Setting Up Render Engines: Cycles vs Eevee</li>
                    <li className='list-disc text-base'>Understanding Render Settings</li>
                    <li className='list-disc text-base'>Sampling and Noise Reduction</li>
                    <li className='list-disc text-base'>Camera Settings and Composition</li>
                    <li className='list-disc text-base'>Rendering Passes: Diffuse, Glossy, Specular, etc.</li>
                    <li className='list-disc text-base'>Post-Processing in Blender's Compositor</li>
                    <li className='list-disc text-base'>Output Formats and Compression</li>
                </ul>
            </>
        ),
        badge: "Rendering in Blender",
        image: images.image3,
    },
];

export default TracingBeamDemo;