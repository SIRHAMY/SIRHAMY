/*
This file runs the wrapper for the app.
May come in handy to have this abstraction if topbar ends
up being on every page.
*/

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
