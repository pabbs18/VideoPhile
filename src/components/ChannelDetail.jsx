import {Box} from '@mui/material'
import {Videos, ChannelCard} from './'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useState } from 'react';

const ChannelDetail = () => {


const {id} = useParams();
const [channel, setChannel] = useState(null);
const [videos, setVideos] = useState(null);

console.log('Channel: ',channel,"Videos: ", videos)

useEffect(() =>{
    fetchFromAPI(`channels?part='snippet'&id=${id}`)
    .then((data)=>setChannel(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id])
   
  return (
    <Box minHeight='95vh'>
      <Box >
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(98,234,134,1) 35%, rgba(0,212,255,1) 100%)' ,zIndex:10, height:'300px'}}/>
        <ChannelCard channel={channel} marginTop ='-130px'/>
      </Box>
      <Box backgroundColor='blue' display='flex' p='2'>
        <Box backgroundColor='red' sx={{mr:{sm:'40px'}, ml:{sm:'40px'}}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail