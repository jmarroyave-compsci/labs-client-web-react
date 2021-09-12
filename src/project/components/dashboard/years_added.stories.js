import YearsAdded from './years_added'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/YearsAdded',
  component: YearsAdded,
  argTypes: {
  },
};

// New story using controls
const Template = args => <YearsAdded {...args} />;


const data = mockupData.data.dashboard.yearsAdded; 

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


