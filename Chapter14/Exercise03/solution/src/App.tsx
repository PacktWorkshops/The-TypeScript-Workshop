import './App.css';

import React from 'react';

import Clicker from './components/Clicker';
import Display from './components/Display';
import { ClickProvider } from './providers/ClickProvider';

function App() {
  return (
    <ClickProvider>
      <Clicker />
      <Display />
    </ClickProvider>
  );
}

export default App;
