import React from 'react';
import Chart from './bars-chart';

import data from 'res/mockup-data/charts/bars.json';


export default {
  title: 'Core/Charts/Bars',
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
};
