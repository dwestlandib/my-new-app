import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/page-one' component={PageOne} />
        <Route path='/page-two' component={PageTwo} />
      </div>
    </BrowserRouter>
  );
}
