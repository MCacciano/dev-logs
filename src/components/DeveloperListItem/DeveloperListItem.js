import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DeveloperListItem = ({ developer }) => (
  <li className='flex-1 flex flex-col justify-center border border-black rounded shadow'>
    <Link
      to={{ pathname: `/developers/${developer.snippet.customUrl}`, state: { developer } }}
      className='flex flex-col h-full'
    >
      <div className='flex-1'>
        <img className='w-full object-cover' src={developer.snippet.thumbnails.medium.url} />
      </div>
      <div className='flex-1 flex flex-col p-4'>
        <h1>{developer.snippet.title}</h1>
        {developer.snippet.description !== '' ? (
          <p className='mt-4'>
            {developer.snippet.description
              .split(' ')
              .map((des, i) => (i < 10 ? des : null))
              .join(' ')}
          </p>
        ) : null}
      </div>
    </Link>
  </li>
);

DeveloperListItem.propTypes = {
  developer: PropTypes.object
};

export default DeveloperListItem;
