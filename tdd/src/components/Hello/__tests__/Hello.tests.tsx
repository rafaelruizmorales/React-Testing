import * as React from 'react';

import { render, screen, cleanup } from '@testing-library/react';

import Hello from '../Hello';

describe('Hello Component', () => {

  beforeEach(() => {
    cleanup()
  });

  describe('Hello Component With props', () => {

    it('should render Hello Component', async () => {
      render(<Hello name="Yun"/>);
      const mainDiv = await screen.findByTestId('hello_component_wrapper')
      
      expect(mainDiv).toBeInTheDocument();
      expect(mainDiv).toHaveTextContent('Hello, Yun!')
    });
  });

  describe('Hello Component With NO props', () => {

    it('should render Hello Component', async () => {
      render(<Hello />);
      const mainDiv = await screen.findByTestId('hello_component_wrapper')
      
      expect(mainDiv).toBeInTheDocument();
      expect(mainDiv).toHaveTextContent('Hey, stranger')
    });
  });

});
