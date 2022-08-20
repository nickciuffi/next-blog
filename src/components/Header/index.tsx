import Link from 'next/link';
import { ContHeader } from './style';

export function Header() {
  return (
    <ContHeader>
      <Link href="/">
        <a>Blog com NextJs</a>
      </Link>
    </ContHeader>
  );
}
