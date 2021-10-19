import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors } from "tests/shared"

import itemState from './automata/tests/item.json'
import Page from '.';
import config from './.config';

const mockStore = configureStore([]);
 
describe('Directors story', () => {
  let store;
  let component;
 
  beforeEach(() => { 
    var state = {}
    state[config.automata.name] = itemState;
    store = mockStore(state);
    component = (
      <Provider store={store}>
        <Page />
      </Provider>
    );    
	});
 
 
  it('compare against snapshot', () => {
    const { container } = render(component)
    itMustHaveNoErrors(container)
    expect(container).toMatchSnapshot();
  });
});
