import React from 'react';

const JobApplicationForm = () => {
    return (
        <>
            <div className=' text-center'>
                <h1 className='text-5xl font-bold text-purple-700 mb-7'>Work with us</h1>
                <p className='text-xl px-10'>Thank you for your interest in Capsitech
                    <br />
                    For the first stage of the application, we would just like to know a little more about your experience.
                    <br />
                    Please, could you provide brief answers on the following questions?</p>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Select your position*</h1>

                    <form action="">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Mobile"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Qualification"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Experience"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Some words about yourself"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="resume" className="block mb-2 font-medium">
                                Upload resume*
                            </label>
                            <input
                                type="file"
                                id="resume"
                                accept=".doc,.docx,.pdf"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-sm text-gray-500">(Supported formats: .doc, .docx, .pdf)</p>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-500 transition-colors duration-300"
                        >
                            Send Now
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default JobApplicationForm;