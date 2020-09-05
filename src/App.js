import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// pages
import Home from './pages/Home';
import Developer from './pages/Developer';

// components
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className='font-roboto'>
      <Navigation />
      <div style={{ minHeight: 'calc(100vh - 3rem)' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/developers/:name' component={Developer} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
