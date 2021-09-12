import PieChart from './pie_chart'
import mockupData from 'res/mock-data/dashboard.json'
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

