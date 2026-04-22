import styles from './ProductImageCard.module.css';

type ProductImageCardProps = {
    label: string;
    image: string;
};

export const ProductImageCard = ({ label, image }: ProductImageCardProps) => {
    return (
        <div className={styles['product-image-card']}>
            <div
                className={styles['product-image-card__circle']}
                tabIndex={0}
                role="button"
            >
                <img
                    src={image}
                    alt={label}
                    className={styles['product-image-card__image']} />
            </div>
            <span className={styles['product-image-card__label']}>
                {label}
            </span>
        </div>
    );
};