import { glob } from 'glob';
import { format, parseISO } from 'date-fns';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);

  return (
    <article className={'prose dark:prose-invert'}>
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={metadata.date}>
          {format(parseISO(metadata.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Post />
      {/* TODO add https://utteranc.es/ */}
    </article>
  );
}

export function generateStaticParams() {
  const files = glob.sync('src/content/*.mdx');

  return files
    .map((file) => file.replace('src/content/', ''))
    .map((file) => file.replace('.mdx', ''))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { metadata } = await import(`@/content/${slug}.mdx`);

  return {
    title: `${metadata.title} | MayaOnLife`,
    description: metadata.description,
  };
}

export const dynamicParams = false;
