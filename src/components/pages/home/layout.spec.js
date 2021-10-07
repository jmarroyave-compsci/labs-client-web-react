import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './layout-xs'
import mockupData from 'res/mockup-data/pages/home/data.json'

import Error from 'core/components/error'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';


/*
//import { render, screen } from '@testing-library/react';
test('no error components', () => {
  render(
    <Layout data={mockupData}/>
  );
  const errEl = screen.findByText(/Error in components/i);
  expect(errEl).toBeDefined();
});


test('snapshot', () => {
  const component = renderer.create(
    <Layout data={mockupData}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
*/

describe('Home page', () => {
  it('error in components?', () => {
    const wrapper = render(
      <Layout data={mockupData} />
    );
    expect(wrapper.find(Error)).toEqual(0);
  });
})