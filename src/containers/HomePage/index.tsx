import Head from 'next/head';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{`Home - ${SITE_NAME}`}</title>
        <meta
          name="description"
          content="Este é o meu incrível blog sobre notícias de diversos temas"
        />
      </Head>
      <Container>
        <Header />
        <Posts posts={posts} />
      </Container>
    </>
  );
}
