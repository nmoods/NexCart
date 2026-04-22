import styles from './ProductImageCard.module.css';

type ProductImageCardProps = {
    label: string;
    image: string;
};

export const ProductImageCard = ({ label, image }: ProductImageCardProps) => {
    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.circle}
                tabIndex={0}
                role="button"
            >
                <img
                    src={image}
                    alt={label}
                    className={styles.image} />
            </div>
            <span
                className={styles.label}>
                {label}
            </span>
        </div>
    );
};