import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../config/app-config';
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
          url: `https://nickciuffi-nextjs-blog.netlify.app/post/tratores`,
          identifier: 'tratores',
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
