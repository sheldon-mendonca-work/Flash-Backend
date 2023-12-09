/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE productToCategory(
            _id SERIAL PRIMARY KEY,
            product_id uuid REFERENCES products(_id) ON DELETE CASCADE,
            category_id uuid REFERENCES category(_id)
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE productToCategory;
    `)
};

