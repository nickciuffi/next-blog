import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PostsByCategory } from '../../containers/PostsByCategory';
import { getAllCategories } from '../../data/categories/getAllCategories';
import { getPostsByCategory } from '../../data/posts/getPostsByCategory';
import { PostData } from '../../domain/posts/post';

type PostsByCategoryProps = {
  posts: PostData[];
  category: string;
  cats: string[];
};
type ContextType = {
  params: {
    category: string;
  };
};

export default function FlexiblePostsByCategories({
  posts,
  category,
  cats,
}: PostsByCategoryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página ainda carregando</div>;
  }
  return <PostsByCategory cats={cats} category={category} posts={posts} />;
}

async function getCats(initialCat: string) {
  const allCats = await getAllCategories();
  const selectedCats = allCats.filter(
    (cat) => cat.attributes.name !== initialCat,
  );
  const catNames = selectedCats.map((cat) => cat.attributes.name);
  catNames.unshift(initialCat);
  return catNames;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategories = await getAllCategories();
  const paths = allCategories.map((cat) => ({
    params: { category: cat.attributes.name },
  }));
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: ContextType) => {
  const postsByCat = await getPostsByCategory(params.category);
  const cats = await getCats(params.category);
  return {
    props: {
      posts: postsByCat,
      category: params.category,
      cats: cats,
    },
    revalidate: 200,
  };
};
