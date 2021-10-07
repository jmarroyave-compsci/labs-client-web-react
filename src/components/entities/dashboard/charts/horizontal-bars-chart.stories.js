import Component from './horizontal-bars-chart'
import mockupData from 'res/mockup-data/components/ui/horizontal-bar-chart/data.json'

export default {
  title: 'Project/Components/UI/HorizontalBarsChart',
};

const Template = args => <Component {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading : true,
};

export const Data = Template.bind({});
Data.args = {
  data : mockupData,
  height: 300,
};

export const DataWithRanges = Template.bind({});
Data.args = {
  data : mockupData,
  height: 300,
  ranges: [10000, 25000, 50000, 100000],
};