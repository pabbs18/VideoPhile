import React, { useEffect, useState } from 'react'
import {Stack, Box, Typography} from '@mui/material'
import {SideBar , Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromApi'; 


const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState('New')
  const[videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      console.log(data)
      setVideos(data.items)})
  }, [selectedCategory])

  return (
    <Stack direction={{xs:'column', md: 'row' }}>

      {/* SIDEBAR */}
      <Box  height={{xs:'auto', md:'90vh'}} sx = {{ borderRight:'1px #3d3d3d', px:{xs:0, md:4}, }}>
        <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>

      {/* VIDEOS FEED */}
      <Box p={2} ml= '1%'  sx={{overflow:'auto', height:'90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color:'white'}}>
         <span style ={{color: '#F31503'}}> {selectedCategory}  videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box> 

    </Stack>
  )
}

export default Feed