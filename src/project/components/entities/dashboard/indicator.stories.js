import Component from './indicator'

export default {
  title: 'Project/Components/UI/Indicator',
};

const Template = args => <Component {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading : true,
};

export const Numbers = Template.bind({});
Numbers.args = {
  data : "123456789",
};