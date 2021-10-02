import React from 'react';
import PieChart from './pie_chart'
import mockupData from 'res/mockup-data/charts/pie.json'

export default {
  title: 'Core/Charts/Pie',
  component: PieChart,
  argTypes: {
  },
};

const Template = args => <PieChart {...args} />;

export const Test = Template.bind({});
Test.args = {
  data: mockupData,
};
