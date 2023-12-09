/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE category(
            _id uuid PRIMARY KEY,
            category_title VARCHAR(30) UNIQUE NOT NULL,
            description VARCHAR(250) NOT NULL
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE category;
    `)
};

