
import styles from "./ProductCard.styles.module.scss";

import { ProductCardProps } from "./ProductCard.proptypes";
import { useState } from "react";

export default function ProductCard( {name, imgURL, price, productID} : ProductCardProps ){

    const formatter = new Intl.NumberFormat('en-US', { 
        style: 'decimal', 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      });

    return (
        <div 
            draggable
            onDragStart={(e) => {e.dataTransfer.setData('text/plain', String(productID));}}
            className={styles.card_container}
            //onClick={() => { location.href = `/productDetail/${productID}` }}
        >
           <img 
                draggable={false}
                src={imgURL} 
                alt={`${name}_img`} 
            />
           <p className={styles.name}>{name}</p>
           <p className={styles.price}>${formatter.format(price)}</p>
        </div>
    )

}