import React, { Component } from 'react';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1>Im the Main Component!!!</h1>
        { this.props.children }
      </div>
    ); 
  }
} 
