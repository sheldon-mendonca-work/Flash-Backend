import pool from "../pool/pool.js";
import toCamelCaseCustom from "./utils/to-camel-case.js";

class CategoryRepo{
    /**
     * Find all categories
     * */
    static async find(){
        const result = await pool.query('SELECT * from category;');

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all categories by id
     * */
    static async findById(categoryId){
        const result = await pool.query(`
            SELECT * from category WHERE _id = '${categoryId}';
        `);
        const rows = result.rows;
        
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all categories for a product
     * */
    static async findByProductId(productId){
        const result = await pool.query(`
            SELECT * from productToCategory
            INNER JOIN category ON category._id = productToCategory.category_id
            WHERE product_id = $1;
        `,[productId]);

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }

    /**
     * Find all categories for a product
     * */
    static async findByProducts(){
        const result = await pool.query(`
            SELECT * from productToCategory
            INNER JOIN category ON category._id = productToCategory.category_id
            ;
        `);

        const rows = result.rows;
        return toCamelCaseCustom(rows);
    }
}

export default CategoryRepo;