/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TYPE address_type AS ENUM('Home', 'Office', 'Other');
        CREATE TABLE address(
            _id SERIAL PRIMARY KEY,
            user_id uuid REFERENCES users(_id) ON DELETE CASCADE,
            address_index SERIAL,
            address_name VARCHAR(70) NOT NULL,
            address1 VARCHAR(70) NOT NULL,
            address2 VARCHAR(70) NOT NULL,
            address3 VARCHAR(70),
            address_type address_type,
            address_tel VARCHAR(70),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE address;
        DROP TYPE address_type;
    `)
};

