import Dashboard, { QRY_DASHBOARD } from './Dashboard'
import mockupData from '../data/mockups/dashboard.json'

export default {
  title: 'Pages/Dashboard',
};

const Template = args => <Dashboard {...args} />;

export const Controls = Template.bind({});

Controls.args = {
  loading: false,
};

Controls.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: QRY_DASHBOARD,
        },
        result: mockupData
      },
    ],
  },
};