"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { BackgroundBeams } from "../components/ui/background-beams";

export function AnimatedPinDemo() {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center">
        {/* <BackgroundBeams/> */}
      <PinContainer
        title="/Codecafe.netlify"
        // href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            CODECAFE
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              LOCATION AT
            </span>
          </div>
          <iframe
            className="flex flex-1 w-full rounded-lg mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0529260029975!2d72.96323307546992!3d26.227469789202473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418936ec67f839%3A0x10da2bad1b354a31!2sAmargarh%20Resort%20by%20Neelkanth%20Alura!5e0!3m2!1sen!2sin!4v1716783977412!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </PinContainer>
    </div>
  );
}

export default AnimatedPinDemo;
