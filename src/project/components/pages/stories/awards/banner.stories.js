import Component from './banner'
import mockupData from 'res/mockup-data/stories/awards/data.json'

export default {
  title: 'Project/Stories/Awards/Banner',
};

const Template = args => <Component {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  data: mockupData
};

