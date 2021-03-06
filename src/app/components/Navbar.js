import React from 'react';
import { Link } from 'react-router';
import Search from './Search';

const Navbar = () => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <Link to={'/'} className='navbar-brand'>Weatherapp</Link>
      </div>
      <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        <Search formClass='navbar-form navbar-right' formBtnClass='btn btn-info' containerClass='form__container--navbar' role='search' />
      </div>
    </div>
  </nav>
);

export default Navbar;
