import sqlite3 from 'sqlite3';
import path from 'path';

export const db = new sqlite3.Database(path.resolve('src', 'lib', 'server', 'movie.db'), (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});