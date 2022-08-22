import Image from 'next/image';
import { useRouter } from 'next/router';
import { PostData } from '../../domain/posts/post';
import { ContPost } from './style';

type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  const router = useRouter();

  function handleClick() {
    router.push(`/post/${post.attributes.slug}`);
  }
  return (
    <ContPost onClick={() => handleClick()}>
      <h2>{post.attributes.title}</h2>
      <Image
        src={post.attributes.image.data[0].attributes.formats.small.url}
        alt={post.attributes.title}
        width={450}
        height={254}
      />
    </ContPost>
  );
}
