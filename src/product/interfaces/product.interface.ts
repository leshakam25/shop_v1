export interface IProduct {
    _id: string;
    title: string;
    desc: string;
    price: number;
    images: string[];
}


export interface IProductRemoveButtonProps {
    id: string | undefined;
}