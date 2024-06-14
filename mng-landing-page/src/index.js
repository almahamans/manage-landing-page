import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Introduction from './intro/introduction.js';
import Info from './info/info';
import PrevUsers from './prev_users/prevUsers';
import GetStart from './get_start/getStart';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Introduction />
    <Info/>
    <PrevUsers/>
    <GetStart/>
    <Footer/>
  </React.StrictMode>
);
