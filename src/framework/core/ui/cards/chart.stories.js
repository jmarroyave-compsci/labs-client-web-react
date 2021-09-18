import React from 'react';
import ChartPanel from './chart';
import BarChart from "core/ui/charts/horizontal-bars-chart"
import data from 'res/mockup-data/charts/horizontal-bars.json';

export default {
  title: 'Components/Cards/Chart',
  component: ChartPanel,
  argTypes: {
  },
};

const Template = args => <ChartPanel {...args} />;

export const Test = Template.bind({});
Test.args = {
  chart: <BarChart data={data} height={200} small={true}/>,
  children: <div>this is the child</div>,
  color: "danger",
};

export const Test2 = Template.bind({});
Test2.args = {
  chart: <BarChart data={data} height={200} small={true}/>,
  children: <div>
              <h5>Title</h5>
              <div>this is the child</div>
            </div>,
  color: "danger",
};
