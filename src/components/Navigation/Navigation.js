import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [logoIsHovered, setLogoIsHovered] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      to: '/',
      exact: true
    },
    {
      name: 'Dashboard',
      to: '/dashboard',
      exact: false
    }
  ];

  return (
    <nav className='flex justify-center border-b border-black h-12'>
      <div className='flex justify-between w-full max-w-screen-lg px-4'>
        <div className='flex-1 flex'>
          <h1
            onMouseEnter={() => setLogoIsHovered(true)}
            onMouseLeave={() => setLogoIsHovered(false)}
          >
            <NavLink exact to='/'>
              <span className={`text-3xl font-light`}>Dev</span>
              <span className={`${logoIsHovered ? 'text-red-700' : ''} text-3xl font-semibold`}>
                Logs
              </span>
            </NavLink>
          </h1>
        </div>
        <div className='flex-1 flex justify-end text-lg'>
          <ul className='flex justify-evenly tracking-tight'>
            {navLinks.map(({ exact, name, to }, i) => (
              <li className='h-full' key={i}>
                <NavLink
                  to={to}
                  exact={exact}
                  className='flex items-center h-full font-light px-4 hover:text-red-700'
                  activeClassName='text-red-700 font-semibold'
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
