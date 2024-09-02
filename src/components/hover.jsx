import HoverEffect from "../components/ui/card-hover-effect";
import administrator1 from '../assets/administrato.png';
import learningg from '../assets/learningg.png';
import Solution from '../assets/solution.png';
import Stats from '../assets/stats.png';
import Partner from '../assets/partners.png';
import Groupchat from '../assets/Groupchat.png';
import Hour from '../assets/Hour.png'

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 my-40">
      <h1 className="text-5xl text-purple-700 font-bold text-center mb-8">
        Why choose CodeCafe?
      </h1>
      <div className="w-full flex justify-center">
        <hr className="w-[30%] border-2" />
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Exemplary Work Ambience",
    image: Solution, // Correctly reference the imported image
   
  },
  {
    title: "Unreserved Work Culture",
  
    image: Hour, // Correctly reference the imported image
  
  },
  {
    title: "Visionary Team",
   
    image: administrator1, // Correctly reference the imported image
  
  },
  {
    title: "Learn as You Work",
 
    image: learningg, // Correctly reference the imported image
  
  },
  {
    title: "Acute Growth Trajectory",

    image: Stats, // Correctly reference the imported image
  
  },
  {
    title: "Enticing Perquisites",
    image: Partner, // Correctly reference the imported image
  },
];

export default CardHoverEffectDemo;
