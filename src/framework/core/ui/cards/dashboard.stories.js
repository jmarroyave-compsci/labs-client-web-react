import React from 'react';
import CardDashboard from './dashboard';

import Warning from "@material-ui/icons/Warning";
import Danger from "core/ui/boxes/danger";

export default {
  title: 'Core/Cards/Dashboard',
  component: CardDashboard,
  argTypes: {
  },
};

const Template = args => <CardDashboard {...args} />;

export const Test = Template.bind({});
Test.args = {
  title: "Used Space",
  subtitle: <span>49/50 <small>GB</small></span>,
  footer: <div>
    <Danger>
      <Warning />
    </Danger>
    <a href="#pablo" onClick={(e) => e.preventDefault()}>
      Get more space
    </a>  
  </div>
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  title: "Used Space",
  subtitle: <span>49/50 <small>GB</small></span>,
};
