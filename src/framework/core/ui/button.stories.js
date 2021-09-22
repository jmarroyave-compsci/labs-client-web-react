import React from 'react';
import Button from './button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
  },
};

const Template = args => <Button {...args} />;

export const Data = Template.bind({});
Data.args = {
  icon: "save",
};

