import People from './people'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/People',
  component: People,
  argTypes: {
  },
};

// New story using controls
const Template = args => <People {...args} />;


const data = mockupData.data.dashboard.people; 

export const Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text',
};