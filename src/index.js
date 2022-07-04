import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <BrowserRouter basename="/store">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
