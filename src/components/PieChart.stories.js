import PieChart from './PieChart'
import mockupData from '../data/mockups/dashboard.json'
const data = mockupData.data.dashboard.types; 

export default {
  title: 'Components/PieChart',
  component: PieChart,
  argTypes: {
  },
};

const Template = args => <PieChart {...args} />;

export const Test = Template.bind({});
Test.args = {
  data: data,
};

