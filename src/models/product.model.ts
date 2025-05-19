export interface IProduct {
    name: string
    productId: number
    pathname: string
    description: string
    media: {
        alt: string
        url: string
    }[]
}
