import { Entry } from '@/blog/components/entry';

export const microblogging = [
  <Entry
    title={'Projekcik opublikowany!'}
    date={'18/01/2025 22:47'}
    key={'1737236833844'}
  >
    Dzisiaj opublikowałam swój pomysł z poprzedniego wpisu na GitHubie! 🚀
    <br />
    <br />
    Możecie go zobaczyć pod tym linkiem:{' '}
    <a
      href={'https://github.com/mayapaw/kawaiify'}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      https://github.com/mayapaw/kawaiify
    </a>
  </Entry>,

  <Entry
    title={'Kawaiify Commits'}
    date={'18/01/2025 13:33'}
    key={'1737203616514'}
  >
    Wpadłam na pomysł, aby zrobić proste i szybkie narzędzie do analizy zmian w
    commitcie i generowaniu mu nazwy.
    <br />
    <br />
    Plan jest zrobic prostą apkę która będzie można odpalić jako{' '}
    <pre className={'inline'}>
      <code>npx kawaiify@latest</code>
    </pre>{' '}
    i zacommituje mi moje zmiany.
  </Entry>,

  <Entry title={'Hejka!'} date={'18/01/2025 13:15'} key={'1737202527451'}>
    Witajcie na moim blogu, gdzie będę dzielić się swoją drogą w tym życiu! 🌸✨
    <br />
    <br />
    Znajdziecie tu trochę technologii, trochę gotowania, trochę życia i trochę
    marzeń. 🧸💻
  </Entry>,
];
