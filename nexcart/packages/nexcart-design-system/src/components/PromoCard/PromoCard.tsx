import styles from "./PromoCard.module.css";

type PromoItem = {
    label: string;
    brand: string;
    discount: string;
    image: string;
    logo: string;
    background: string;
};

type PromoCardsProps = {
    items: PromoItem[];
};

export const PromoCard = ({ items }: PromoCardsProps) => {
    return (
        <div className={styles["promo-cards"]}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={styles["promo-card"]}
                    style={{ backgroundImage: `url(${item.background})` }}
                >
          <span className={styles["promo-card__badge"]}>
            {item.label}
          </span>

                    <div className={styles["promo-card__content"]}>
                        <img
                            src={item.logo}
                            alt={`${item.brand} logo`}
                            className={styles["promo-card__logo"]}
                        />

                        <span className={styles["promo-card__brand"]}>
              {item.brand}
            </span>

                        <span className={styles["promo-card__discount"]}>
              {item.discount}
            </span>
                    </div>

                    <img
                        src={item.image}
                        alt={item.brand}
                        className={styles["promo-card__image"]}
                    />
                </div>
            ))}
        </div>
    );
};