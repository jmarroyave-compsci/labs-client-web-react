import React from 'react';
import Timeline from './timeline';
import data from 'core/res/mockup-data/timeline/data.json';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
  },
};

const Template = args => <Timeline {...args} />;

export const Test1 = Template.bind({});
Test1.args = {
};
