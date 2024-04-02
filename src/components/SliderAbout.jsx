import React from 'react'
import User from '../assets/user.png'
function SliderAbout() {
  return (
    <>
      <div>
        <h1 className='text-center text-[36px] text-purple-700 font-bold aboutname'>Our Clints Reviews</h1>
        <div class="grid grid-cols-1 p-12 mb-10 mt-10 sm:grid-cols-2 gap-8">
          {/* <!-- Testimonial Card 1 --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-center mb-4">
              <img src={User} alt="Client 1" class="rounded-full w-16 h-16" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Prakash Sharma</h3>
            <div class="flex text-xl mb-4">
              <a target='_blank' href="https://www.linkedin.com/in/prakash-sharma-2b31673a/" class="mr-2"><i class="fab fa-linkedin text-blue-500"></i></a>
            </div>
            <p class="text-gray-700">"CodeCafe delivered beyond our expectations with the creation of Hubalt's website. Their professionalism, expertise, and attention to detail made the process seamless. Highly recommended for top-notch web development services."
              <br />
              <br />
              <span className='font-bold'>Prakash Sharma, Founder of Hubalt</span></p>
          </div>

          {/* <!-- Testimonial Card 2 --> */}
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-center mb-4">
              <img src={User} alt="Client 2" class="rounded-full w-16 h-16" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Piyush Goyal</h3>
            <div class="flex mb-4 text-xl">
              <a target='_blank' href="https://www.linkedin.com/in/dt-piyush-goyal-617208263/" class="mr-2"><i class="fab fa-linkedin text-blue-500"></i></a>
            </div>
            <p class="text-gray-700">"CodeCafe did an amazing job creating a responsive form for Holistic Wellness. Their team was dedicated, professional, and paid attention to every detail. We're very happy with their work and highly recommend them for web development."
              <br />
              <br />
             <span className='font-bold'>Piyush Goyal, Founder of Holistic Wellness</span></p>
          </div>

          {/* <!-- Testimonial Card 3 --> */}

        </div>

      </div>
    </>
  )
}



export default SliderAbout
