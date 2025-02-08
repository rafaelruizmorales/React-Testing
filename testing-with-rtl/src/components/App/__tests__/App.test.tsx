import { describe, it, expect, beforeEach, afterEach} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    });
    
    afterEach(() => {
        cleanup()
    });
    
    it('renders App', () => {
        expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });
});