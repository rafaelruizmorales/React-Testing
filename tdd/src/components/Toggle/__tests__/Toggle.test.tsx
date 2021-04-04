import * as React from 'react';

import { render, screen, cleanup } from '@testing-library/react';

import Toggle from '../Toggle';

describe('Toggle Component', () => {

  afterEach(() => {
    cleanup()
  });

  describe('Initial test', () => {

    it('should render Toggle Component', async () => {
      render(<Toggle />);  
      const mainDiv = await screen.findByTestId('toggle_component_wrapper')
      const toggleElement = await screen.findByTestId('toggle')
      
      expect(mainDiv).toBeInTheDocument();
      expect(toggleElement).toBeInTheDocument();
    });
  });

  describe('Behaviour of the button', () => {

    it('should display Turn on as initial state', () => {
      render(<Toggle />);
      const button = document.querySelector("[data-testid=toggle]")
      
      expect(button).toHaveTextContent('Turn on')

    });

    it('should toggle its value when clicked (dont forget { bubbles: true })', () => {
      render(<Toggle />);
      const button = document.querySelector("[data-testid=toggle]")
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }))

      expect(button).toHaveTextContent('Turn off')
    });

  });

});
