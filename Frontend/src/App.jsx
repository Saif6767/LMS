import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './component/Signup'
import AboutUs from './component/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/About' element={<AboutUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
