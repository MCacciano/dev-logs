import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  const ytPlayerConfig = {
    url,
    controls: true,
    height: '100%',
    width: '100%',
    className: 'absolute top-0 left-0'
  };

  return (
    <div
      className='relative'
      style={{
        paddingTop: '56.25%'
      }}
    >
      <ReactPlayer {...ytPlayerConfig} />
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string
};

export default VideoPlayer;
