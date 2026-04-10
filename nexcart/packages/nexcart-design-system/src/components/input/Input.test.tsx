import { describe, it , expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import {Input} from './Input.tsx';

describe('Input Component', () => {
    it('renders with title and placeholder', ()=> {

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

})