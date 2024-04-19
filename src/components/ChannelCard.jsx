import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'; 
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channel, marginTop}) => {
  return (

   <Box sx={{
    boxShadow:'none',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:{xs:'356px', md:'320px'},
    height:'326px',
    margin:'auto',
    marginTop
   }}>
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', borderWidth:'2px'}} >
        <CardMedia 
        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channel?.snippet?.title}
        sx={{border:'1px solid #F0E4CE', borderRadius:'50%', height:'180px', width:'180px'}}
        />
        <Typography variant='h6'>
          {channel?.snippet?.title}
          <CheckCircle sx={{fontSize:14, ml:'5px'}}/>
        </Typography>
        {channel?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
      </CardContent>
    </Link>
   </Box>
   
  )
}

export default ChannelCard