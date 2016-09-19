import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import About from './components/about';
import App from './components/app';
import Home from './components/home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/cards/:pageID" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/blog" to="http://sirhamy.com/blog" />
        <Route path="*" component={Home} />
    </Route>
);