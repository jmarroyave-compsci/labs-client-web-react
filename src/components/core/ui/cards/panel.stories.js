import React from 'react';
import CardPanel from './panel';


export default {
  title: 'Core/Cards/Panel',
  component: CardPanel,
  argTypes: {
  },
};

const Template = args => <CardPanel {...args} />;

export const Test = Template.bind({});
Test.args = {
  title: "Title",
  subtitle: "subtitle comes here",
  children: <div>this is the child</div>,
};
