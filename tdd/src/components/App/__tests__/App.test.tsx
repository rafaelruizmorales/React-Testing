import * as React from 'react';

import { render, screen, cleanup } from '@testing-library/react';

import App from '../App';

describe('App Component', () => {

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup()
  });

  it('should render App Component', async () => {  
    const mainDiv = await screen.findByTestId('app_component_wrapper')
    
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv).toHaveTextContent('Welcome to Learning Tests!')
  });

});
