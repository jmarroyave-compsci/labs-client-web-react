import Directors from './directors'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Directors',
  component: Directors,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Directors {...args} />;


const data = mockupData.data.dashboard.directors; 

export const Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text',
};