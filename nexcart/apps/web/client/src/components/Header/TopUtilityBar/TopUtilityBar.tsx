import styles from "./TopUtility.module.css";
import { MapPin, MessageCircleWarning, Van } from "lucide-react";

const ICON_SIZE = 16;

export const TopUtilityBar = () => {
    return (
        <div className={styles["navBar"]}>
            <div className={styles["topUtilityBarRightLeft"]}>
                Welcome to woldwide megamart!
            </div>

            <div className={styles["topUtilityBarRight"]}>
                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <MapPin size={ICON_SIZE} />
                    </span>
                    <span>Deliver to <b>423651</b></span>
                    |
                </div>

                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <Van size={ICON_SIZE} />
                    </span>
                    <span>Track your order</span>
                    |
                </div>

                <div className={styles["item"]}>
                    <span className={styles["icon"]}>
                        <MessageCircleWarning size={ICON_SIZE} />
                    </span>
                    <span>All Offers</span>
                </div>
            </div>
        </div>
    );
};

export default TopUtilityBar;