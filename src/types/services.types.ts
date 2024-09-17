import { Product } from "@appTypes/common.types"

export type GetProducts = { 
    item: {
        props: {
            pageProps: {
                initialData: {
                    searchResult: {
                        itemStacks: Array<{
                            items: Array<Product>
                        }>
                    }
                }
            }
        }
    }
}