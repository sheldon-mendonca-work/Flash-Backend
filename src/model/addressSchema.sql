CREATE TYPE address_type AS ENUM('Home', 'Office', 'Other');
CREATE TABLE address(
    _id SERIAL PRIMARY KEY,
    userId uuid REFERENCES users(_id) ON DELETE CASCADE,
    addressIndex INTEGER DEFAULT 1,
    addressName VARCHAR(70) NOT NULL,
    address1 VARCHAR(70) NOT NULL,
    address2 VARCHAR(70) NOT NULL,
    address3 VARCHAR(70),
    addressType address_type,
    addressTel VARCHAR(70),
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);