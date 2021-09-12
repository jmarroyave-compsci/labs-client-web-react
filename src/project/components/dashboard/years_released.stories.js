import YearsReleased from './years_released'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/YearsReleased',
  component: YearsReleased,
  argTypes: {
  },
};

// New story using controls
const Template = args => <YearsReleased {...args} />;


const data = mockupData.data.dashboard.yearsReleased; 

export const Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text',
};

export const Graph = Template.bind({});
Graph.args = {
  data: data,
  format: 'graph',
};

export const NoData = Template.bind({});
NoData.args = {
  data: null
};


