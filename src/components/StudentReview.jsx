import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import User from "../assets/user.png";
const reviews = [
    { id: 1, name: 'Dev Pal Singh', text: 'It was an amazing experience for 3 days in codecafe your teaching skill are very good and I hope we will work together in future' },
    { id: 2, name: 'Ajay Patel', text: "Very helpful with the practice and they made it easy to understand the things which would take longer if it weren't for them." },
    { id: 3, name: 'Komal', text:"My experience with codecafe was mind blowing obviously The type of content and the topics covered by codecafe was intresting too. The best part about this was that the instructor made us work on what he was teaching! All in all had a great experience of 3days learning a hand full of new topics Thank you codecafe and team!"},
    { id: 4, name: 'Mayank', text:"Attending this workshop was a game-changer for me. Thank you, CodeCafe!"},
    { id: 5, name: 'Bhavana.S', text:"I highly recommend this workshop to anyone interested in coding. It's worth it!"},
];

const StudentReview = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <h1 className='text-center pb-10 text-[36px] font-bold aboutname text-purple-600 '>Students Review</h1>
            <div className="max-w-lg mx-auto">
                <Transition
                    show={true}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div key={reviews[index].id} className="bg-white shadow-md rounded-md p-6 text-center">
                        <img src={User} alt={`Student ${reviews[index].id}`} className="w-16 h-16 mx-auto rounded-full mb-4" />
                        <h3 className="text-lg font-semibold mb-1">{reviews[index].name}</h3>
                        <p className="text-gray-600">{reviews[index].text}</p>
                    </div>
                </Transition>
            </div>
        </>
    );
};

export default StudentReview
