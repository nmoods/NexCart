import {forwardRef, type ReactNode} from "react";
import styles from './Dropdown.module.css';
import {ChevronDown} from "lucide-react";

export const CHEVRON_DOWN_SIZE = 16;

export type DropdownProps = {
    children: ReactNode
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
    ({children}) => {
        return (
            <div className={styles.nxDropdown}>
                <select
                    className={styles.select}>
                    {children}
                </select>
                <ChevronDown
                    className={styles.icon}
                    size={CHEVRON_DOWN_SIZE}
                />
            </div>
        );
    }
);
