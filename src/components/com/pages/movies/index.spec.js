import React from 'react';
import {render, fireEvent, waitFor, screen, prettyDOM} from '@testing-library/react'
import '@testing-library/jest-dom'

import { itMustHaveNoErrors, TestProvider } from "tests/jest/shared"

import itemDashboardState from './automata/tests/item.json'
import DashboardComponent from './dashboard';
import config from './.config';

describe(`${config.automata.name.toUpperCase()}`, () => {
  beforeEach(() => { 
  }); 
 
  it('compare Dashboard against snapshot', () => {
    const renderer = render(
      <TestProvider state={{[config.automata.name]: itemDashboardState}}>
        <DashboardComponent/>
      </TestProvider>
    )

    itMustHaveNoErrors(renderer)
    //expect(renderer.container).toMatchSnapshot();
  });

});

