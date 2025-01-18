import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import rehypePrismPlus from 'rehype-prism-plus';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypePrismPlus,
    ],
  },
})

export default withMDX(nextConfig);
