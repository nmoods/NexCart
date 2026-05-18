import styles from "./MainHeader.module.css";
import { Menu, ShoppingCart, UserKey } from "lucide-react";

export const MainHeader = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["left"]}>
                <Menu />
                <span className={styles["logo"]}>MegaMart</span>
            </div>

            <div className={styles["searchWrapper"]}>
                <input
                    className={styles["searchInput"]}
                    placeholder="Search essentials, groceries and more..."
                />
                <button className={styles["searchIcon"]}>🔍</button>
            </div>

            <div className={styles["right"]}>
                <button className={styles["action"]}>
                    <UserKey />
                    <span>Sign Up/Sign In</span>
                </button>

                <span className={styles["separator"]}>|</span>

                <button className={styles["action"]}>
                    <ShoppingCart color="#11b4d4" />
                    <span>Cart</span>
                </button>
            </div>
        </header>
    );
};

export default MainHeader;