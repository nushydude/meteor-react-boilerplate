import React, { Component } from 'react';

import PrivateHeader from './privateHeader';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          This is the dashboard
        </div>
      </div>
    );
  }
}
