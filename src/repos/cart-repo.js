import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class CartRepo{
    /**
     * Find all cart items
     * */
    static async find(){
        const result = await pool.query(`SELECT * from cart;`);

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all cart be userId
     * */
    static async findByUserId(userId){
        const result = await pool.query(`
            SELECT *, cart._id from cart
            INNER JOIN products
            ON cart.product_id = products._id 
            WHERE cart.user_id = $1;
        `, [userId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all cart be userId and productId
     * */
    static async findByUserProduct(userId, productId){
        const result = await pool.query(`
            SELECT * from cart WHERE user_id = $1 AND product_id = $2;
        `, [userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
         * Add new item to cart
         * */
    static async insertNewCartItem(userId, productId){
        
        const result = await pool.query(`
            INSERT INTO cart(user_id, product_id, quantity)
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [userId, productId, 1]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
         * Update Cart Item Quantity
         * */
    static async updateCartItemQuantity(userId, productId, newQuantity, updatedAt){

        const result = await pool.query(`
            UPDATE cart SET  quantity = $1::INTEGER, updated_at = $2
            WHERE user_id = $3 AND product_id = $4
            RETURNING *;
        `, [newQuantity, updatedAt, userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
         * Delete Cart Item
         * */
    static async deleteCartItem(userId, productId){
        const result = await pool.query(`
            DELETE from cart WHERE user_id = $1 AND product_id = $2;
        `, [userId, productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }
    
}

export default CartRepo;