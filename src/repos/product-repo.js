import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class ProductRepo{
    /**
     * Find all products
     * */
    static async find(){
        const result = await pool.query(`
            SELECT * from products;
        `);

        const rows = result.rows;

        return toCamelCaseCustom(rows);
    }

    /**
     * Find all products be id
     * */
    static async findById(productId){
        const result = await pool.query(`
            SELECT * from products WHERE _id = $1;
        `, [productId]);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }
}

export default ProductRepo;