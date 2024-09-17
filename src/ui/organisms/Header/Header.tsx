"use client"
import styles from "./Header.styles.module.scss";
import {  DragableArea } from "@ui/atoms";
import logo from "@images/logo.png";
import { useContext } from "react";
import { ProductsContext } from "@ui/organisms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRefresh } from "@fortawesome/free-solid-svg-icons";
export default function Header(){

    const { data, dispatch } = useContext(ProductsContext)!;
    
    const handleDropCart = (id: string) => {
        //Hanle add items to cart 
        const products = data.products ? [...data.products] : [];          
        const index = products?.findIndex(product => product.id === id);
        index!==-1 && products?.splice(index, 1); //remove item from products list
        dispatch((f) => { return {...f, products, cartItems: f.cartItems+1} });
    }
    return (
            <header className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo_container}>
                        <a href="/">
                            <img src={logo.src} alt="Gapsi logo" />
                        </a>
                        <a href="/">e-Commerce Gapsi</a>
                    </div>
                    <div className={styles.icons_container}>
                        <DragableArea onDrop={handleDropCart}>
                            <div className={styles.cart_container}>
                                <p>{data.cartItems}</p>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </DragableArea>
                        <FontAwesomeIcon icon={faRefresh} onClick={() => dispatch({
                            products: undefined, 
                            cartItems: 0, 
                            searchString: "",
                            currentPage: 1,    
                        })}/>
                    </div>
                </div>
            </header>
    )

}