import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/Routes';
import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);