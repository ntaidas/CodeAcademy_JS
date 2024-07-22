import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { VideoGamesProvider } from './contexts/VideoGamesContext';
import { UsersProvider } from './contexts/UsersContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VideoGamesProvider>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </VideoGamesProvider>
);