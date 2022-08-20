import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      <Header />
      <Posts posts={posts} />
    </Container>
  );
}
