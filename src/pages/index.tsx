import React from 'react';
import { HomePage } from '../containers/HomePage';
import { getAllPosts } from '../data/posts/getAllPosts';
import { PostData } from '../domain/posts/post';

type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export async function getStaticProps() {
  const data = await getAllPosts();
  return {
    props: {
      posts: data,
    },
  };
}
