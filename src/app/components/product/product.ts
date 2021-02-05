export interface Product {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    category: string;
    description: string;
    cat_id: number;
    imageUrl: string;
}

export interface ProductResponse {
    count: number;
    products: Product[];
}
