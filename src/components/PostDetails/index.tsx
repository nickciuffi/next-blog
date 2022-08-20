import Link from 'next/link';
import { formatDate } from '../../utils/formatDate';
import { Details } from './styles';

type DetailsProps = {
  author: string;
  date: string;
  category: string;
};

export function PostDetails({ author, date, category }: DetailsProps) {
  return (
    <Details>
      <p>{`Escrito por ${author} em ${formatDate(date)} na categoria `}</p>
      <Link href={`/category/${category}`}>
        <a>{category}</a>
      </Link>
    </Details>
  );
}
