import styles from "./ProductHeader.module.css";
import { ChevronRight } from "lucide-react";

type ProductHeaderProps = {
    title: string;
    highlight: string;
};

export const ProductHeader = ({
                                  title,
                                  highlight,
                              }: ProductHeaderProps) => {
    return (
        <div className={styles["product-header"]}>
            <div className={styles["product-header__left"]}>
        <span className={styles["product-header__title"]}>
          {title}{" "}
            <span className={styles["product-header__highlight"]}>
            {highlight}
          </span>
        </span>
                <div className={styles["product-header__underline"]} />
            </div>

            <div className={styles["product-header__right"]}>
        <span className={styles["product-header__view-all"]}>
          View All
        </span>
                <ChevronRight
                    size={18}
                    color="#1fd8db" />
            </div>
        </div>
    );
};