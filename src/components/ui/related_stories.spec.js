import React from 'react'
import { render, screen } from '@testing-library/react';
import RelatedStories from './related_stories';

test('test', () => {
  render(
      <RelatedStories filter="movies"/>
  );
  const errEl = screen.queryByText(/error in component/i);
  expect(errEl).toBeNull();
});