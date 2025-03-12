import React from 'react'
import Logo from "../assets/logo.png"

function Footer() {
    return (
        <footer className='relative min-h-[200px] px-8 w-full mx-auto py-8 bg-[#760fcb]'>
            <div className='max-w-maxScreen mx-auto flex flex-col gap-y-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-y-6 my-6'>
                    <div className='flex flex-col items-center md:items-start gap-y-3'>
                        <a href="/" className='flex items-center gap-x-3'>
                            <img src={Logo} alt="CodeCafe Logo" className='w-[160px] bg-white' />
                        </a>
                        <p className="text-sm max-w-[300px] text-white font-normal">
                            The Ultimate Guide To Ace SDE Interviews.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-y-3 items-center md:items-end">
                        <p className="font-medium text-white">GET IN TOUCH</p>
                        <div className="flex items-center gap-3 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="w-5 h-5 fill-white group-hover:fill-indigo-200">
                                <path d="m1.895 5.026 8.136 8.136c.504.503 1.3.534 1.84.094l.105-.094 8.13-8.13q.04.15.054.308l.007.16v11c0 .967-.748 1.759-1.697 1.829l-.137.005H3.667a1.833 1.833 0 0 1-1.829-1.697l-.005-.137v-11q0-.165.028-.32zm16.438-1.359q.167 0 .326.029l.155.035-7.81 7.81L3.192 3.73q.15-.041.312-.055l.163-.007z">
                                </path>
                            </svg>
                            <a href="mailto:codecafe.in@hotmail.com" className="font-medium text-white hover:text-indigo-200">
                                codecafe.in@hotmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/20"></div>
                
                <div className="text-sm text-white text-center">
                    Copyright © 2024 Sorting CodeCafe Technologies Pvt Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
