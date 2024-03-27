import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <div className='nav-container-1 '>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>
                                Home
                            </li>
                        </Link>

                        <Link to="/Course">
                            <li>
                                Course
                            </li>
                        </Link>

                        <Link to="/AboutUS">
                            <li>
                                About us
                            </li>
                        </Link>

                        <Link to="/Contact">
                            <li>
                                Contact
                            </li>
                        </Link>

                        <Link to="/Lab">
                            <li>
                                Lab
                            </li>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
