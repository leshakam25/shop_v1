export interface Product {
    _id: string;
    title: string;
    desc: string;
    price: number;
    images: string[];
}


export interface ProductRemoveButtonProps {
    id: string | undefined;
}