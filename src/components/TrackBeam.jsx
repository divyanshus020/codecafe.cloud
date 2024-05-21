import React from "react";
// import { calsans } from "@/fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";

// Define the images object
const images = {
  image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s",
  image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png",
  image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s",
  image4: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  image5: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
  image6: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  image7: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  image8: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  image9: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
};

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="100"
                  width="100"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Hyper Text Markup Language",
    description: (
      <>
        <ul className="text-ml px-10">
          <li className='list-disc'>Introduction to HTML</li>
          <li className='list-disc'> Basic HTML Tags</li>
          <li className='list-disc'> HTML Attributes. HTML Forms</li>
          <li className='list-disc'>  HTML Tables</li>
          <li className='list-disc'>  Semantic HTML</li>
          <li className='list-disc'>  HTML Multimedia</li>
          <li className='list-disc'>  HTML5 New Features</li>
          <li className='list-disc'>  Best Practices</li>
          <li className='list-disc'>  Project: Build a Simple Web Page</li>
        </ul>
      </>
    ),
    badge: "HTML",
    image: images.image1,
  },

  {
    title: "Cascading styling sheet",
    description: (
      <>
        <ul className="text-ml px-10">
          <li className='list-disc'>Introduction to CSS</li>
          <li className='list-disc'>CSS Syntax and Selectors</li>
          <li className='list-disc'>CSS Box Model</li>
          <li className='list-disc'>CSS Layouts</li>
          <li className='list-disc'>CSS Color and Backgrounds</li>
          <li className='list-disc'>CSS Text and Fonts</li>
          <li className='list-disc'>CSS Styling Links and Lists</li>
          <li className='list-disc'>CSS Borders and Shadows</li>
          <li className='list-disc'>CSS Transitions and Animations</li>
          <li className='list-disc'>Responsive Design with CSS</li>
          <li className='list-disc'>CSS Best Practices</li>
          <li className='list-disc'>Project: Build a Simple Website</li>
        </ul>
      </>
    ),
    badge: "CSS",
    image: images.image2,
  },

  {
    title: "CSS framework.",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "Tailwind CSS",
    image: images.image3,
  },
  {
    title: "JavaScript is core technology of the Web",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "JavaScript",
    image: images.image4,
  },
  {
    title: "GitHub is a developer platform",
    description: (
      <>
        <ul className="text-ml px-10">
          <li className='list-disc'>Introduction to Git and GitHub</li>
          <li className='list-disc'>Basic Git Commands (add, commit, push, pull)</li>
          <li className='list-disc'>Branching and Merging in Git</li>
          <li className='list-disc'>Pull Requests and Code Reviews</li>
          <li className='list-disc'>GitHub Actions for CI/CD</li>
          <li className='list-disc'>GitHub Security Features (Two-Factor Authentication, Code Scanning)</li>
          <li className='list-disc'>Managing Large Repositories (Git LFS)</li>
          <li className='list-disc'>Git Workflow Strategies (Feature Branching, Git Flow)</li>
        </ul>
      </>
    ),
    badge: "GitHub",
    image: images.image5,
  },
  {
    title: "ReactJs frontend JavaScript library",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "Reactjs",
    image: images.image6,
  },
  {
    title: "Nodejs is open-source JavaScript runtime environment",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "NodeJs",
    image: images.image7,
  },
  {
    title: " Express, is a backend web application framework",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "ExpressJS",
    image: images.image8,
  },
  {
    title: "Mongo Database",
    description: (
      <>
        <ul className="text-ml px-10">
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
      </>
    ),
    badge: "MongoDB",
    image: images.image9,
  },
];

export default TracingBeamDemo;