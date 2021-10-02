import React from 'react'
import { render, screen } from '@testing-library/react';
import RelatedStories from './related_stories';

import { BrowserRouter as Router } from 'react-router-dom';

test('test', () => {
  render(
    <Router> 
      <RelatedStories filter="movies"/>
    </Router>
  );
  const errEl = screen.queryByText(/error in component/i);
  expect(errEl).toBeNull();
});