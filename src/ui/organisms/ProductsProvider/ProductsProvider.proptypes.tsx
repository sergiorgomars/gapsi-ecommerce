import { Product } from "@appTypes/common.types";

export type ProductsProviderProps = {
    children?: React.ReactNode | null;
}
export type ProductsContextType = {
    data: ProductsContextData;
    dispatch: React.Dispatch<React.SetStateAction<ProductsContextData>>
}
export type ProductsContextData = {
    products?: Array<Product>,
    currentPage: number,
    searchString: string;
    cartItems: number;
}