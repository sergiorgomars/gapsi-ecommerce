"use client";
import React, { createContext, useEffect, useState } from 'react';
import { ProductsContextType, ProductsContextData, ProductsProviderProps } from "./ProductsProvider.proptypes";
import { ProductsContent } from "@ui/organisms"; 

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export default function ProductsProvider( { children } : ProductsProviderProps ){
  
  //hacer un fetch de datos para traer datos de la invitación segun un id
  const [context, setContext] = useState<ProductsContextData>({
    currentPage: 1,
    searchString: "",
    cartItems: 0,
  });

  useEffect(() => {

  }, [])

  return (
    <ProductsContext.Provider value={{data: context, dispatch: setContext}} >
      {children}
    </ProductsContext.Provider>
  )
}
