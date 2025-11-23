import { json } from '@sveltejs/kit';
import { db } from '$lib/server/createDb.js';
import { db_all, db_get } from '$lib/server/sql';


export const GET = async () => {
  try {
    const rows = await db_all(db, 'SELECT * FROM movie ORDER BY RANDOM() LIMIT 2');
    for (const row of rows) {
      const rating = await db_get(db, 'SELECT rate FROM rating where rating_id = ?', [row.rating_id]);
      const director = await db_get(db, 'SELECT first_name, last_name FROM director where director_id = ?', [row.director_id]);
      row.rate = rating.rate;
      row.director = `${director.first_name} ${director.last_name}`;
    }
    return json({ movies: rows });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  } 
};