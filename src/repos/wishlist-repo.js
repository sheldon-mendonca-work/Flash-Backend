import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class WishlistRepo{
    /**
     * Find all wishlist items
     * */
    static async find(){
        const result = await pool.query(`SELECT * from wishlist;`);

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all wishlist by userId
     * */
    static async findByUserId(userId){
        const result = await pool.query(`
            SELECT *, wishlist._id from wishlist
            LEFT JOIN products
            ON wishlist.product_id = products._id 
            WHERE wishlist.user_id = $1;
        `, [userId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all wishlist be userId and productId
     * */
    static async findByUserProduct(userId, productId){
        const result = await pool.query(`
            SELECT * from wishlist WHERE user_id = $1 AND product_id = $2;
        `, [userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
         * Add new item to wishlist
         * */
    static async insertNewWishlistItem(userId, productId){
        
        const result = await pool.query(`
            INSERT INTO wishlist(user_id, product_id)
            VALUES ($1, $2)
            RETURNING *;
        `, [userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
         * Delete wishlist Item
         * */
    static async deleteWishlistItem(userId, productId){
        const result = await pool.query(`
            DELETE from wishlist WHERE user_id = $1 AND product_id = $2;
        `, [userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }
    
}

export default WishlistRepo;