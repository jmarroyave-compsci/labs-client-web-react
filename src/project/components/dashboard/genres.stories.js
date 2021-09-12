import Genres from './genres'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Genres',
  component: Genres,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Genres {...args} />;


const data = mockupData.data.dashboard.genres; 

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


