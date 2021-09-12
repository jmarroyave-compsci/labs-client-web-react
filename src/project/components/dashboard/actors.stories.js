import Actors from './actors'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Actors',
  component: Actors,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Actors {...args} />;


const data = mockupData.data.dashboard.actors; 

export const Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text',
};