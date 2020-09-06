import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import VideoListItem from '../VideoListItem/';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoList = ({ videos, developer }) => {
  const [active, setActive] = useState('');
  const [desc, setDesc] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (videos.length > 0) {
      setActive(videos[0].snippet.resourceId.videoId);
      setDesc(videos[0].snippet.description);
    }
  }, [videos]);

  return (
    <>
      <div className='flex justify-center m-4'>
        <h2 className='text-3xl font-semibold font-rubik mx-2'>{developer.snippet.title}</h2>
        <img
          src={developer.snippet.thumbnails.medium.url}
          alt={`Icon of the YouTube channel ${developer.snippet.title}`}
          className='w-10 h-10 mx-2'
        />
      </div>
      <div className='flex justify-center bg-black'>
        <div className='w-full max-w-screen-md'>
          <VideoPlayer url={`https://www.youtube.com/watch?v=${active}`} />
        </div>
      </div>
      <div className='flex flex-col items-center my-5'>
        <div className='flex w-full max-w-screen-lg mx-5'>
          <div>
            <button
              className='border border-black rounded shadow py-1 px-2 focus:outline-none active:outline-none'
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'} Description
            </button>
          </div>
          <div className='flex-1'>
            {desc !== '' && show && (
              <p className='flex justify-center p-4 text-center max-w-screen-lg'>{desc}</p>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <ul className='max-w-screen-xl grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row w-full gap-5 p-5'>
          {videos.map(video => (
            <VideoListItem
              key={video.id}
              video={video}
              onClick={() => {
                setActive(video.snippet.resourceId.videoId);
                setDesc(video.snippet.description);
              }}
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
