import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import Hello from '../Hello';

describe('Hello', () => {
    afterEach(() => {
        cleanup()
    });
    
    it('renders Hello, stranger', () => {
        render(<Hello />);
        expect(screen.getByText(/Hey, stranger/i)).toBeInTheDocument();
    });
    
    it('renders Hello, name', () => {
        render(<Hello name="Peter" />);
        expect(screen.getByText(/Hello, Peter!/i)).toBeInTheDocument();
    });
})