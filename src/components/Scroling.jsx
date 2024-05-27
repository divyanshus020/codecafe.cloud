"use client";

import { Tabs } from "../components/ui/tabs";
import Home1 from '../assets/home2.png'
import Home2 from '../assets/home4.png'
import Home3 from '../assets/home3.png'
import Home4 from '../assets/home1.png'
import Home5 from '../assets/home5.png'
export function TabsDemo() {
    const tabs = [
        {
            title: "SAI",
            value: "Sai",
            image: { Home1 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>
                        Sheer analytics and insights
                    </p>
                    <ImageContent src={Home1} />
                </div>
            ),
        },
        {
            title: "HUBALT",
            value: "HUBALT",
            image: { Home2 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>HubAlt</p>
                    <ImageContent src={Home2} />
                </div>
            ),
        },
        {
            title: "GRILLI",
            value: "GRILLI",
            image: { Home3 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>GRILLI</p>
                    <ImageContent src={Home3} />
                </div>
            ),
        },
        {
            title: "MAGMA",
            value: "MAGMA",
            image: { Home4 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>MAGMA</p>
                    <ImageContent src={Home4} />
                </div>
            ),
        },
        {
            title: "STUDY NOTION",
            value: "STUDY NOTION",
            image: { Home5 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>STUDY NOTION</p>
                    <ImageContent src={Home5} />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="my-20">
                <h1 className="text-center text-4xl font-bold text-purple-700 sm:text-4xl md:text-5xl lg:text-6xl">Let's see our previous projects.</h1>
                <div className="flex w-full justify-center">
                    <hr className="border-2 my-10 w-[50%]" />
                </div>
            </div>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
                <Tabs tabs={tabs} />
            </div>
        </>
    );
}

const ImageContent = ({ src }) => {
    return (
        <img
            src={src}
            alt="tab image"
            className="object-cover object-left-top h-[60%] md:h-[92%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};

export default TabsDemo;
