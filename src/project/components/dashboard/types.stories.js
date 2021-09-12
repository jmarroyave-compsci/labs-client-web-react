import Types from './types'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Types',
  component: Types,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Types {...args} />;


const data = mockupData.data.dashboard.types; 

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


