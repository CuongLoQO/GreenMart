import db from "../config/db.js";

// Lấy tất cả sản phẩm
export const getAllProducts = async () => {
    const [rows] = await db.query(`
        SELECT products.*, categories.name AS category 
        FROM products 
        LEFT JOIN categories ON products.category_id = categories.id
    `);
    return rows;
};

// Lấy sản phẩm theo ID
export const getProductById = async (id) => {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    return rows[0];
};

// Tạo sản phẩm mới
export const createProduct = async (product) => {
    const { name, price, info, image, category_id, stock } = product;
    const [result] = await db.query(
        "INSERT INTO products (name, price, info, image, category_id, stock) VALUES (?, ?, ?, ?, ?, ?)",
        [name, price, info, image, category_id, stock]
    );
    return result.insertId;
};

// Cập nhật sản phẩm theo ID
export const updateProduct = async (id, product) => {
    const { name, price, info, image, category_id, stock } = product;
    await db.query(
        "UPDATE products SET name=?, price=?, info=?, image=?, category_id=?, stock=? WHERE id=?",
        [name, price, info, image, category_id, stock, id]
    );
};

// Xóa sản phẩm theo ID
export const deleteProduct = async (id) => {
    await db.query("DELETE FROM products WHERE id=?", [id]);
};
