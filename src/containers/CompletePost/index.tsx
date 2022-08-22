import Head from 'next/head';
import { Comments } from '../../Comments';
import { PostDetails } from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { PostData, ImageFormats } from '../../domain/posts/post';
import { Container, Title } from './styles';

type CompletePostProps = {
  post: PostData;
};

export function CompletePost({ post }: CompletePostProps) {
  function getImage(): ImageFormats {
    return (
      post.attributes.image.data[0].attributes.formats.large ||
      post.attributes.image.data[0].attributes.formats.medium ||
      post.attributes.image.data[0].attributes.formats.small ||
      post.attributes.image.data[0].attributes.formats.thumbnail
    );
  }

  return (
    <>
      <Head>
        <title>{`${post.attributes.title} - ${SITE_NAME}`}</title>
        <meta
          name="description"
          content={post.attributes.content.slice(0, 150)}
        />
      </Head>
      <Container>
        <Title>{post.attributes.title}</Title>
        <img src={getImage().url} alt={post.attributes.title} />
        <p>{post.attributes.content}</p>
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          date={post.attributes.publishedAt.substring(0, 10)}
          category={post.attributes.category.data.attributes.name}
        />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </Container>
    </>
  );
}
