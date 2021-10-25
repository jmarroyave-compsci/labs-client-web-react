import React from 'react';
import {render, fireEvent, waitFor, screen, prettyDOM} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors, StateProvider } from "tests/jest/shared"

import TestComponent from '.';
import config from './.config';

describe(`${config.automata.name.toUpperCase()}`, () => {
  beforeEach(() => { 
	}); 
 
  it('compare Page against snapshot', () => {
    const renderer = render(
      <StateProvider state={{}}>
        <TestComponent render="page"/>
      </StateProvider>
    )
   

    itMustHaveNoErrors(renderer)
    expect(renderer.container).toMatchSnapshot();
  });

  it('compare against snapshot', () => {
    const renderer = render(
      <StateProvider state={{}}>
        <TestComponent render="banner"/>
      </StateProvider>
    )

    
    itMustHaveNoErrors(renderer)
    expect(renderer.container).toMatchSnapshot();
  });
});
