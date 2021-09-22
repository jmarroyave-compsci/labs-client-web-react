import Layout from './layout'
import mockupData from 'res/mockup-data/pages/home/data.json'

export default {
  title: 'Project/Pages/Dashboard',
};

const Template = args => <Layout {...args} />;

export const Controls = Template.bind({});

Controls.args = {
  loading: false,
  data: mockupData,
};
