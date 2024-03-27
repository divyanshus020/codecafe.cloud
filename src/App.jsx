// import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    }
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}
export default App