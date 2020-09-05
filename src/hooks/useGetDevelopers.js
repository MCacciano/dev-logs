import axios from 'axios';

import useDeveloperContext from './useDeveloperContext';

const useGetDevelopers = () => {
  const { state, dispatch } = useDeveloperContext();

  const getDevelopers = async () => {
    try {
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/playlists`, {
        params: {
          part: 'snippet',
          // channelId: 'UCLweX1UtQjRjj7rs_0XQ2Eg',
          id: 'UULweX1UtQjRjj7rs_0XQ2Eg',
          key: 'AIzaSyDfh8GRoqQlLUsgIx1iuQxt0A6IK7OqpeA'
        }
      });

      console.log('data >>', data);
    } catch (err) {
      console.error('err', err);
    }
  };

  return { developers: state.developers, getDevelopers };
};

export default useGetDevelopers;
