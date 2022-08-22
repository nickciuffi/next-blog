import { ChangeEvent, useEffect, useState } from 'react';
import { getAllCategories } from '../../data/categories/getAllCategories';
import { useRouter } from 'next/router';
import { Categories } from './style';

export function CategoryOptions({ initialCat }: { initialCat: string }) {
  const [cats, setCats] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    try {
      const allCats = await getAllCategories();
      const selectedCats = allCats.filter(
        (cat) => cat.attributes.name !== initialCat,
      );
      const catNames = selectedCats.map((cat) => cat.attributes.name);
      catNames.unshift(initialCat);
      setCats(catNames);
    } catch (e) {
      console.log(e);
    }
  }
  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const category = e.target.value;
    router.push(`/category/${category}`);
  }

  return (
    <Categories onChange={(e) => handleSelectChange(e)}>
      {cats.map((cat, id) => (
        <option key={id} value={cat}>
          {cat}
        </option>
      ))}
    </Categories>
  );
}
