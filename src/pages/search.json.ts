import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const searchData = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.slug
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}