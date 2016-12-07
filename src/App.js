import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { Provider } from 'react-redux'

import { createRoutes } from './createRoutes.js';

export default class App extends Component {
  render() {
    const routes = createRoutes();
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
            {routes}
          </Router>
        </div>
      </Provider>
      
    );
  }
}
