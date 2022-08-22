import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';
import { SITE_URL } from '../config/app-config';
import { Container } from './style';

type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  const disqusShortname = 'blog-next-4';
  const disqusConfig = {
    url: `${SITE_URL}`,
    identifier: slug, // Single post id
    title: title, // Single post title
  };

  return (
    <Container>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Container>
  );
}
