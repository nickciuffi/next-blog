import { ChangeEvent, useEffect, useState } from 'react';
import { getAllCategories } from '../../data/categories/getAllCategories';
import { useRouter } from 'next/router';
import { Categories } from './style';

export function CategoryOptions({ cats }: { cats: string[] }) {
  useEffect(() => {
    const select = document.querySelector('select') as HTMLSelectElement;
    const options = Array.from(select.options) as HTMLOptionElement[];
    select.value = options[0].value;
  }, [cats]);
  const router = useRouter();

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
