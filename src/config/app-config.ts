export const API_URL = 'https://blog-strapi-latest.herokuapp.com';
export const POSTS_URL = `${API_URL}/api/posts?populate=*`;
export const CATEGORIES_URL = `${API_URL}/api/categories?populate=*`;
export const SITE_URL = process.env.SITE_URL || 'http://127.0.0.1:3000';
