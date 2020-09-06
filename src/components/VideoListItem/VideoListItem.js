import React, { useState } from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className='flex flex-col border border-black rounded shadow cursor-pointer transform duration-1000 ease-out hover:scale-105 hover:shadow-lg'
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='overflow-hidden relative'>
        <div
          className={`absolute inset-0 bg-black opacity-25 w-full h-full ${hover ? 'hidden' : ''}`}
        ></div>
        <img
          className={`w-full h-full object-cover`}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h1 className='text-lg'>{video.snippet.title}</h1>
        {/* {video.snippet.description !== '' ? (
          <p className='mt-4 text-md font-light'>
            {video.snippet.description
              .split(' ')
              .map((des, i) => (i < 20 ? des : null))
              .join(' ')}
          </p>
        ) : null} */}
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object
};

export default VideoListItem;
