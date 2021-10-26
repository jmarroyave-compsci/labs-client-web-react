import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import intersectionObserverMock from './lib/__mocks__/intersectionObserverMock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export const itMustHaveNoErrors = ( container ) => {
  var errors = container.queryByText('Error in components');
  expect(errors).toBeNull()

  var errors = container.queryByText('MAIN COMPONENT MISSING');
  expect(errors).toBeNull()
}

export const TestProvider = ( { children, state={} } ) => { 
    return (
      <StateProvider state={state}>
        {children}
      </StateProvider>
    );    
  };


export const StateProvider = ( { children, state={} } ) => { 
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore(state);
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );    
  };

export const MOCK_IntersectionObserver = intersectionObserverMock;