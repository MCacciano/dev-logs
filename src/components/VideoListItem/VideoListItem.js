import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onClick }) => {
  return (
    <li className='flex flex-col border border-black rounded shadow' onClick={onClick}>
      <div className='flex-1'>
        <img className='w-full h-full object-cover' src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h1 className='text-lg'>{video.snippet.title}</h1>
        {video.snippet.description !== '' ? (
          <p className='mt-4 text-md font-light'>
            {video.snippet.description
              .split(' ')
              .map((des, i) => (i < 10 ? des : null))
              .join(' ')}
            ...
          </p>
        ) : null}
      </div>
    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object
};

export default VideoListItem;
