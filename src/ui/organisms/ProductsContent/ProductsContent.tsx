

'use client'
import styles from "./ProductsContent.styles.module.scss";
import { useContext, useEffect, useRef } from "react";
import { _$get } from "@utils/fetching";

import { GUIInvokerObserver } from "@utils/observers";

import { ProductCard } from "@ui/molecules";
import { ProductsContext } from "@ui/organisms";

import { GetProducts } from "@appTypes/services.types";

export default function ProductContainer( ){

    const { data, dispatch } = useContext(ProductsContext)!;
    const { products, currentPage, searchString } = data;

    const flag = useRef<boolean>(false)
    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
            if(isAtBottom && !flag.current) {
                flag.current = true;
                let newContext = {...data};
                document.body.style.overflow = 'hidden';
                GUIInvokerObserver.emit("invokeLoaderWithText", { state: true, text: "Cargando items"});
                newContext.currentPage = currentPage+1;
                _$get<GetProducts>(`?keyword=${newContext.searchString}&page=${newContext.currentPage}&sortBy=best_match`)
                .then(response => {
                    GUIInvokerObserver.emit("invokeLoader", false);
                    if('data' in response) {
                        document.body.style.overflow = '';
                        const newProducts = response.data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
                        newContext.products = products ? [...products, ...newProducts] : [...newProducts];
                        flag.current = false;
                        dispatch((f) => { return {...f, ...newContext }});
                    }
                });
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [data])

    const handleSearch = ( ) => {
        if(!searchString) {
            GUIInvokerObserver.emit("invokeModalWithConfig", {
                title: "Error",
                message: "Este campo no puede ir vacío"
            })
            return;
        }
        GUIInvokerObserver.emit("invokeLoaderWithText", { state: true, text: "Cargando items"});
        _$get<GetProducts>(`?keyword=${searchString}&page=1&sortBy=best_match`)
        .then(response => {
            GUIInvokerObserver.emit("invokeLoader", false)
            if('data' in response) {
                document.body.style.overflow = '';
                dispatch((f) => {
                    return {
                        ...f,
                        products: response.data.item.props.pageProps.initialData.searchResult.itemStacks[0].items,
                        currentPage: 1,
                        searchString: searchString,
                    }
                });
            }
        });
    }
    
    return (
        <section className={styles.container} ref={listRef} >
            <div className={styles.title_container}>
                <p className={styles.title}>Productos</p>
                <div className={styles.search_bar}>
                    <input 
                        type="text" 
                        placeholder="Buscar productos" 
                        value={searchString} 
                        onChange={(e) => dispatch((f) => { return {...f, searchString: e.target.value}})}
                    />
                    <div onClick={handleSearch}>Buscar</div>
                </div>
            </div>

                { products ?
                    <div className={styles.cards_container}>
                        {
                        products.map((product) => {
                            if(product.__typename === "Product")
                            return (
                                <ProductCard 
                                    key={product.id}
                                    productID={product.id}
                                    name={product.name}
                                    imgURL={product.image}
                                    price={product.price}
                                />
                            )
                            else return null;
                        })
                    }
                    </div>
                : <p>No se han encontrado productos. Intente agregando valores en el campo de búsqueda.</p>
                }
            
        </section>
    )

}