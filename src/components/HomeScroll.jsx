import React from 'react';


const cardData = [
    {
        image: "https://files.codingninjas.com/fullstack-32956.png",
        title: "MERN STACK WEB DEVELOPMENT",
        detail1: "6 Month +",
        detail2: "300 Problems",
        detail3: "16+ Project"
    },
    {
        image: "https://files.codingninjas.com/data-analytics-33356.webp",
        title: "AUTOCAD",
        detail1: "120+ Hours",
        detail2: "Industral",
        detail3: "40+ Desgins"
    },
];

const Scroll = ({ image, title, detail1, detail2, detail3 }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center p-10 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 m-4 cursor-pointer">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img
                    src={image}
                    alt="Rounded Image"
                    className="w-24 h-24 rounded-full"
                />
            </div>
            <div className="flex-grow">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <div className="flex justify-between mt-4">
                    <div className="text-center w-full sm:w-auto sm:flex-1">
                        <p className="text-sm">{detail1}</p>
                    </div>
                    <div className="text-center w-full sm:w-auto sm:flex-1">
                        <p className="text-sm">{detail2}</p>
                    </div>
                    <div className="text-center w-full sm:w-auto sm:flex-1">
                        <p className="text-sm">{detail3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HomeScroll = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="flex flex-wrap justify-center">
                {cardData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 p-7">
                        <Scroll
                            image={card.image}
                            title={card.title}
                            detail1={card.detail1}
                            detail2={card.detail2}
                            detail3={card.detail3}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default HomeScroll;
