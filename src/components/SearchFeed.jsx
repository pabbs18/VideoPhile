import React, { useEffect, useState } from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromApi'; 
import {useParams} from 'react-router-dom';


const SearchFeed = () => {

  const {searchTerm} = useParams();
  
  const[videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      console.log(data)
      setVideos(data.items)})
  }, [searchTerm])

  return (
          
      <Box p={2} backgroundColor='#000' sx={{overflow:'auto', height:'90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color:'white'}}>
          Search Results For<span style ={{color: '#F31503'}}> {searchTerm} videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box> 
  )
}

export default SearchFeed