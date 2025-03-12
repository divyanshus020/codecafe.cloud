import React from 'react'
import Footer from '../components/Footer'
function Contact() {
    return (
        <div className=''>
            <div className='class="animate__animated animate__fadeIn animate__fast mt-20 '>
                <div className='relative h-fit w-[100%] overflow-hidden bg-[#000] '>
                    <div className='backround-contact sm:h-[65vh] h-[50vh] w-full opacity-40 flex items-center'>
                        <div className='absolute sm:top-1/3 top-1/4 left-0 w-full text-[#fff]'>
                            <div className="mx-auto max-w-maxScreen px-12 sm:text-start text-center ">
                                <p class="sm:text-[52px] text-5xl font-bold">Get In Touch</p>
                                <p class="sm:text-lg text-base">The Ultimate Guide To Ace SDE Interviews.</p>
                            </div>
                        </div>

                    </div>

                    <div className='mx-auto mt-10 flex h-full w-[80%] max-w-maxScreen -translate-y-20 flex-col shadow-md md:flex-row'>

                        <div className='lg:w-[70%] md:w-[60%] bg-[#181a1b]'>
                            <div className='bg-[#181a1b] px-10 py-12 rounded-xl'>
                                <div className='flex sm:flex-row flex-col justify-between items-center sm:text-4xl text-2xl mb-14'>
                                    <p className="font-bold text-center text-[#e8e6e3]">Send us a message</p>
                                    <div className="text-brand opacity-1 text-[#]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-5 h-5 fill-white stroke-white"><path d="m1.895 5.026 8.136 8.136c.504.503 1.3.534 1.84.094l.105-.094 8.13-8.13q.04.15.054.308l.007.16v11c0 .967-.748 1.759-1.697 1.829l-.137.005H3.667a1.833 1.833 0 0 1-1.829-1.697l-.005-.137v-11q0-.165.028-.32zm16.438-1.359q.167 0 .326.029l.155.035-7.81 7.81L3.192 3.73q.15-.041.312-.055l.163-.007z">
                                        </path>
                                        </svg>
                                    </div>
                                </div>
                                <form className='Contact-form' method='post'>
                                    <div className='grid gap-8 md:grid-cols-2 grid-cols-1 mb-8'>
                                        <div className='flex flex-col gap-2'>
                                            <label className='text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                                "Name"
                                                <sup class="text-pink-500">*</sup>
                                            </label>

                                            <input type="text" className='flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]' id='name' placeholder='Enter your name' name='name' />
                                        </div>


                                        <div className='flex flex-col gap-2'>
                                            <label className='text-sm font-medium leading-none   text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                                Email
                                                <sup class="text-pink-500">*</sup>
                                            </label>

                                            <input type="email" className='flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]' id='Email' placeholder='Enter your email' name='Email' />
                                        </div>


                                        <div className='flex flex-col gap-2'>
                                            <label className='text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                                Phone Number
                                                <sup class="text-pink-500">*</sup>
                                            </label>

                                            <input type="text" className='flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]' id='PhoneNumber' placeholder='Enter your phone number' name='PhoneNumber' />
                                        </div>


                                        <div className='flex flex-col gap-2'>
                                            <label className='text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                                Subject
                                                <sup class="text-pink-500">*</sup>
                                            </label>

                                            <input type="text" className='flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]' id='subject' placeholder='Enter your subject' name='Subject' />
                                        </div>
                                    </div>
                                    <div class="grid">
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-medium leading-none  text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Message
                                                <sup class="text-pink-500">*</sup>
                                            </label>
                                            <input class="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[0.4rem]" id="message" placeholder="Enter your message" type="text" name="message" />
                                        </div>
                                        <div class="flex mt-2 lg:mt-0 md:flex-row-reverse md:justify-start justify-center">
                                            <button class="justify-center whitespace-nowrap font-medium ring-offset-background transition-colors 
                                            mt-4 text-white
                                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground px-6 h-12 py-2 flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem] hover:bg-brand rounded-[0.4rem]" type="submit">Submit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send ">
                                                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                                                    <path d="M22 2 11 13"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center sm:items-start items-center gap-4 bg-[#760fcb] px-5 py-8 text-[#fff] lg:w-[40%] md:w-[40%]'>
                            <p class="text-2xl font-bold">Contact Information</p>
                            <div className='grid h-[440px] place-content-center w-2/3 place-self-center gap-4'>
                                <div className='flex gap-2 items-center flex-col'>
                                    <div className='class="mx-auto grid h-[52px] w-[52px] place-content-center rounded-lg bg-[#2e3982]text-2xl"'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" class="w-8 h-8 fill-white group-hover:fill-indigo-500"><path d="m1.895 5.026 8.136 8.136c.504.503 1.3.534 1.84.094l.105-.094 8.13-8.13q.04.15.054.308l.007.16v11c0 .967-.748 1.759-1.697 1.829l-.137.005H3.667a1.833 1.833 0 0 1-1.829-1.697l-.005-.137v-11q0-.165.028-.32zm16.438-1.359q.167 0 .326.029l.155.035-7.81 7.81L3.192 3.73q.15-.041.312-.055l.163-.007z"></path>
                                        </svg>
                                    </div>
                                    <p class="text-center">codecafe.in@hotmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 text-xl md:text-3xl'>
                                <a target="_blank" class="hover:scale-115 hover:shadow-xl" href="https://www.linkedin.com/in/divyanshu-sharma-2a0060244/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>

                                <a target="_blank" class="hover:scale-115 hover:shadow-xl" href="https://www.instagram.com/codecafe.in/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill='none' stroke='currentColor' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
                                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        <Footer/>
        </div>
    )
}

export default Contact
