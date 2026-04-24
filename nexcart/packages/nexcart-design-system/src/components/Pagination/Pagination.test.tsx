import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {

    it('renders one dot per page', () => {
        render(
            <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        );
        expect(screen.getAllByRole('button')).toHaveLength(5);
    });

    it('marks the current page as active with aria-current', () => {
        render(
            <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />
        );
        const activeDot = screen.getByRole('button', { name: 'Go to page 3' });
        expect(activeDot).toHaveAttribute('aria-current', 'page');
    });

    it('does not mark other pages as active', () => {
        render(
            <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />
        );
        const inactiveDot = screen.getByRole('button', { name: 'Go to page 1' });
        expect(inactiveDot).not.toHaveAttribute('aria-current');
    });

    it('calls onPageChange with the clicked page number', async () => {
        const onPageChange = vi.fn();
        render(
            <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
        );
        await userEvent.click(screen.getByRole('button', { name: 'Go to page 3' }));
        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it('renders the correct number of dots for many pages', () => {
        render(
            <Pagination currentPage={1} totalPages={12} onPageChange={() => {}} />
        );
        expect(screen.getAllByRole('button')).toHaveLength(12);
    });
});
