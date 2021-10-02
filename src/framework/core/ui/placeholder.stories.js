import React from 'react';
import Placeholder from './placeholder'

export default {
  title: 'Core/Placeholder',
  component: Placeholder,
  argTypes: {
  },
};

const Template = args => <Placeholder {...args} />;

export const TypeTitle = Template.bind({});
TypeTitle.args = {
  type: "title",
  grow: false,
};

export const TypeText1Line = Template.bind({});
TypeText1Line.args = {
  type: "text-1-line",
  grow: false,
};

export const TypeIndicador = Template.bind({});
TypeIndicador.args = {
  type: "indicador",
  grow: false,
};

