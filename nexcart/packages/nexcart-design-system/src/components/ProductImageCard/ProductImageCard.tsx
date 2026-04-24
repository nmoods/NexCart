import styles from './ProductImageCard.module.css';

type ProductImageCardProps = {
    label: string;
    image: string;
};

export const ProductImageCard = ({ label, image }: ProductImageCardProps) => {
    return (
        <div className={styles['product-image__card']}>
            <div
                className={styles['product-image__card--circle']}
                tabIndex={0}
                role="button"
            >
                <img
                    src={image}
                    alt={label}
                    className={styles['product-image__card--image']}
                    loading="lazy"
                />
            </div>
            <span className={styles['product-image__card--label']}>
                {label}
            </span>
        </div>
    );
};