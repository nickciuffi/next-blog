import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';

import { PostData } from '../../domain/posts/post';
import { ChooseCategory } from '../../components/ChooseCategory';
import { Container } from './styles';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';

type PostsByCategoryProps = {
  posts: PostData[];
  category: string;
};

export function PostsByCategory({ posts, category }: PostsByCategoryProps) {
  return (
    <>
      <Head>
        <title>{`${category} - ${SITE_NAME}`}</title>
        <meta
          name="description"
          content={`Nesta página você pode acessar todos os posts da categoria ${category}`}
        />
      </Head>
      <Container>
        <Header />
        <ChooseCategory initialCat={category} />
        <Posts posts={posts} />
      </Container>
    </>
  );
}
