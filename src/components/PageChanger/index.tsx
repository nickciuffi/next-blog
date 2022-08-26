import Link from 'next/link';
import { qtdPostsPerPage } from '../../config/app-config';
import { Container, PageBack, PageFront } from './styles';

type PageChangerProps = {
  curPage: number;
  qtdPosts: number;
};

export function PageChanger({ curPage, qtdPosts }: PageChangerProps) {
  const goesBack = curPage - 1 > 0;
  console.log(qtdPosts);
  const goesAhead = curPage * qtdPostsPerPage + 1 <= qtdPosts;
  return (
    <Container>
      {goesBack && (
        <PageBack>
          <Link href={`/post/pages/${curPage - 1}`}>
            <a>{`<<`}</a>
          </Link>
        </PageBack>
      )}
      {goesAhead && (
        <PageFront>
          <Link href={`/post/pages/${curPage + 1}`}>
            <a>{`>>`}</a>
          </Link>
        </PageFront>
      )}
    </Container>
  );
}