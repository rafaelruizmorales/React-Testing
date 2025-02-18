import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Toggle from '../Toggle';

describe('Toggle', () => {
    beforeEach(() => {
        render(<Toggle />)
    });

    afterEach(() => {
        cleanup()
    });

    describe('Initial render', () => {
        it('Warper Div and Button should be in the document', async () => {
            const mainDiv = await screen.findByTestId('toggle_component_wrapper')
            const toggleElement = await screen.findByTestId('toggle')
            
            expect(mainDiv).toBeInTheDocument();
            expect(toggleElement).toBeInTheDocument();
        });

    });

    describe('Clicking the button', () => {

        it('Initially, the Toggle is off -> text = Turn on', () => {    
            const button = document.querySelector("[data-testid=toggle]")
            
            expect(button).toHaveTextContent('Turn on')
        });

        it('Clicking the button changes the Toggle -> text = Turn off', () => {
            const button = screen.getAllByTestId('toggle')[0]

            fireEvent.click(button);

            expect(button).toHaveTextContent('Turn off')
        });
    });    
});