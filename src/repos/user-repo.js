import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class UserRepo{
    /**
     * Find all users
     * */
    static async find(){
        const result = await pool.query('SELECT * from users;');

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all users be email
     * */
    static async findById(userId){
        const result = await pool.query(`
            SELECT * from users WHERE _id = $1;
        `, [userId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all users be email
     * */
    static async findByEmail(email){
        const result = await pool.query(`
            SELECT * from users WHERE email = $1;
        `, [email]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
     * Create a user
     * */
    static async insert(newUser){
        const result = await pool.query(`
            INSERT INTO users (_id, email, password, first_name, last_name)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `, [newUser._id, newUser.email, newUser.password, newUser.firstName, newUser.lastName]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    static async updateAddressCount(userId, newAddressCount){
        const result = await pool.query(`
            UPDATE users
            SET address_count = $1
            WHERE _id = $2
            RETURNING *;
        `, [newAddressCount, userId]);

        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }
}

export default UserRepo;