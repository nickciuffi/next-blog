import { useEffect, useState } from 'react';
import { getAllCategories } from '../../data/categories/getAllCategories';

export function CategoryOptioins({ initialCat }: { initialCat: string }) {
  const [cats, setCats] = useState<string[]>([]);
  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    const allCats = await getAllCategories();
    const selectedCats = allCats.filter(
      (cat) => cat.attributes.name !== initialCat,
    );
    const catNames = selectedCats.map((cat) => cat.attributes.name);
    catNames.unshift(initialCat);
    setCats(catNames);
  }
  return (
    <select>
      {cats.map((cat, id) => (
        <option key={id} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
