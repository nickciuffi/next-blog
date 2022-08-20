import { CategoryOptioins } from '../CategoryOptions';

type ChooseCatType = {
  initialCat: string;
};

export function ChooseCategory({ initialCat }: ChooseCatType) {
  return (
    <div>
      <p>Posts in category: </p>
      <CategoryOptioins initialCat={initialCat} />
    </div>
  );
}
