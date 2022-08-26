import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getQtdPosts(): Promise<number> {
  const posts = await fetchJson<PostData[]>(`${POSTS_URL}`);
  return posts.length;
}
