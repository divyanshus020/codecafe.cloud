"use client";

import { Tabs } from "../components/ui/tabs";
import Home1 from '../assets/home2.png'
import Home2 from '../assets/home4.png'
import Home3 from '../assets/home3.png'
import Home4 from '../assets/home1.png'
import Home5 from '../assets/home5.png'
import Home6 from '../assets/basant.png'
import Home7 from '../assets/Shreehans.png'
import Home8 from '../assets/Shoperstop.png'
import Home9 from '../assets/Dealds.png'
export function TabsDemo() {
    const tabs = [
        {
            title: "SAI",
            value: "Sai",
            image: { Home1 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">
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
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">HubAlt</p>
                    <ImageContent src={Home2} />
                </div>
            ),
        },
        {
            title: "GRILLI",
            value: "GRILLI",
            image: { Home3 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">GRILLI</p>
                    <ImageContent src={Home3} />
                </div>
            ),
        },
        {
            title: "MAGMA",
            value: "MAGMA",
            image: { Home4 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">MAGMA</p>
                    <ImageContent src={Home4} />
                </div>
            ),
        },
        {
            title: "STUDY NOTION",
            value: "STUDY NOTION",
            image: { Home5 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">STUDY NOTION</p>
                    <ImageContent src={Home5} />
                </div>
            ),
        },
        {
            title: "BASANT",
            value: "BASANT",
            image: { Home6 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">BASANT</p>
                    <ImageContent src={Home6} />
                </div>
            ),
        },
        {
            title: "SHREEHANS",
            value: "SHREEHANS",
            image: { Home7 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">SHREEHANS</p>
                    <ImageContent src={Home7} />
                </div>
            ),
        },
        {
            title: "SHOPERSTOP",
            value: "SHOPERSTOP",
            image: { Home8 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">SHOPERSTOP</p>
                    <ImageContent src={Home8} />
                </div>
            ),
        },
        {
            title: "DEALDS",
            value: "DEALDS",
            image: { Home9 },
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="mb-4 sm:mb-6">DEALDS</p>
                    <ImageContent src={Home9} />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="my-8 sm:my-12 md:my-20 px-4">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 leading-tight">
                    Let's see our previous projects.
                </h1>
                <div className="flex w-full justify-center">
                    <hr className="border-2 my-6 sm:my-8 md:my-10 w-[80%] sm:w-[70%] md:w-[50%]" />
                </div>
            </div>
            <div className="h-[16rem] sm:h-[20rem] md:h-[30rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-6 sm:my-8 md:my-10 px-4">
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
            className="object-cover object-left-top h-[50%] sm:h-[60%] md:h-[80%] lg:h-[92%] absolute -bottom-6 sm:-bottom-8 md:-bottom-10 inset-x-0 w-[85%] sm:w-[90%] rounded-xl mx-auto"
        />
    );
};


export default TabsDemo;
