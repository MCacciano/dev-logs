import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// pages
import Home from './pages/Home';

// components
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <div className='font-roboto'>
      <Navigation />
      <div style={{ height: 'calc(100vh - 3rem)' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
