import { Dropdown } from '@nexcart/nexcart-design-system';
import {
    beauty_options,
    electronics_options,
    fashion_options,
    groceries_options,
    home_improvement_options,
    home_kitchen_options,
    premium_fruits_options,
    sports_toys_luggage_options
} from "./CategoryNavigationBar.constants.ts";
import styles from './ CategoryNavigationbar.module.css';

export const CategoryNavigationBar = () => {
    return (
        <div className={styles['category-navigation-bar']}>
            <Dropdown>
                {groceries_options.map((groceriesOptions) => (
                    <option key={groceriesOptions.value} value={groceriesOptions.value}>
                        {groceriesOptions.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {premium_fruits_options.map((premiumFruitOption) => (
                    <option key={premiumFruitOption.value} value={premiumFruitOption.value}>
                        {premiumFruitOption.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {home_kitchen_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {fashion_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {electronics_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {beauty_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {home_improvement_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>

            <Dropdown>
                {sports_toys_luggage_options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Dropdown>
        </div>
    );
};

export default CategoryNavigationBar;
