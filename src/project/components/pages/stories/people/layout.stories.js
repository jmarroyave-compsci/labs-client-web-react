import Layout from './layout'
import mockupData from 'res/mockup-data/stories/people/data.json'

export default {
  title: 'Project/Stories/People/Page',
};

const Template = args => <Layout {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  data: mockupData,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
