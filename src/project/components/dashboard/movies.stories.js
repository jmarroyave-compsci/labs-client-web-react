import Movies from './movies'
import mockupData from 'res/mock-data/dashboard.json'

export default {
  title: 'Page/Dashboard/Movies',
  component: Movies,
  argTypes: {
  },
};

// New story using controls
const Template = args => <Movies {...args} />;


const data = mockupData.data.dashboard.movies; 

export const Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text',
};