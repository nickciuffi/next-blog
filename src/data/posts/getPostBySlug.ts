import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getPostBySlug(slug: string): Promise<PostData[]> {
  const posts = await fetchJson<PostData[]>(
    `${POSTS_URL}&&filters[slug]=${slug}`,
  );
  return posts;
}
