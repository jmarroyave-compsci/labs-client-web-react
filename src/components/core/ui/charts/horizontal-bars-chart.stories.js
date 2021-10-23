import React from 'react';
import Chart from './horizontal-bars-chart';
import data from 'res/mockup-data/charts/horizontal-bars.json';

export default {
  title: 'Core/Charts/Bars Horizontal',
  component: Chart,
  argTypes: {
  },
};

const Template = args => <Chart {...args} />;

export const NoData = Template.bind({});
NoData.args = {
  data: null
};

export const Test = Template.bind({});
Test.args = {
  data: data,
  height: 100,
};
