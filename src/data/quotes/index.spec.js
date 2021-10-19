import React from 'react';
import { getQuote } from "."

describe('Quotes', () => {
  it('get a quote by tag', () => {
    var q = getQuote("director");
    expect(q).not.toBeNull();
  });
});
