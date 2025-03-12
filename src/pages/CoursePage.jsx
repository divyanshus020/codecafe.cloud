import { Link } from "react-router-dom";
import React from 'react'
import Course from '../components/Courses'
import Footer from "../components/Footer";

function CoursePage() {
    return (
        <>
            <div className="mt-20 bg-about">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default CoursePage
