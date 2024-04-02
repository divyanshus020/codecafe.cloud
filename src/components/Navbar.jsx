import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <div className='nav-container-1 pb-10'>
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

                        <Link to="/Lab">
                            <li>
                                Services
                            </li>
                        </Link>

                        <Link to="/About">
                            <li>
                                About us
                            </li>
                        </Link>

                        <Link to="/Contact">
                            <li>
                                Contact
                            </li>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
