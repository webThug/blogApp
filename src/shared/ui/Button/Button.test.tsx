import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Clear variant', () => {
        render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
