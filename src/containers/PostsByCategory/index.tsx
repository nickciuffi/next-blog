import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';

import { PostData } from '../../domain/posts/post';
import { ChooseCategory } from '../../components/ChooseCategory';
import { Container } from './styles';

type PostsByCategoryProps = {
  posts: PostData[];
  category: string;
};

export function PostsByCategory({ posts, category }: PostsByCategoryProps) {
  return (
    <Container>
      <Header />
      <ChooseCategory initialCat={category} />
      <Posts posts={posts} />
    </Container>
  );
}
