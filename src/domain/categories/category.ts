import { PostData } from '../posts/post';

export type CategoryData = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    posts: {
      data: PostData[];
    };
  };
};
