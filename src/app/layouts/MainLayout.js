/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import Navbar from '../components/Navbar';

export default class MainLayout extends Component {
  render() {
    return (
      <div className='layout--main'>
        <Navbar />
        <div className='layout__search--main'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
