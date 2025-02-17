import * as CategoryModel from "../models/categoryModel.js";

/**
 * Lấy danh sách danh mục sản phẩm
 */
export const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Lỗi khi lấy danh mục sản phẩm:", error);
        res.status(500).json({ message: "Lỗi server!" });
    }
};

/**
 * Lấy danh sách sản phẩm theo danh mục
 */
export const getProductsByCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // Kiểm tra xem id có hợp lệ không (phải là số nguyên dương)
        if (!id || isNaN(id) || parseInt(id) <= 0) {
            return res.status(400).json({ message: "ID danh mục không hợp lệ!" });
        }

        const products = await CategoryModel.getProductsByCategory(id);

        if (products.length === 0) {
            return res.status(404).json({ message: "Không có sản phẩm nào trong danh mục này." });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm theo danh mục:", error);
        res.status(500).json({ message: "Lỗi server!" });
    }
};
