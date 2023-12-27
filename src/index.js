import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
//import App from './App';

import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
