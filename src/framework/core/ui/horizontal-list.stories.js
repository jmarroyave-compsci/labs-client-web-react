import React from 'react';
import List from './horizontal-list'

export default {
  title: 'Core/List Horizontal',
  component: List,
  argTypes: {
  },
};

const Template = args => <List {...args} />;

export const NoParams = Template.bind({});
NoParams.args = {
};

export const Loading = Template.bind({});
Loading.args = {
  data: [1,2,3,4,5],
};

