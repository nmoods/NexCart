import {type ReactNode} from 'react';
import styles from './Card.module.css';

interface CardProps {
    image?: ReactNode;
    title: string;
    priceDescription: string;
    price: number;
    promo?: string;
}

const Card = ({image, title, priceDescription, price, promo}: CardProps) => {

    return (
        <div className={styles['nx-card__container']}>
            <div className={styles['nx-card--image-container']}>
                <div className={styles['nx-card--image']}>{image}</div>
                {promo && <div className={styles['nx-card--promo']}>{promo}</div>}
            </div>
            <div className={styles['nx-card--info-container']}>
                <div className={styles['nx-card--textblock']}>
                    <div className={styles['nx-card--title']}>{title}</div>
                    <div className={styles['nx-card--price-description']}>{priceDescription}</div>
                </div>
                <div className={styles['nx-card--divider']} />
                <div className={styles['nx-card--price-container']}>
                    <span className={styles['nx-card--price']}>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;