import React from 'react';
import TreeMap from './tree_map'
import mockupData from 'res/mockup-data/charts/tree-map.json' 

export default {
  title: 'Components/Charts/TreeMap',
  component: TreeMap,
  argTypes: {
  },
};

const Template = args => <TreeMap {...args} />;

export const Data = Template.bind({});
Data.args = {
  data: mockupData,
};
