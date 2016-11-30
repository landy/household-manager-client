import React, { Component } from 'react';

import {TopNavigation} from '../components/TopNavigation/TopNavigation';

export class AppPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <TopNavigation />
        {children}
      </div>
    );
  }
}