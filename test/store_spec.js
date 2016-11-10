import { expect } from 'chai';

import configureStore from '../src/app/store/configureStore';

describe('store', () => {

  it('is a redux store with a location property', () => {
    const store = configureStore();
    expect(store.getState()).to.have.property('location');
  });

  
});
