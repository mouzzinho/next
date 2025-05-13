export interface IPost {
  title: string;
  postId: number;
  pathname: string;
  media: {
    alt: string;
    url: string;
  }[]
}
