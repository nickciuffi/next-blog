import { PostData } from '../../domain/posts/post';
import { Post } from '../Post';
import { ContPosts } from './style';

type PostsProps = {
  posts: PostData[];
};

export function Posts({ posts }: PostsProps) {
  return (
    <ContPosts>
      {posts.length
        ? posts.map((post, id) => {
            return <Post post={post} key={id} />;
          })
        : 'No posts in this category'}
    </ContPosts>
  );
}
