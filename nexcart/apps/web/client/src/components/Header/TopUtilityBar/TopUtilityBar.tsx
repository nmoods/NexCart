import styles from "./TopUtility.module.css";
import { MapPin, MessageCircleWarning, Van } from "lucide-react";

export const TopUtilityBar = () => {
    return (
        <div className={styles["navBar"]}>
            <div className={styles["topUtilityBarRightLeft"]}>
                Welcome to woldwide megamart!
            </div>

            <div className={styles["topUtilityBarRight"]}>
                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <MapPin />
                    </span>
                    <span>Deliver to 423651</span>
                    |
                </div>

                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <Van />
                    </span>
                    <span>Track your order</span>
                    |
                </div>

                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <MessageCircleWarning />
                    </span>
                    <span>All Offers</span>
                </div>
            </div>
        </div>
    );
};

export default TopUtilityBar;