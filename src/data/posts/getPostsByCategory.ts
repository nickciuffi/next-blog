import { CATEGORIES_URL } from '../../config/app-config';
import { CategoryData } from '../../domain/categories/category';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { getAllPosts } from './getAllPosts';

export async function getPostsByCategory(
  category: string,
): Promise<PostData[]> {
  const categoryData = await fetchJson<CategoryData[]>(
    `${CATEGORIES_URL}&&filters[name]=${category}`,
  );
  const posts = categoryData[0].attributes.posts.data;
  const postsIds = posts.map((post) => post.id);
  const postsFinal = await getPostsByIds(postsIds);

  return postsFinal;
}

async function getPostsByIds(ids: number[]): Promise<PostData[]> {
  const allPosts = await getAllPosts();
  const selectedPosts = allPosts.filter((post) => ids.includes(post.id));
  return selectedPosts;
}
