import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import AvaliableListingsPage from './pages/AvailableListingsPage/AvaliableListingsPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage/LoginPage'
import CreateListingPage from './pages/CreateListingPage/CreateListingPage'
import {BrowserRouter,Routes, Route } from "react-router-dom"
import ViewListingPage from './pages/ViewListingPage/ViewListingPage'
function App() {
 

  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/create-listing-page' element={<CreateListingPage/>}/>
      <Route path='/avaliable-listings-page' element={<AvaliableListingsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/*' element={<div><h1>doesnt exist</h1></div>}/>
      <Route path= '/view-listing' element={<ViewListingPage/>}/>
     
    

    </Routes>
    

        

    
  
      </BrowserRouter>

    </>
  )
}

export default App
