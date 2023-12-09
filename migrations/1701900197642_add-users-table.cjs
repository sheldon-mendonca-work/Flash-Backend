/* eslint-disable camelcase */

//DATABASE_URL=postgres://postgres:postgres@localhost:5432/flashBackend npm run migrate up
exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE users(
            _id uuid PRIMARY KEY,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50),
            address_count INTEGER DEFAULT 1,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE users;
    `)
};
