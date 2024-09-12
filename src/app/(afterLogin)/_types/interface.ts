export interface User {
  id: string;
  nickname: string;
  image: string;
}

export interface Images {
  imageId: number;
  link: string;
  description: string;
}

export interface PostType {
  postId: number;
  user: User;
  content: string;
  createAt: Date;
  images?: Images[];
}
