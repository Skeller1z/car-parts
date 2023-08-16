import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter basename="/aparts">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
