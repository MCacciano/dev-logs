import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

import VideoListItem from '../VideoListItem/';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoList = ({ videos, developer }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (videos.length > 0) {
      setActive(videos[0].snippet.resourceId.videoId);
    }
  }, [videos]);

  const ytPlayerConfig = {
    url: `https://www.youtube.com/watch?v=${active}`,
    controls: true,
    height: '100%',
    width: '100%',
    className: 'absolute top-0 left-0 max-h-full'
  };

  return (
    <>
      <div className='flex justify-center bg-black'>
        <div className='w-full max-w-screen-md'>
          <VideoPlayer url={`https://www.youtube.com/watch?v=${active}`} />
        </div>
      </div>
      <div className='flex flex-col items-center my-5'>
        <div className='flex px-2'>
          <h2 className='text-3xl font-semibold font-rubik mx-2'>{developer.snippet.title}</h2>
          <img
            src={developer.snippet.thumbnails.medium.url}
            alt={`Icon of the YouTube channel ${developer.snippet.title}`}
            className='w-10 h-10 mx-2'
          />
        </div>
        {developer.snippet.description && (
          <p className='flex justify-center p-4 text-center'>{developer.snippet.description}</p>
        )}
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
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array
};

export default VideoList;
