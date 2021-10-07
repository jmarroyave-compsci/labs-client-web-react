import Component from './awards'
import mockupData from 'res/mockup-data/components/pieces/awards/data.json'

export default {
  title: 'Project/Components/Pieces/Awards',
};

const Template = args => <Component {...args} />;


export const Loading = Template.bind({});
Loading.args = {
  loading : true,
};

export const Large = Template.bind({});
Large.args = {
  data : mockupData,
};

export const Mini = Template.bind({});
Mini.args = {
  data : mockupData,
  mini: true,
};