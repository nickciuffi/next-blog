import Link from 'next/link';
import { GoTo } from './styles';

export function GoToPages() {
  return (
    <GoTo>
      Ver todas as
      <Link href={`/post/pages/1`}>
        <a>Notícias</a>
      </Link>
    </GoTo>
  );
}
