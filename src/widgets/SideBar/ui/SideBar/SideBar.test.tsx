import { fireEvent, render, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
