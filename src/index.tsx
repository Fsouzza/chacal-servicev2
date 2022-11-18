import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/Routes';
import 'normalize.css';
import 'styles/index.scss';
import { SnackbarContextProvider } from 'common/context/SnackbarContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SnackbarContextProvider>
      <AppRouter />
    </SnackbarContextProvider>
  </React.StrictMode>
);