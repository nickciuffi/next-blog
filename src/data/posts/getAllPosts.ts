import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllPosts(): Promise<PostData[]> {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
}
