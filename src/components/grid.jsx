import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";

import Growth from '../assets/growth.png';
import Interview from '../assets/interview.png'
import Feedback from '../assets/feedback.png'
import Teamwork from '../assets/teamwork.png'
import Tasks from '../assets/tasks.png'

export function BentoGridDemo() {
  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <h1 className="text-center text-4xl mb-4 font-bold text-purple-700 sm:text-4xl md:text-5xl lg:text-6xl">1:1 Mentorship sessions</h1>
      <p className="text-l font-bold text-center">Personalised guidance to prepare you for your interview needs</p>
      <div class="flex w-full justify-center">
        <hr class="border-2 my-6 w-[50%]"/>
        </div>
      <BentoGrid className="gap-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton image={item.image} />}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
    <img src={image} alt="Header" className="object-cover w-full h-full rounded-lg" />
  </div>
);

const items = [
  {
    title: "Mock interview",
    description: "Nail coding assessments and technical challenges. Gain insights into problem-solving and algorithmic thinking.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: Interview
  },
  {
    title: "Profile review",
    description: "Get your profile & resume reviewed by industry leaders. Focus on different aspects of your job search.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: Feedback
  },
  {
    title: "Project guidance",
    description: "Career counselling with industry experts. Get assistance on how to build real-time projects.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: Growth
  },
  {
    title: "Teamwork and Collaboration",
    description: "Engage in team-based projects to experience real-world collaboration and project management.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: Teamwork
  },
  {
    title: "Continuous Feedback and Improvement",
    description: "Track your progress through regular assessments and adjust the learning plan as needed.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: Tasks
  },
];

const BentoGridItem = ({ title, description, header, icon, className }) => {
  return (
    <div className={cn("p-4 rounded-xl shadow-md flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg", className)}>
      {header}
      <div className="mt-4">
        {icon}
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default BentoGridDemo;
