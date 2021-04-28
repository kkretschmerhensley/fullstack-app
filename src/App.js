import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);

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
