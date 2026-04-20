import { describe, it , expect,vi} from 'vitest';
import {render,screen} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {Input} from './Input.tsx';

describe('Input Component', () => {
    it('component renders normally', ()=> {

        render(
            <Input
                title="Title"
                placeholder="Placeholder"
                value=""
                onChange={() =>{}}
            />
        );
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument();
    })

    it('displays error message when provided', ()=> {

        render(
            <Input
                title="Email"
                placeholder="Email email :"
                value=""
                onChange={() =>{}}
                errorMessage="Email is required"
                />
        );
        expect(screen.getByText('Email is required')).toBeInTheDocument();
    })
    it('should insert single character into input field', async () => {
        const onChange = vi.fn();
        render(
            <Input
                title="Test"
                placeholder="Enter text"
                value=""
                onChange={onChange}
            />
        );

        const input = screen.getByPlaceholderText('Enter text');
        await userEvent.type(input, 'a');

        expect(onChange).toHaveBeenCalledWith('a');
    });

})