import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class AddressRepo{

    static async find(){
        const result = await pool.query('SELECT * FROM address;');

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    static async findByUserId(userId){
        const result = await pool.query(`
            SELECT * FROM address WHERE user_id = $1;
        `, [userId]);

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    static async findByEmail(email){
        const result = await pool.query(`
            SELECT * FROM address WHERE email = $1;
        `, [email]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    static async insert(address, userId, addressCount){
        
        const result = await pool.query(`
            INSERT INTO address (user_id, address_index, address_name, address1, address2, address3, address_type, address_tel)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `, [userId, addressCount, address.addressName, address.address1, address.address2, address.address3, address.addressType, address.addressTel]);

        const rows = result.rows;

        return toCamelCaseCustom(rows);
    }

    static async deleteAddress(addressId){
        const result = await pool.query(`
            DELETE FROM address where _id = $1;
        `, [addressId]);

        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    static async update(address, addressId){
        
        const result = await pool.query(`
            UPDATE address SET  address_index = $1, address_name = $2, address1 = $3, address2 = $4, address3 = $5, address_type = $6, address_tel = $7, updated_at = $8
            WHERE _id = $9
            RETURNING *;
        `, [address.addressindex, address.addressname, address.address1, address.address2, address.address3, address.addresstype, address.addresstel, address.updatedat, addressId]);

        const rows = result.rows;

        return toCamelCaseCustom(rows);
    }
}

export default AddressRepo;