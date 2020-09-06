import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ url }) => {
  const ytPlayerConfig = {
    url,
    controls: true
  };

  return (
    <div className='flex justify-center w-full bg-black'>
      <div className='flex justify-center w-full max-w-screen-lg'>
        <ReactPlayer {...ytPlayerConfig} />
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string
};

export default VideoPlayer;
