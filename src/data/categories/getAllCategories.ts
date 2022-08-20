import { CATEGORIES_URL } from '../../config/app-config';
import { CategoryData } from '../../domain/categories/category';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllCategories(): Promise<CategoryData[]> {
  const categories = await fetchJson<CategoryData[]>(CATEGORIES_URL);
  return categories;
}
