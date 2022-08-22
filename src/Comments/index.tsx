import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';
import { SITE_URL } from '../config/app-config';
import { Container } from './style';

type CommentsProps = {
  slug: string;
  title: string;
  id: number;
};

export function Comments({ id, slug, title }: CommentsProps) {
  const disqusShortname = 'blog-next-4';
  const disqusConfig = {
    url: `https://nickciuffi-nextjs-blog.netlify.app/post/${slug}`,
    identifier: `${id}`, // Single post id
    title: title, // Single post title
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}
