import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import intersectionObserverMock from './lib/__mocks__/intersectionObserverMock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ERROR_HEADER_TEXT } from 'core/ui/error'

export const itMustHaveNoErrors = ( container ) => {
  var errors = container.queryByText(ERROR_HEADER_TEXT);
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
    console.log("Mocked Store", state)
    const store = mockStore(state);
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );    
  };

export const MOCK_IntersectionObserver = intersectionObserverMock;