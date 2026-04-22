import {type HTMLAttributes} from 'react';
import styles from './Card.module.css';

type DivProps = HTMLAttributes<HTMLDivElement>;

const Card = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card__container']} ${className}`} {...rest}>
        {children}
    </div>
);

const ImageContainer = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--image-container']} ${className}`} {...rest}>
        {children}
    </div>
);

const Image = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--image']} ${className}`} {...rest}>
        {children}
    </div>
);

const Promo = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--promo']} ${className}`} {...rest}>
        {children}
    </div>
);

const Info = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--info-container']} ${className}`} {...rest}>
        {children}
    </div>
);

const TextBlock = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--textblock']} ${className}`} {...rest}>
        {children}
    </div>
);

const Title = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--title']} ${className}`} {...rest}>
        {children}
    </div>
);

const PriceDescription = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--price-description']} ${className}`} {...rest}>
        {children}
    </div>
);

const Divider = ({className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--divider']} ${className}`} {...rest} />
);

const PriceContainer = ({children, className = '', ...rest}: DivProps) => (
    <div className={`${styles['nx-card--price-container']} ${className}`} {...rest}>
        {children}
    </div>
);

const Price = ({children, className = '', ...rest}: HTMLAttributes<HTMLSpanElement>) => (
    <span className={`${styles['nx-card--price']} ${className}`} {...rest}>
        {children}
    </span>
);

Card.ImageContainer = ImageContainer;
Card.Image = Image;
Card.Promo = Promo;
Card.Info = Info;
Card.TextBlock = TextBlock;
Card.Title = Title;
Card.PriceDescription = PriceDescription;
Card.Divider = Divider;
Card.PriceContainer = PriceContainer;
Card.Price = Price;

export default Card;