import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
  return (
    <div className={styles['product-card']}>
      <img src={props.photoUrl} alt="Product" className={styles['product-photo']} />
      <div className={styles['product-details']}>
        <p className={styles['product-price']}>$9.99</p>
        <p className={styles['product-description']}>{props.description}</p>
      </div>
      <button type="button" className={styles['cartBtn']}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
