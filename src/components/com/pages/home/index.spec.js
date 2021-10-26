import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors, TestProvider } from "tests/jest/shared"

import Page from '.';
import config from './.config';
 
describe(`${config.automata.name.toUpperCase()}`, () => {
  let store;
  let component;
 
  beforeEach(() => { 
    component = (
      <TestProvider state={{}}>
        <Page />
      </TestProvider>
    );    
	});
 
 
  it('compare against snapshot', () => {
    const renderer = render(component)
    itMustHaveNoErrors(renderer)
  });
});
