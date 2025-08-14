import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import AvaliableListingsPage from './pages/AvailableListingsPage/AvaliableListingsPage'
import Navbar from './components/Navbar'
function App() {
 

  return (
    <>
    <div className='temp'>

    <Navbar/>
    <AvaliableListingsPage/>
      </div>
    </>
  )
}

export default App
