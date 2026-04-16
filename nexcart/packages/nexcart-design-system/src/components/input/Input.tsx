import styles from './Input.module.css';
import type {ReactNode, ComponentType} from 'react';

interface InputProps {
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
    iconStart?: ComponentType | ReactNode;
    iconEnd?: ComponentType | ReactNode;
}

export const Input = ({ title, placeholder, value, onChange, errorMessage, iconStart,iconEnd }: InputProps) => {

    const inputClass = [styles['nx-input--textbox'],
    errorMessage ? styles['nx-input--textbox--error'] : ''].filter(Boolean).join(' ');


    const handleIconRender = (icon?: ComponentType | ReactNode) => {
        const IconComponent = typeof icon === 'function' ? icon : null;
        return IconComponent ? <IconComponent /> : icon;
    };

    const iconStartElement = handleIconRender(iconStart);
    const iconEndElement = handleIconRender(iconEnd);

    return (
        <div className={styles['nx-input--container']}>
            <div className={styles['nx-input--title']}>{title}</div>
            <div className={styles['nx-input--wrapper']}>
                {iconStartElement && <div className={styles['nx-input--icon--start']}>{iconStartElement}</div>}
                <input
                    className={inputClass}
                    placeholder={placeholder}
                    value={value}
                    type="text"
                    onChange={(e) => onChange?.(e.target.value)}
                />
                {iconEndElement && <div className={styles['nx-input--icon--end']}>{iconEndElement}</div>}
            </div>

            {errorMessage &&
                <span className={styles['nx-input--error-message']}>{errorMessage}</span>
                }
        </div>
    );
};
