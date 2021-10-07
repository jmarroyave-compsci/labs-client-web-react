import Layout from './layout'
import mockupData from 'res/mockup-data/stories/awards/data.json'

export default {
  title: 'Project/Stories/Awards/Page',
};

const Template = args => <Layout {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Controls = Template.bind({});
Controls.args = {
  data: mockupData,
};

