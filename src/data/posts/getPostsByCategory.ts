import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { getAllPosts } from './getAllPosts';

export async function getPostsByCategory(
  category: string,
): Promise<PostData[]> {
  const postsFinal = await fetchJson<PostData[]>(
    `${POSTS_URL}&filters[category][name]=${category}`,
  );

  return postsFinal;
}
