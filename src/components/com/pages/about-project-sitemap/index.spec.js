import React from 'react';
import {render, fireEvent, waitFor, screen, prettyDOM} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors, TestProvider } from "tests/jest/shared"

import TestComponent from '.';
import config from './.config';

describe(`${config.automata.name.toUpperCase()}`, () => {
  beforeEach(() => { 
	}); 
 
  it('compare Page against snapshot', () => {
    const renderer = render(
      <TestProvider state={{}}>
        <TestComponent render="page"/>
      </TestProvider>
    )

    itMustHaveNoErrors(renderer)
    expect(renderer.container).toMatchSnapshot();
  });

  it('compare against snapshot', () => {
    const renderer = render(
      <TestProvider state={{}}>
        <TestComponent render="banner"/>
      </TestProvider>
    )   

    itMustHaveNoErrors(renderer)
    expect(renderer.container).toMatchSnapshot();
  });
});
