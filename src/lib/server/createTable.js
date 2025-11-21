import sqlite3 from "sqlite3";
import { execute } from "./sql.js";

const main = async () => {
  const db = new sqlite3.Database("movie.db");
  try {
    await execute(
      db,
      `CREATE TABLE IF NOT EXISTS user (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT 1,
        password_hash VARCHAR(255) NOT NULL
      );
      
      
      
      CREATE TABLE IF NOT EXISTS rating (
        rating_id INTEGER PRIMARY KEY AUTOINCREMENT,
        comment TEXT,
        rate INTEGER CHECK(rate >= 1 AND rate <= 5),
        user_id INTEGER,
        foreign key (user_id) references user(user_id)
        );

        CREATE TABLE IF NOT EXISTS director (
        director_id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL
      );

      create TABLE IF NOT EXISTS actor (
        actor_id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS movie (
        movie_id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        synopsis TEXT,
        release_date DATE,
        genre VARCHAR(50),
        country_of_origin VARCHAR(50),
        language VARCHAR(50),
        director VARCHAR(100),
        rating_id INTEGER,
        director_id INTEGER,
        foreign key (rating_id) references rating(rating_id),
        foreign key (director_id) references director(director_id)
      );

        CREATE TABLE IF NOT EXISTS movie_actor (
        movie_id INTEGER,
        actor_id INTEGER,
        PRIMARY KEY (movie_id, actor_id),
        foreign key (movie_id) references movie(movie_id),
        foreign key (actor_id) references actor(actor_id)
      );
    `
    );
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

main();