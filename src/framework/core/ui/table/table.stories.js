import React from 'react';
import Table from './table';
import data from 'res/mockup-data/tables/tables.json';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
  },
};

const Template = args => <Table {...args} />;

export const Test1 = Template.bind({});
Test1.args = {
  tableHeaderColor:"primary",
  tableHead:data.head,
  tableData:data.body,
};
