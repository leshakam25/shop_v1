export interface ProductTag {
    tag: string;
}

export interface ProductInterface {
    _id: string,
    label: string,
    description: string,
    shortDesc: string,
    tags: ProductTag[],
    currentPrice:number,
    oldPrice:number,
    image: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

