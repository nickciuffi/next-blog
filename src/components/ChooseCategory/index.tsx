import { CategoryOptions } from '../CategoryOptions';
import { Container } from './style';

type ChooseCatType = {
  cats: string[];
};

export function ChooseCategory({ cats }: ChooseCatType) {
  return (
    <Container>
      <p>Posts in category: </p>
      <CategoryOptions cats={cats} />
    </Container>
  );
}
