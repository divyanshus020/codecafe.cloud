// import './App.css'
import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Mern from './components/mernstack'
import Blender from './components/Blender'
import AutoCad from './components/Autocad'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import CoursePage from './pages/CoursePage'
import ServicesPage from './pages/ServicesPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Autocad from './components/Autocad'
import Loading from './pages/Loading'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "Contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "About",
      element: <><Navbar /><About /></>
    },
    {
      path: "CoursePage",
      element: <><Navbar /><CoursePage /></>
    },
    {
      path: "ServicesPage",
      element: <><Navbar /><ServicesPage /></>
    },
    {
      path: "mernstack",
      element: <><Navbar /><Mern /></>
    },
    {
      path: "blander",
      element: <><Navbar /><Blender /></>
    },
    {
      path: "autocad",
      element: <><Navbar /><Autocad /></>
    }

  ])
  return (
    <>
  
      <RouterProvider router={router} />

    </>
  )
}
export default App