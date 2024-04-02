// import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
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
    }
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}
export default App