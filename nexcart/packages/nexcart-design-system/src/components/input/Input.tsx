import styles from './Input.module.css';

interface InputProps {
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
}

export const Input = ({ title, placeholder, value, onChange,errorMessage }: InputProps) => {

    const inputClass = [styles['input--textbox'],
    errorMessage ? styles['input--textbox--error'] : ''].filter(Boolean).join('');
    return (
        <div className={styles['input--container']}>
            <div className={styles['input--title']}>{title}</div>
            <input
                className={inputClass}
                placeholder={placeholder}
                value={value}
                type="text"
                onChange={(e) => onChange?.(e.target.value)}
            />
            {errorMessage &&
                <span className={styles['input--error-message']}>{errorMessage}</span>
                }
        </div>
    );
};
