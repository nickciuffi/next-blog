import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PostsByCategory } from '../../containers/PostsByCategory';
import { getAllCategories } from '../../data/categories/getAllCategories';
import { getPostsByCategory } from '../../data/posts/getPostsByCategory';
import { PostData } from '../../domain/posts/post';

type PostsByCategoryProps = {
  posts: PostData[];
  category: string;
};
type ContextType = {
  params: {
    category: string;
  };
};

export default function FlexiblePostsByCategories({
  posts,
  category,
}: PostsByCategoryProps) {
  return <PostsByCategory category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategories = await getAllCategories();
  const paths = allCategories.map((cat) => ({
    params: { category: cat.attributes.name },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: ContextType) => {
  const postsByCat = await getPostsByCategory(params.category);
  return {
    props: {
      posts: postsByCat,
      category: params.category,
    },
  };
};
