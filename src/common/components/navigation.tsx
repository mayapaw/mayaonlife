import Link from 'next/link';

export function Navigation() {
  return (
    <nav>
      <h1 className="pr-6 inline font-bold">
        <Link href="/">MayaOnLife</Link>
      </h1>
      <Link href="/" className="nav-link">
        Strona główna
      </Link>
    </nav>
  );
}
