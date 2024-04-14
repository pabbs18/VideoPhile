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
    <Card>
        <Link to={videoId? `/video/{videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt ={snippet?.title} sx={{width:450, height:180}}/>
        </Link>
        <CardContent> 
            <Link to={videoId? `/video/{videoId}`: demoVideoUrl}>
                <Typography>
                    {snippet?.title?.slice(0,40) || demoVideoTitle.slice(0,40)}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard