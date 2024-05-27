import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Learning from '../assets/learning.png'
import Teaching from '../assets/teaching.png'
import Community from '../assets/Community.png'
import Practical from '../assets/practical.png'
import Containue from '../assets/Containue.png'

const content = [
    {
        title: "Learning Resources",
        description:
            "Codecafe provides access to a wide range of learning materials such as tutorials, courses, and articles covering various programming topics. These resources enable you to acquire new skills, learn different programming languages, and deepen your understanding of programming concepts.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img
                    src={Learning}
                    className="h-full w-full object-cover"
                    alt="Learning Resources"
                />
            </div>
        ),
    },
    {
        title: "Community Engagement",
        description:
            "Codecafe fosters community interaction by offering forums, discussion boards, and online communities where learners can ask questions, share knowledge, and collaborate with peers and experts. Engaging with this community provides opportunities for learning from others, receiving feedback, and gaining insights from different perspectives.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <img
                    src={Community}
                    className="h-full w-full object-cover"
                    alt="Real-time Changes"
                />
            </div>
        ),
    },
    {
        title: "Practical Experience",
        description:
            "Codecafe often includes coding challenges, projects, and competitions that allow you to apply your knowledge in practical settings. These hands-on experiences help reinforce learning, develop problem-solving skills, and build a portfolio of projects that demonstrate your abilities to potential employers or collaborators.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <img
                    src={Practical}
                    className="h-full w-full object-cover"
                    alt="Version Control"
                />
            </div>
        ),
    },
    {
        title: "Continuous Learning",
        description:
            "Codecafe offers a platform for continuous learning, allowing you to stay updated with the latest developments in the programming world. Through regular content updates, new courses, and articles, you can stay abreast of emerging technologies, trends, and best practices in the field.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img
                    src={Containue}
                    className="h-full w-full object-cover"
                    alt="Running Out of Content"
                />
            </div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <div className="p-10">
                <h1 className="text-center text-4xl font-bold text-purple-700 sm:text-4xl md:text-5xl lg:text-6xl">How Codecafe Helps You Become the Best Programmer</h1>
                <br />
                <div className="flex justify-center">
                    <hr className="border-2 w-[50%]" />
                </div>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}

export default StickyScrollRevealDemo;
