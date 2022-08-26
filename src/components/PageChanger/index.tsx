import Link from 'next/link';
import { qtdPostsPerPage } from '../../config/app-config';
import { Container, PageBack, PageFront } from './styles';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';

type PageChangerProps = {
  curPage: number;
  qtdPosts: number;
};

export function PageChanger({ curPage, qtdPosts }: PageChangerProps) {
  const goesBack = curPage - 1 > 0;
  const goesAhead = curPage * qtdPostsPerPage + 1 <= qtdPosts;
  return (
    <Container>
      {goesBack && (
        <PageBack>
          <Link href={`/post/pages/${curPage - 1}`}>
            <a>
              <TbPlayerTrackPrev size={48} />
            </a>
          </Link>
        </PageBack>
      )}
      {goesAhead && (
        <PageFront>
          <Link href={`/post/pages/${curPage + 1}`}>
            <a>
              <TbPlayerTrackNext size={48} />
            </a>
          </Link>
        </PageFront>
      )}
    </Container>
  );
}
