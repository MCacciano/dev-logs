import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeveloperListItem from '../DeveloperListItem/DeveloperListItem';

const DeveloperList = ({ devs }) => {
  const [playlistIds] = useState({
    devduck: {
      playlistId: 'PLMnxmWR1zE8djR1WEIU03YA4XE4nmQfIS'
    },
    gameendeavor: {
      playlistId: 'PL4QJmtZWf50kvAZap4Xd0JhVEgo9lxdZL'
    },
    hyvestudios: {
      playlistId: 'PLRFTalwBzfjJp13bBlZHpHHkxeioaovG2'
    }
  });

  return (
    <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
      {devs.map(dev => {
        return (
          <DeveloperListItem
            key={dev.id}
            developer={{ ...dev, playlistId: playlistIds[dev.snippet.customUrl].playlistId }}
          />
        );
      })}
    </ul>
  );
};

DeveloperList.propTypes = {
  devs: PropTypes.array
};

export default DeveloperList;
