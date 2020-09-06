import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VideoList from '../../components/VideoList/VideoList';

const Developer = () => {
  const location = useLocation();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getDeveloperVideos = async () => {
      try {
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: location.state.developer.playlistId,
            key: process.env.REACT_APP_YOUTUBE_API_V3_KEY || '',
            maxResults: 100
          }
        });

        setVideos(data.items);
      } catch (err) {
        console.error('err', err);
      }
    };

    getDeveloperVideos();
  }, [location]);

  return <VideoList videos={videos} title={location.state.developer.snippet.title} />;
};

export default Developer;
