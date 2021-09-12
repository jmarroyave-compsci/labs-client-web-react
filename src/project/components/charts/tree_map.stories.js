import TreeMap from './tree_map'
import mockupData from 'res/mock-data/dashboard.json'
const data = mockupData.data.dashboard.countries; 

export default {
  title: 'Components/TreeMap',
  component: TreeMap,
  argTypes: {
  },
};

const Template = args => <TreeMap {...args} />;

export const Data = Template.bind({});
Data.args = {
  data: data,
};

