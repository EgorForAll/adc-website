import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/reducer';
import { preloadImages } from './utils';
import { CASHED_IMAGES } from './const';
import './main.scss';
import App from './components/app/app';

// Кэшируем изображения на странице
preloadImages(CASHED_IMAGES);

const store = configureStore({
  reducer: rootReducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
