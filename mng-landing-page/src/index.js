import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header.js';
import Introduction from './intro/introduction.js';
import Info from './info/info.js';
import PrevUsers from './prev_users/prevUsers.js';
import GetStart from './get_start/getStart.js';
import Footer from './footer/footer.js';

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
