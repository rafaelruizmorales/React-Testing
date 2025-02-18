import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Counter from '../Counter';

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  afterEach(() => {
    cleanup()
  });

  it('renders count', () => {
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    const button = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(button);
    
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});