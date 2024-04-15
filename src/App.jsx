// import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import CoursePage from './pages/CoursePage'
import ServicesPage from './pages/ServicesPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      element: <><Navbar /><CoursePage/></>
    },
    {
      path: "ServicesPage",
      element: <><Navbar /><ServicesPage/></>
    }

  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}
export default App