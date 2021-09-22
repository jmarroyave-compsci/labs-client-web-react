import Layout from './layout'
import mockupData from 'res/mockup-data/pages/people/data.json'

export default {
  title: 'Project/Pages/People',
};

const Template = args => <Layout {...args} />;

export const Controls = Template.bind({});

Controls.args = {
  loading: false,
  data: mockupData,
};
