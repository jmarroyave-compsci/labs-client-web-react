import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

import NAV from 'app/config/navigation';
import Constants from 'app/config/constants';
    
import "res/assets/css/material-icon.css";
import "res/assets/css/roboto.css";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
}

