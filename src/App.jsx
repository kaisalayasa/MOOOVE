import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Navbar from './components/Navbar'
function App() {
 

  return (
    <>
    <div className='temp'>

   
    <Navbar/>
     <MainPage/>
      </div>
    </>
  )
}

export default App
