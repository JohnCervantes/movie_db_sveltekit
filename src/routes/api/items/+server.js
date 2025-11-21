import { json } from '@sveltejs/kit';

export async function GET() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];
  return json(items);
}