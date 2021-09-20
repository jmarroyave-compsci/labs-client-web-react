import Page, { QRY_DASHBOARD } from './page'
import mockupData from 'res/mockup-data/dashboard/dashboard.json'

export default {
  title: 'Project/Pages/Movie',
};

const Template = args => <Page {...args} />;

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
        result: mockupData,
        loading: false,
      },
    ],
  },
};