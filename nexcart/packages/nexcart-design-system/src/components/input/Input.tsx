import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    title: string;
    placeholder: string;
    value: string;
    onChange?: (value: string) => void;
    errorMessage?: string;
}

export const Input = ({ title, placeholder, value, onChange,errorMessage }: InputProps) => {
    return (
        <div className={styles['input--container']}>
            <div className={styles['input--title']}>{title}</div>
            <input
                className={styles['input--textbox']}
                placeholder={placeholder}
                value={value}
                type="text"
                onChange={(e) => onChange?.(e.target.value)}
            />
            {errorMessage}{
                <span className={styles['input--error-message']}>{errorMessage}</span>
                }
        </div>
    );
};
