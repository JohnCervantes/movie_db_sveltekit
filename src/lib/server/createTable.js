import { execute } from "./sql.js";
import {db} from './createDb.js';

const main = async () => {
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
        img_url VARCHAR(255),
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



// insert into director (first_name, last_name) values ('Martin', 'Scorsese');
//       insert into director (first_name, last_name) values ('James', 'Cameron');
//       insert into director (first_name, last_name) values ('Steven', 'Spielberg');
//       insert into director (first_name, last_name) values ('Christopher', 'Nolan');
//       insert into director (first_name, last_name) values ('Quentin', 'Tarantino');
//       insert into director (first_name, last_name) values ('Ridley', 'Scott');
//       insert into director (first_name, last_name) values ('Peter', 'Jackson');
//       insert into director (first_name, last_name) values ('Clint', 'Eastwood');
//       insert into director (first_name, last_name) values ('David', 'Fincher');
//       insert into director (first_name, last_name) values ('Tim', 'Burton');
//       insert into director (first_name, last_name) values ('Ron', 'Howard');
//       insert into director (first_name, last_name) values ('Guy', 'Ritchie');
//       insert into director (first_name, last_name) values ('Michael', 'Bay');
//       insert into director (first_name, last_name) values ('J.J.', 'Abrams');
//       insert into director (first_name, last_name) values ('Wes', 'Anderson');
//       insert into director (first_name, last_name) values ('David', 'Lynch');
//       insert into director (first_name, last_name) values ('Sofia', 'Coppola');
//       insert into director (first_name, last_name) values ('Spike', 'Lee');
//       insert into director (first_name, last_name) values ('Joel', 'Coen');
//       insert into director (first_name, last_name) values ('Ethan', 'Coen');

//       insert into actor (first_name, last_name) values ('Leonardo', 'DiCaprio');
//       insert into actor (first_name, last_name) values ('Brad', 'Pitt');
//       insert into actor (first_name, last_name) values ('Meryl', 'Streep');
//       insert into actor (first_name, last_name) values ('Tom', 'Hanks');
//       insert into actor (first_name, last_name) values ('Scarlett', 'Johansson');
//       insert into actor (first_name, last_name) values ('Robert', 'De Niro');
//       insert into actor (first_name, last_name) values ('Natalie', 'Portman');
//       insert into actor (first_name, last_name) values ('Morgan', 'Freeman');
//       insert into actor (first_name, last_name) values ('Jennifer', 'Lawrence');
//       insert into actor (first_name, last_name) values ('Christian', 'Bale');
//       insert into actor (first_name, last_name) values ('Angelina', 'Jolie');
//       insert into actor (first_name, last_name) values ('Samuel', 'Jackson');
//       insert into actor (first_name, last_name) values ('Emma', 'Stone');
//       insert into actor (first_name, last_name) values ('Johnny', 'Depp');
//       insert into actor (first_name, last_name) values ('Anne', 'Hathaway');
//       insert into actor (first_name, last_name) values ('Denzel', 'Washington');
//       insert into actor (first_name, last_name) values ('Kate', 'Winslet');
//       insert into actor (first_name, last_name) values ('Chris', 'Evans');
//       insert into actor (first_name, last_name) values ('Hugh', 'Jackman');
//       insert into actor (first_name, last_name) values ('Gal', 'Gadot');


// insert into user (username, email, first_name, last_name, password_hash) values ('john_doe', 'johndoe@yahoo.com', 'John', 'Doe', 'hashed_password_1');
//       insert into user (username, email, first_name, last_name, password_hash) values ('jane_smith', 'janesmith@gmail.com', 'Jane', 'Smith', 'hashed_password_2');
//       insert into user (username, email, first_name, last_name, password_hash) values ('alice_wonder', 'alicewonder@hotmail.com', 'Alice', 'Wonder', 'hashed_password_3');
//       insert into user (username, email, first_name, last_name, password_hash) values ('bob_builder', 'bobbuilder@gmail.com', 'Bob', 'Builder', 'hashed_password_4');
//       insert into user (username, email, first_name, last_name, password_hash) values ('charlie_brown', 'charliebrown@gmail.com', 'Charlie', 'Brown', 'hashed_password_5');
//       insert into user (username, email, first_name, last_name, password_hash) values ('diana_prince', 'dianaprince@gmail.com', 'Diana', 'Prince', 'hashed_password_6');
//       insert into user (username, email, first_name, last_name, password_hash) values ('edward_scissor', 'edwardscissor@gmail.com', 'Edward', 'Scissorhands', 'hashed_password_7');
//       insert into user (username, email, first_name, last_name, password_hash) values ('fiona_shrek', 'fionashrek@gmail.com', 'Fiona', 'Shrek', 'hashed_password_8');
//       insert into user (username, email, first_name, last_name, password_hash) values ('george_clooney', 'georgeclooney@gmail.com', 'George', 'Clooney', 'hashed_password_9');
//       insert into user (username, email, first_name, last_name, password_hash) values ('harry_potter', 'harrypotter@gmail.com', 'Harry', 'Potter', 'hashed_password_10');


//  insert into rating (comment, rate, user_id) values ('Great movie!', 5, 1);
//       insert into rating (comment, rate, user_id) values ('Enjoyed it a lot.', 4, 2);
//       insert into rating (comment, rate, user_id) values ('It was okay.', 3, 3);
//       insert into rating (comment, rate, user_id) values ('Not my type.', 2, 4);
//       insert into rating (comment, rate, user_id) values ('Could be better.', 3, 5);
//       insert into rating (comment, rate, user_id) values ('Loved the storyline.', 5, 6);
//       insert into rating (comment, rate, user_id) values ('Amazing visuals.', 4, 7);
//       insert into rating (comment, rate, user_id) values ('Too long.', 2, 8);
//       insert into rating (comment, rate, user_id) values ('Fantastic performances.', 5, 9);
//       insert into rating (comment, rate, user_id) values ('Would watch again.', 4, 10);


// insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology.', '2010-07-16', 'Sci-Fi', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/products/20664117398ad7301d9a9af6d2e5aa5c_1e3ea98b-b962-4982-9f74-2e44381fc6ff.jpg?v=1762964663&width=1680', 1, 4);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('The Dark Knight', 'When the menace known as the Joker emerges from his mysterious past.', '2008-07-18', 'Action', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/products/darkknight.building.mp.jpg?v=1762970009&width=1200', 2, 4);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist.', '1997-12-19', 'Romance', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/files/Titanic.mpw.102378.jpg?v=1762496123&width=1200', 3, 2);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Avatar', 'A paraplegic Marine dispatched to the moon Pandora on a unique mission.', '2009-12-18', 'Sci-Fi', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/files/avatar.adv.24x36.jpg?v=1762971802&width=1200', 4, 2);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control.', '1972-03-24', 'Crime', 'USA', 'English',  'https://www.movieposters.com/cdn/shop/products/b5282f72126e4919911509e034a61f66_6ce2486d-e0da-4b7a-9148-722cdde610b8.jpg?v=1762507445&width=1200', 5, 7);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife.', '1994-10-14', 'Crime', 'USA', 'English',  'https://www.movieposters.com/cdn/shop/files/PulpFiction.Ver1.jpg?v=1762475243&width=1200', 6, 5);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Schindlers List', 'In German-occupied Poland during World War II.', '1993-12-15', 'Biography', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/products/9a1f9ea4a27071481cc1263e3ea11f7b_7bdb2deb-dd50-41b5-beab-8fc1cb3c895d.jpg?v=1762475697&width=1200', 7, 3);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Forrest Gump', 'The presidencies of Kennedy and Johnson, the Vietnam War.', '1994-07-06', 'Drama', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/products/forrest-gump---24x36.jpg?v=1762969782&width=1200', 8, 5);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature.', '1999-03-31', 'Sci-Fi', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab.jpg?v=1762505090&width=1200', 9, 5);
//       insert into movie (title, synopsis, release_date, genre, country_of_origin, language, img_url, rating_id, director_id) values ('Gladiator', 'A former Roman General sets out to exact vengeance.', '2000-05-05', 'Action', 'USA', 'English', 'https://www.movieposters.com/cdn/shop/files/Gladiator.mpw.102813.jpg?v=1762521114&width=1200', 10, 6); 