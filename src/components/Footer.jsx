import React from 'react'
import Logo from "../assets/logo.png"
function Footer() {
    return (
        <footer className=' relative min-h-[280px] px-8 w-full mx-auto py-8 bg-[#760fcb]'>
            <div className='max-w-maxScreen mx-auto flex flex-col gap-y-8'>
                <div className='flex flex-col items-center md:items-start gap-x-24 gap-y-12 md:flex-row md:justify-around md:gap-0 my-6'>
                    <div className='flex flex-col items-center sm:items-start gap-y-3 px-4 text-center md:text-start'>
                        <a href="/" className='flex justify-center items-center gap-x-3'>
                            <img src={Logo} alt="" className='w-[160px] bg-white' />
                        </a>
                        <p class="text-sm max-w-[300px]  text-white font-normal text-neutral-2">The Ultimate Guide To Ace SDE Interviews.</p>
                    </div>
                    <div class="flex flex-col gap-y-3 text-center text-base md:text-left">
                        <p class="font-medium text-center text-white md:text-left">Quick Links</p>
                        <div class="flex flex-col gap-y-2"><a href="/">
                            <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500 ">Home</p>
                        </a>
                            <a href="/#courses">
                                <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500">Courses</p>
                            </a>
                            <a target="_blank" href="https://labs.codehelp.in">
                                <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500">Labs</p>
                            </a>
                            <a href="/contact"><p class="text-sm font-normal text-shark-300 text-white hover:text-indigo-500">Contact</p></a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-3 text-center text-base md:text-left">
                        <p class="font-medium text-center md:text-left text-white">Legal</p>
                        <div class="flex flex-col  gap-y-2">
                            <a href="/privacy-policy">
                                <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500">Privacy Policy</p>
                            </a>
                            <a href="/terms-of-use">
                                <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500">Terms of use</p>
                            </a>
                            <a href="/refund-and-cancellation-policy">
                                <p class="text-sm font-normal text-white text-shark-300 hover:text-indigo-500">Refund &amp; Cancellation Policy</p>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-3 text-center text-base md:text-left">
                        <p class="font-medium text-center text-white md:text-left">GET IN TOUCH</p>
                        <div class="flex items-center gap-3 group"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-5 h-5  fill-shark-300 group-hover:fill-indigo-500">
                            <path d="m1.895 5.026 8.136 8.136c.504.503 1.3.534 1.84.094l.105-.094 8.13-8.13q.04.15.054.308l.007.16v11c0 .967-.748 1.759-1.697 1.829l-.137.005H3.667a1.833 1.833 0 0 1-1.829-1.697l-.005-.137v-11q0-.165.028-.32zm16.438-1.359q.167 0 .326.029l.155.035-7.81 7.81L3.192 3.73q.15-.041.312-.055l.163-.007z">
                            </path>
                        </svg>
                            <p class="font-medium text-white text-shark-300 group-hover:text-indigo-500">
                                <a href="mailto:sharmadivyanshu281@gmail.coms.in">sharmadivyanshu281@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[1px] bg-[#202329]"></div>
                <div class="text-base text-white text-center">
                    Copyright © 2024 Sorting CodeCafe Technologies Pvt Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
