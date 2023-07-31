export interface ProductInterface{
    _id: string,
    label: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}
export interface ProductsInterface{
    ProductInterface: ProductInterface[]
}
