import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


// Before
/* import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container); */

// After
const container= document.getElementById('root');
if(container){

  const root = createRoot(container);
  root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
}
