import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const VideoCard = (
    {
    video :{
        id:{
            videoId
        },
        snippet
    }
}) => {
  return (
    <Card sx={{width: {xs: '100%' ,md: '320px'}, borderRadius: '5px'}}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt ={snippet?.title} sx={{width:400, height:180}}/>
        </Link>
        <CardContent> 
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight="bold">
                    {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId? `/channel/${videoId}`: demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle|| demoChannelTitle}
                    <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                </Typography>                
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard