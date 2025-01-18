import { PostCard } from '@/blog/components/post-card';
import { glob } from 'glob';
import { Post } from '@/blog/types/post';
import { SortWrapper } from '@/blog/components/sort-wrapper';
import { microblogging } from '@/microblogging';

export default async function Home() {
  const files = glob.sync('src/content/*.mdx');

  const slugs = files
    .map((file) => file.replace('src/content/', ''))
    .map((file) => file.replace('.mdx', ''));

  const posts: Post[] = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}.mdx`);

      return {
        id: slug,
        ...metadata,
        tags: ['długie', ...(metadata.tags || [])],
        url: `/posts/${slug}`,
        type: 'long',
      };
    }),
  );

  return (
    <div>
      <div className={'prose dark:prose-invert'}>
        <h2>Witaj w moim małym zakątku internetu! 🌸✨</h2>
        <p>
          Cześć, jestem Maja — marzycielka, twórczyni i miłośniczka wszystkiego,
          co przytulne i kreatywne! 🧸💻 Tutaj dzielę się kawałkami mojej
          podróży — czy to odkrywaniem automatyzacji, zagłębianiem się w świat
          technologii i gotowania, czy gonieniem marzeń o stworzeniu czegoś
          magicznego.
        </p>
        <p>
          Ten blog to mieszanka inspiracji, projektów i małych chwil, które
          sprawiają, że życie jest wyjątkowe. Chwyć filiżankę herbaty, zrób
          sobie wygodnie i odkrywajmy razem! 🌷💕
        </p>
      </div>

      <div className={'pt-24'}>
        <h2 className={'font-bold text-2xl'}>Ostatnie wpisy</h2>

        <SortWrapper>
          {...[
            ...posts.map((post, idx) => (
              <PostCard key={idx} post={post} date={post.date} />
            )),
          ]}
          {...microblogging}
        </SortWrapper>
      </div>
    </div>
  );
}
