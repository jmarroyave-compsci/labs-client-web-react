import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import intersectionObserverMock from './lib/__mocks__/intersectionObserverMock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ERROR_HEADER_TEXT } from 'core/ui/error'
import * as fs from 'fs';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from 'app/config/theme'

export const itMustHaveNoErrors = ( container ) => {
  var errors = container.queryByText(ERROR_HEADER_TEXT);
  expect(errors).toBeNull()
}

export const TestProvider = ( { children, state={}, namespace, query=null } ) => { 
    if(query){
      console.log("loading data from", query)
      const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/${query.toLowerCase()}.json`).toString()).data.data
      const key = Object.keys(data)[0]
      state = {...state, data: data[key]};
    }

    return (
      <StateProvider state={ {[namespace] : state} }>
        {children}
      </StateProvider>
    );    
  };

export const StateProvider = ( { children, state={} } ) => { 
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    //console.log("Mocked Store", state)
    const store = mockStore(state);
    const theme = getTheme( "light" );

    return (
      <Provider store={store}>
        <ThemeProvider theme={ theme }>
          {children}
        </ThemeProvider>
      </Provider>
    );    
  };

export const MOCK_IntersectionObserver = intersectionObserverMock;