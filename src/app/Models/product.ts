export interface SaveProduct {
    name?: string,
    price?: number,
    productionDate?: Date,
    productGroupId?: number
}

export interface Product {
    id?: number,
    name?: string,
    price?: number,
    productionDate?: Date,
    productGroupId?: number,
    productGroup: ProductGroup
}

export interface ProductGroup {
    id?: number,
    name?: string
}