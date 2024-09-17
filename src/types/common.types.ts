export type LoaderConfig = {
    text: string,
    state: boolean
};
export type ModalConfig = {
    title: string;
    message: string;
    onClose: () => void;
};



export type Product = {
    __typename: string;
    id: string;
    image: string;
    price: number;
    name: string;
}