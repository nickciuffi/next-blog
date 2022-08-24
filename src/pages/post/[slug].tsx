import Error from 'next/error';
import { useRouter } from 'next/router';
import { Header } from '../../components/Header';
import { CompletePost } from '../../containers/CompletePost';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { getPostBySlug } from '../../data/posts/getPostBySlug';
import { PostData } from '../../domain/posts/post';

type HomeProps = {
  post: PostData;
};
type ContextType = {
  params: {
    slug: string;
  };
};

export default function PostPage({ post }: HomeProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Página ainda carregando</div>;
  }
  if (!post) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Header />
      <CompletePost post={post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.attributes.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: ContextType) {
  const data = await getPostBySlug(params.slug);
  return {
    props: {
      post: data[0],
    },
    revalidate: 10,
  };
}
