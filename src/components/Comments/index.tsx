import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './style';

type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-next-4"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt-BR', //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </Container>
  );
}
