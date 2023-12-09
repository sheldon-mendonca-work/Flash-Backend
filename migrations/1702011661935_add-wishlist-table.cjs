/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE wishlist(
            _id SERIAL PRIMARY KEY,
            user_id uuid REFERENCES users(_id) ON DELETE CASCADE,
            product_id uuid REFERENCES products(_id) ON DELETE CASCADE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(userId, productId)
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE wishlist;
    `)
};

