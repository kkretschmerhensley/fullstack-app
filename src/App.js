import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
