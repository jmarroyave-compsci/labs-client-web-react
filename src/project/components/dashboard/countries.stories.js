import Countries from './countries'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Countries',
  component: Countries,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Countries {...args} />;


const data = mockupData.data.dashboard.countries; 

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


