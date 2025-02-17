import express from "express";
import { getCategories, getProductsByCategory } from "../controllers/categoryController.js";

const router = express.Router();

// Middleware kiểm tra ID hợp lệ
const validateCategoryId = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ message: "ID danh mục không hợp lệ!" });
    }
    next();
};

// Lấy danh sách danh mục
router.get("/", getCategories);

// Lấy sản phẩm theo danh mục (đổi URL để rõ ràng hơn)
router.get("/:id/products", validateCategoryId, getProductsByCategory);

export default router;
