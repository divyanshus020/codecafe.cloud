"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words =  `
"At CodeCafe, every line of code is a step towards innovation. Join a community where creativity meets technology, and ideas come to life. Crafting excellence with every brew, we fuel your passion for coding. Connect, collaborate, and caffeinate – welcome to CodeCafe, where code and coffee blend seamlessly."
`;


export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}


export default TextGenerateEffectDemo;
