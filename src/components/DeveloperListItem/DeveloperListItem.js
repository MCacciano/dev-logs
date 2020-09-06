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
        <img
          className='w-full object-cover'
          src={developer.snippet.thumbnails.medium.url}
          alt={developer.snippet.title}
        />
      </div>
      <div className='flex justify-center p-4 font-rubik text-lg'>
        <h1>{developer.snippet.title}</h1>
      </div>
    </Link>
  </li>
);

DeveloperListItem.propTypes = {
  developer: PropTypes.object
};

export default DeveloperListItem;
