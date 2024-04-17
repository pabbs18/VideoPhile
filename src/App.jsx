import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Grid, Box , Paper} from '@mui/material'
import {Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed} from './components'


const App = () => {


  return (
   <BrowserRouter>
   
   <Box sx={{ backgroundcolor:'#000'}}>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/video/:id" element={<VideoDetail/>} />
      <Route path="/channel/:id" element={<ChannelDetail/>} />
      <Route path="/search/:searchTerm" element={<SearchFeed/>} />
    </Routes> 
   </Box>
   </BrowserRouter>
  )
}

export default App
