import db from "../config/db.js";

/**
 * Lấy tất cả danh mục sản phẩm
 */
export const getAllCategories = async () => {
    const [rows] = await db.query("SELECT * FROM categories");
    return rows;
};

export const getProductsByCategory = async (id) => {
    const [rows] = await db.query(
        `SELECT products.*, categories.name AS category 
         FROM products 
         LEFT JOIN categories ON products.category_id = categories.id
         WHERE products.category_id = ?`,
        [id]
    );
    return rows;
};
