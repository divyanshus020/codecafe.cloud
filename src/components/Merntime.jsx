import React from 'react';
import Html from '../assets/html.webp'
import Css from '../assets/css.webp'
import JS from '../assets/jss.jpg'
import Tail from '../assets/tail.webp'
import Git from '../assets/git1.png'
import React1 from '../assets/react.jpg'
import Node1 from '../assets/node.png'
import Ex from '../assets/ex.png'
import Mongo1 from '../assets/mongo.png'
const MernTime = () => {
    return (
        <div>
            <div class="timeline">
                <div class="timeContainer LeftTimeContainer">
                    <img src={Html} alt="" />
                    <div class="text-box rounded-lg shadow-2xl" >
                        <h2>Hyper Text Markup Language</h2>
                        <br />
                        {/* <small>2019-1202</small> */}
                        <p>
                            <ul>
                                <li className='list-disc'>Semantic HTML</li>
                                <li className='list-disc'>Forms and Form Validation</li>
                                <li className='list-disc'>Responsive Design</li>
                                <li className='list-disc'>HTML5 APIs</li>
                                <li className='list-disc'>Accessibility (ARIA, landmarks)</li>
                                <li className='list-disc'>SEO Basics (meta tags, heading structure, alt attributes)</li>
                                <li className='list-disc'>HTML Templating</li>
                                <li className='list-disc'>Version Control with Git</li>
                                <li className='list-disc'>Build Tools (Webpack, Parcel)</li>
                                <li className='list-disc'>Best Practices in HTML</li>
                                <li className='list-disc'>Frameworks and Libraries (like React, Vue, Angular)</li>
                                <li className='list-disc'>Debugging and Browser DevTools</li>
                                <li className='list-disc'>Cross-Browser Compatibility</li>
                                <li className='list-disc'>Performance Optimization</li>
                            </ul>
                        </p>
                        <span class="LeftContainer-arrow"></span>
                    </div>
                </div>

                <div class="timeContainer RightTimeContainer">
                    <img src={Css} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Cascading Styling Sheet</h2>
                        {/* <small>2019-1202</small> */}
                        <br />
                        <p>
                            <ul>
                                <li className='list-disc'>Basic Selectors (Element, Class, ID)</li>
                                <li className='list-disc'>CSS Box Model (Margin, Border, Padding, Content)</li>
                                <li className='list-disc'>Display and Positioning (Block, Inline, Flexbox, Grid)</li>
                                <li className='list-disc'>Responsive Design with Media Queries</li>
                                <li className='list-disc'>CSS Variables (Custom Properties)</li>
                                <li className='list-disc'>Transforms and Transitions</li>
                                <li className='list-disc'>Animations (Keyframes)</li>
                                <li className='list-disc'>Pseudo-classes and Pseudo-elements</li>
                                <li className='list-disc'>CSS Preprocessors (Sass, Less)</li>
                                <li className='list-disc'>CSS Methodologies (BEM, SMACSS, OOCSS)</li>
                                <li className='list-disc'>Responsive Frameworks (Bootstrap, Tailwind CSS)</li>
                                <li className='list-disc'>Modern CSS Layouts (CSS Grid, Flexbox)</li>
                                <li className='list-disc'>Optimizing CSS for Performance</li>
                                <li className='list-disc'>CSS-in-JS and Styled Components</li>
                                <li className='list-disc'>Debugging CSS (Browser DevTools)</li>
                            </ul>
                        </p>
                        <span class="RightContainer-arrow"></span>
                    </div>
                </div>
                <div class="timeContainer LeftTimeContainer">
                    <img src={JS} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Java Script</h2>
                        {/* <small>2019-1202</small> */}
                        <br />
                        <p>
                            <ul>
                                <ul>
                                    <li className='list-disc'>Variables and Data Types</li>
                                    <li className='list-disc'>Control Structures (if-else, switch, loops)</li>
                                    <li className='list-disc'>Functions (Declaration, Expression, Arrow)</li>
                                    <li className='list-disc'>Arrays and Objects</li>
                                    <li className='list-disc'>ES6+ Features (let/const, destructuring, spread/rest)</li>
                                    <li className='list-disc'>DOM Manipulation and Events</li>
                                    <li className='list-disc'>Asynchronous JavaScript (Callbacks, Promises, Async/Await)</li>
                                    <li className='list-disc'>JSON and Local Storage</li>
                                    <li className='list-disc'>Modules and Imports/Exports</li>
                                    <li className='list-disc'>Error Handling (try/catch, throw)</li>
                                    <li className='list-disc'>Functional Programming Concepts (map, filter, reduce)</li>
                                    <li className='list-disc'>Regular Expressions (RegExp)</li>
                                    <li className='list-disc'>APIs and Fetching Data</li>
                                    <li className='list-disc'>JavaScript Design Patterns</li>
                                    <li className='list-disc'>Testing JavaScript (Jest, Mocha, Chai)</li>
                                </ul>

                            </ul>
                        </p>
                        <span class="LeftContainer-arrow"></span>
                    </div>
                </div>

                <div class="timeContainer RightTimeContainer">
                    <img src={Tail} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Tailwind Css</h2>
                        {/* <small>2019-1202</small> */}
                        <br />
                        <p>
                            <ul>
                                <li className='list-disc'>Utility-first CSS and Tailwind Philosophy</li>
                                <li className='list-disc'>Installation and Setup of Tailwind CSS</li>
                                <li className='list-disc'>Responsive Design with Tailwind's Breakpoints</li>
                                <li className='list-disc'>Spacing Utilities (Margin, Padding)</li>
                                <li className='list-disc'>Typography and Text Utilities</li>
                                <li className='list-disc'>Color Palette and Customization</li>
                                <li className='list-disc'>Flexbox and Grid Layout with Tailwind</li>
                                <li className='list-disc'>Component Styling and Composition</li>
                                <li className='list-disc'>Responsive Design Techniques with Tailwind</li>
                                <li className='list-disc'>Customizing Tailwind Configuration</li>
                                <li className='list-disc'>Optimizing Tailwind for Production</li>
                                <li className='list-disc'>Transition and Animation Utilities</li>
                                <li className='list-disc'>Accessibility Features in Tailwind</li>
                                <li className='list-disc'>Building and Theming with Tailwind</li>
                                <li className='list-disc'>Integration with JavaScript Frameworks (React, Vue)</li>
                                <li className='list-disc'>Tailwind Plugins and Extensions</li>
                                <li className='list-disc'>Best Practices in Tailwind CSS</li>
                                <li className='list-disc'>Debugging and Troubleshooting in Tailwind</li>
                                <li className='list-disc'>Updating and Migrating Tailwind Versions</li>
                            </ul>

                        </p>
                        <span class="RightContainer-arrow"></span>
                    </div>
                </div>
                <div class="timeContainer LeftTimeContainer">
                    <img src={Git} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Git/Github</h2>
                        {/* <small>2019-1202</small> */}
                        <p>
                            <ul>
                                <li className='list-disc'>Introduction to Git and GitHub</li>
                                <li className='list-disc'>Basic Git Commands (add, commit, push, pull)</li>
                                <li className='list-disc'>Branching and Merging in Git</li>
                                <li className='list-disc'>Pull Requests and Code Reviews</li>
                                <li className='list-disc'>GitHub Actions for CI/CD</li>
                                <li className='list-disc'>GitHub Security Features (Two-Factor Authentication, Code Scanning)</li>
                                <li className='list-disc'>Managing Large Repositories (Git LFS)</li>
                                <li className='list-disc'>Git Workflow Strategies (Feature Branching, Git Flow)</li>
                            </ul>

                        </p>
                        <span class="LeftContainer-arrow"></span>
                    </div>
                </div>

                <div class="timeContainer RightTimeContainer">
                    <img src={React1} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>ReactJs</h2>
                        {/* <small>2019-1202</small> */}
                        <p>
                            <ul>
                                <li className='list-disc'>React Components and JSX</li>
                                <li className='list-disc'>State and Props Management</li>
                                <li className='list-disc'>React Hooks (useState, useEffect, useContext)</li>
                                <li className='list-disc'>React Router for Routing</li>
                                <li className='list-disc'>Redux or Context API for State Management</li>
                                <li className='list-disc'>Component Lifecycle Methods</li>
                                <li className='list-disc'>Fetching Data with APIs (axios, fetch)</li>
                                <li className='list-disc'>Form Handling in React</li>
                                <li className='list-disc'>React Testing (Jest, React Testing Library)</li>
                                <li className='list-disc'>Optimizing Performance (memo, useMemo, useCallback)</li>
                            </ul>

                        </p>
                        <span class="RightContainer-arrow"></span>
                    </div>
                </div>
                <div class="timeContainer LeftTimeContainer">
                    <img src={Node1} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>NodeJs</h2>
                        <br />
                        {/* <small>2019-1202</small> */}
                        <p>
                            <ul>
                                <li className='list-disc'>Node.js Basics and Architecture</li>
                                <li className='list-disc'>Node Package Manager (npm or yarn)</li>
                                <li className='list-disc'>Asynchronous Programming with Callbacks, Promises, and Async/Await</li>
                                <li className='list-disc'>Express.js for Web Application Framework</li>
                                <li className='list-disc'>RESTful API Development with Express</li>
                                <li className='list-disc'>Middleware and Routing in Express</li>
                                <li className='list-disc'>Database Integration (MongoDB, PostgreSQL, or MySQL)</li>
                                <li className='list-disc'>Authentication and Authorization (Passport.js, JWT)</li>
                                <li className='list-disc'>Node.js Streams and File System</li>
                                <li className='list-disc'>Error Handling and Debugging</li>
                                <li className='list-disc'>Unit and Integration Testing (Mocha, Chai, Jest)</li>
                                <li className='list-disc'>Node.js Security Best Practices</li>
                                <li className='list-disc'>Building and Deploying Node.js Applications</li>
                            </ul>

                        </p>
                        <span class="LeftContainer-arrow"></span>
                    </div>
                </div>

                <div class="timeContainer RightTimeContainer">
                    <img src={Ex} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Express JS</h2>
                        {/* <small>2019-1202</small> */}
                        <br />
                        <p><ul>
                            <li className='list-disc'>Introduction to Express.js</li>
                            <li className='list-disc'>Setting Up an Express.js Application</li>
                            <li className='list-disc'>Routing in Express</li>
                            <li className='list-disc'>Middleware Functions and Custom Middleware</li>
                            <li className='list-disc'>HTTP Methods (GET, POST, PUT, DELETE)</li>
                            <li className='list-disc'>Handling Form Data and JSON</li>
                            <li className='list-disc'>Error Handling in Express</li>
                            <li className='list-disc'>Template Engines (EJS, Handlebars)</li>
                            <li className='list-disc'>Static Files and Middleware (serve-static, express.static)</li>
                            <li className='list-disc'>RESTful API Development with Express</li>
                            <li className='list-disc'>Authentication and Authorization Middleware</li>
                            <li className='list-disc'>Database Integration with Express (MongoDB, PostgreSQL, MySQL)</li>
                            <li className='list-disc'>Session and Cookies in Express</li>
                            <li className='list-disc'>File Uploads with Multer</li>
                            <li className='list-disc'>Testing Express Applications (Supertest, Jest)</li>
                        </ul>
                        </p>
                        <span class="RightContainer-arrow"></span>
                    </div>
                </div>

                <div class="timeContainer LeftTimeContainer">
                    <img src={Mongo1} alt="" />
                    <div class="text-box rounded-lg shadow-2xl">
                        <h2>Mongo Db</h2>
                        {/* <small>2019-1202</small> */}
                        <br />
                        <p>
                            <ul>
                                <li className='list-disc'>Introduction to MongoDB</li>
                                <li className='list-disc'>Installing and Setting Up MongoDB</li>
                                <li className='list-disc'>CRUD Operations (Create, Read, Update, Delete)</li>
                                <li className='list-disc'>MongoDB Data Modeling</li>
                                <li className='list-disc'>Indexes and Performance Optimization</li>
                                <li className='list-disc'>Aggregation Framework</li>
                                <li className='list-disc'>Schema Validation</li>
                                <li className='list-disc'>Transactions and Atomicity</li>
                                <li className='list-disc'>Database Authentication and Authorization</li>
                                <li className='list-disc'>Backup and Restoration</li>
                                <li className='list-disc'>Replication and High Availability</li>
                                <li className='list-disc'>Sharding and Horizontal Scaling</li>
                                <li className='list-disc'>MongoDB Atlas and Cloud Services</li>
                                <li className='list-disc'>Monitoring and Performance Tuning</li>
                                <li className='list-disc'>MongoDB Security Best Practices</li>
                            </ul>

                        </p>
                        <span class="LeftContainer-arrow"></span>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default MernTime;
