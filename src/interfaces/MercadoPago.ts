export interface ProductInput {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number 
    }
}

export interface MercadoPagoPreferenceInput extends ProductInput{
    quantity: number
}