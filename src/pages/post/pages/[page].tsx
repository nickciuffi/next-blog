import Error from 'next/error';
import { useRouter } from 'next/router';
import { PaginationPosts } from '../../../containers/PaginationPosts';
import { getQtdPosts } from '../../../data/posts/getQtdPosts';
import { getPostByPage } from '../../../data/posts/getPostsByPage';
import { PostData } from '../../../domain/posts/post';
import { qtdPostsPerPage } from '../../../config/app-config';

type HomeProps = {
  posts: PostData[];
  page: number;
  qtdPosts;
};
type ContextType = {
  params: {
    page: string;
  };
};

export default function PostPage({ posts, page, qtdPosts }: HomeProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Página ainda carregando</div>;
  }
  if (!posts) {
    return <Error statusCode={404} />;
  }
  return <PaginationPosts posts={posts} curPage={page} qtdPosts={qtdPosts} />;
}

export async function getStaticPaths() {
  const qtdPosts = await getQtdPosts();
  const numberOfPages = Math.ceil(qtdPosts / qtdPostsPerPage);
  const paths = [];
  for (let x = 1; x <= numberOfPages; x++) {
    paths.push({ params: { page: `${x}` } });
  }
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: ContextType) {
  const data = await getPostByPage(params.page);
  const qtdPosts = await getQtdPosts();
  return {
    props: {
      posts: data,
      page: Number(params.page),
      qtdPosts: qtdPosts,
    },
    revalidate: 200,
  };
}
