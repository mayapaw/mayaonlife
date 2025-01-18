import React from 'react';

type BasePost = {
  id: string;
  title: string;
  description: string;
  date: string;
  url: string;
  tags: string[];
};

type ShortPost = {
  type: 'short';
  content: React.ReactNode;
} & BasePost;

type LongPost = {
  type: 'long';
} & BasePost;

export type Post = ShortPost | LongPost;
