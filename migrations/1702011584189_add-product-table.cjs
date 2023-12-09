/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE products(
            _id uuid PRIMARY KEY,
            title VARCHAR(70) NOT NULL,
            author VARCHAR(50) NOT NULL,
            img_link VARCHAR(100) NOT NULL,
            price INTEGER DEFAULT 0,
            description VARCHAR(200) NOT NULL,
            id SERIAL NOT NULL,
            rating INTEGER NOT NULL 
            CHECK(rating >= 0 AND rating <= 5)
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE products;
    `)
};

