export interface IProduct {
  name: string;
  productId: number;
  pathname: string;
  media: {
    alt: string;
    url: string;
  }[]
}
