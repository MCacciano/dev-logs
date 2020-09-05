import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import VideoListItem from '../VideoListItem/';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoList = ({ videos, title }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (videos.length > 0) {
      console.log('videos', videos[0].snippet.resourceId.videoId);
      setActive(videos[0].snippet.resourceId.videoId);
    }
  }, [videos]);

  return (
    <div className='flex flex-col'>
      <VideoPlayer url={`https://www.youtube.com/watch?v=${active}`} />
      <div className='flex justify-center items-center h-10 my-5'>
        <h2 className='text-3xl font-semibold font-rubik'>{title}</h2>
      </div>
      <div className='flex justify-center'>
        <ul className='max-w-screen-xl grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row w-full gap-5 p-5'>
          {videos.map(video => (
            <VideoListItem
              key={video.id}
              video={video}
              onClick={() => setActive(video.snippet.resourceId.videoId)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array
};

export default VideoList;
