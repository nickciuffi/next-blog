import { CategoryOptions } from '../CategoryOptions';
import { Container } from './style';

type ChooseCatType = {
  initialCat: string;
};

export function ChooseCategory({ initialCat }: ChooseCatType) {
  return (
    <Container>
      <p>Posts in category: </p>
      <CategoryOptions initialCat={initialCat} />
    </Container>
  );
}
