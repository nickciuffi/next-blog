import { POSTS_URL, qtdPostsPerPage } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getPostByPage(page: string): Promise<PostData[]> {
  const posts = await fetchJson<PostData[]>(
    `${POSTS_URL}&pagination[page]=${page}&pagination[pageSize]=${qtdPostsPerPage}`,
  );
  return posts;
}
