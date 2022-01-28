import Component from './related_stories'

export default {
  title: 'Project/Components/UI/RelatedStories',
};

const Template = args => <Component {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  filter: "awards"
};

