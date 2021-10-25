import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import intersectionObserverMock from './lib/__mocks__/intersectionObserverMock';

export const itMustHaveNoErrors = ( container ) => {
  var errors = container.queryByText('Error in components');
  console.log(errors)
  expect(errors).toBeNull()
}

export const StateProvider = ( { children, state={} } ) => { 
    const mockStore = configureStore([]);
    const store = mockStore(state);
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );    
  };

export const MOCK_IntersectionObserver = intersectionObserverMock;