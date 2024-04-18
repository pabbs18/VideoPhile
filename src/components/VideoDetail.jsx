import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle, Opacity } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const {id} = useParams();

  useEffect(() =>{
     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
     .then((data)=> setVideo(data.items[0]))
  }, [id])

  //de-structre the video global variabe
  //const {snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = video;

  return (
  <Box minHeight='95vh' >
    <Stack  direction={{xs:'column', md:'row'}}>
      <Box flex={1} >
        <Box sx={{width:'100%', position:'sticky', top:'86px', p:2}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
         className ='react-player' controls /> 
          <Typography color="chocolate" fontWeight='bold' p={2}>
            {video?.snippet?.title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' px={2}>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              <Typography variant="subtitle1">
                {video?.snippet?.channelTitle}
                <CheckCircle  sx={{fontSize:'15px', color:'grey', mt:'1px', ml:'5px'}}/>
              </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems= "start">
              <Typography variant='body1' sc={{opacity:0.7}}>
                {parseInt(video?.statistics?.viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sc={{opacity:0.7}}>
                {parseInt(video?.statistics?.likeCount).toLocaleString()} likes
              </Typography>
            </Stack>

          </Stack>
        </Box>
        
      </Box>
    </Stack>
  </Box>
  );
};

export default VideoDetail;
