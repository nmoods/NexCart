import {forwardRef, type ReactNode} from "react";
import {ChevronDown} from "lucide-react";
import styles from './Dropdown.module.css';

export const CHEVRON_DOWN_SIZE = 16;

export type DropdownProps = {
    children: ReactNode
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
    ({children}) => {
        return (
            <div className={styles['nx-dropdown']}>
                <select
                    className={styles['nx-dropdown__select']}>
                    {children}
                </select>
                <ChevronDown
                    className={styles['nx-dropdown__icon']}
                    size={CHEVRON_DOWN_SIZE}
                />
            </div>
        );
    }
);