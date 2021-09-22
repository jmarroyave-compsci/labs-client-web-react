import React from 'react';
import List from './list'
import Icon from 'core/ui/icon';

import data from 'res/mockup-data/list.json'


export default {
  title: 'Components/List',
  component: List,
  argTypes: {
  },
};

const Template = args => <List {...args} />;

export const NoParams = Template.bind({});
NoParams.args = {
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const MinItems = Template.bind({});
MinItems.args = {
  minItems: 3,
  loading: true,
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
  minItems: 3,
  loading: true,
  avatarType: "none"
};

export const Data = Template.bind({});
Data.args = {
  data: data,
  primaryLambda: (item)=>item['text'],
  avatarLambda: (item)=><Icon name={'default'}/>, 
  avatarType: "icon",
};
