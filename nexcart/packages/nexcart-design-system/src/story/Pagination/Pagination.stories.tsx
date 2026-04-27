import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

const meta = {
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        currentPage: {
            control: 'number',
            description: 'The current active page',
        },
        totalPages: {
            control: 'number',
            description: 'Total number of pages',
        },
        totalItems: {
            control: 'number',
            description: 'Total number of items (enables items-per-page mode)',
        },
        itemsPerPage: {
            control: 'number',
            description: 'Number of items displayed per page',
        },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 8,
        onPageChange: () => {},
    },
};

export const MiddlePage: Story = {
    args: {
        currentPage: 4,
        totalPages: 8,
        onPageChange: () => {},
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 8,
        totalPages: 8,
        onPageChange: () => {},
    },
};

export const WithItemsPerPage: Story = {
    args: {
        currentPage: 1,
        totalPages: 3,
        onPageChange: () => {},
        totalItems: 103,
        itemsPerPage: 50,
        itemsPerPageOptions: [10, 25, 50, 100],
        onItemsPerPageChange: () => {},
    },
};

export const Interactive: Story = {
    args: {
        currentPage: 1,
        totalPages: 1,
        onPageChange: () => {},
    },
    render: () => {
        const [page, setPage] = useState(1);
        const [perPage, setPerPage] = useState(50);
        const totalItems = 103;
        const totalPages = Math.ceil(totalItems / perPage);

        return (
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                totalItems={totalItems}
                itemsPerPage={perPage}
                itemsPerPageOptions={[10, 25, 50, 100]}
                onItemsPerPageChange={(v) => {
                    setPerPage(v);
                    setPage(1);
                }}
            />
        );
    },
};
