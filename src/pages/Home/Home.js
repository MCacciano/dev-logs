import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DeveloperList from '../../components/DeveloperList';

const Home = () => {
  const [devs, setDevs] = useState([]);

  const [ids] = useState([
    {
      name: 'devduck',
      channelId: 'UCKCTmact-90hXpV2ns8GSsA'
    },
    {
      name: 'gameendeavor',
      channelId: 'UCLweX1UtQjRjj7rs_0XQ2Eg'
    },
    {
      name: 'hyve',
      channelId: 'UCtXI80bWhteUKD7E-XyM6uw'
    }
  ]);

  useEffect(() => {
    const asyncGetDevChannels = async () => {
      try {
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
          params: {
            part: 'snippet',
            id: ids.map(({ channelId }) => channelId).join(','),
            key: process.env.REACT_APP_YOUTUBE_API_V3_KEY || ''
          }
        });

        setDevs(data.items);
      } catch (err) {
        console.error('err', err);
      }
    };

    asyncGetDevChannels();
  }, [ids]);

  return (
    <>
      <DeveloperList devs={devs} />
    </>
  );
};

export default Home;
