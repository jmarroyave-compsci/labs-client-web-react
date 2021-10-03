import Layout from './layout'
import mockupData from 'res/mockup-data/pages/movie/data.json'

export default {
  title: 'Project/Pages/Movie/Page',
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
