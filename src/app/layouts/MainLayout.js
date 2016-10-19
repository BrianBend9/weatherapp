/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import Navbar from '../components/Navbar';

export default class MainLayout extends Component {
  render() {
    return (
      <div className='layout--main'>
        <Navbar />
        <h1>Im the Main Component!!!</h1>
        { this.props.children }
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
