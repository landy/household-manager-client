import React, { Component } from 'react';
import { Link } from 'react-router';

export class TopNavigation extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shopping-list">Shopping List</Link></li>
          
        </ul>
        <h3 className="text-muted"><Link to="/">Household Manager</Link></h3>
      </div>
    );
  }
}