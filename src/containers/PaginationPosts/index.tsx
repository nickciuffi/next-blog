import Head from 'next/head';
import { Header } from '../../components/Header';
import { PageChanger } from '../../components/PageChanger';
import { Posts } from '../../components/Posts';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

type HomePageProps = {
  posts: PostData[];
  curPage: number;
  qtdPosts: number;
};

export function PaginationPosts({ posts, curPage, qtdPosts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{`Home - ${SITE_NAME} - Page ${curPage}`}</title>
        <meta
          name="description"
          content={`Este é o meu incrível blog sobre notícias de diversos temas na página ${curPage}`}
        />
      </Head>
      <Container>
        <Header />
        <Posts posts={posts} />
        <PageChanger curPage={curPage} qtdPosts={qtdPosts} />
      </Container>
    </>
  );
}
