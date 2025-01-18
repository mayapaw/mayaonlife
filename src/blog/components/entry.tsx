import { PostCard } from '@/blog/components/post-card';
import React from 'react';

export const Entry = ({
  date,
  title,
  children,
  tags = [],
}: {
  date: string;
  title: string;
  children: React.ReactNode;
  tags?: string[];
}) => {
  return (
    <PostCard
      date={date}
      post={{
        date,
        title,
        tags: ['wpis', ...tags],
        content: children,
        type: 'short',
        url: '/',
        description: '',
        id: title,
      }}
    />
  );
};
