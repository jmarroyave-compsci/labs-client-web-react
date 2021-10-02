import Component from './number'

export default {
  title: 'Core/Number',
};

const Template = args => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  value : "123456789",
};

export const FormatComma = Template.bind({});
FormatComma.args = {
  value : "123456789",
  format: "0,0",
};

export const FormatA = Template.bind({});
FormatA.args = {
  value : "123456789",
  format: "0a",
};

export const FormatADecimal = Template.bind({});
FormatADecimal.args = {
  value : "123456789",
  format: "0.0a",
};

