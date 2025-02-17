import * as ProductModel from "../models/productModel.js";




export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy sản phẩm" });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy sản phẩm" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, price, info, category_id,stock } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const newProductId = await ProductModel.createProduct({ name, price, info, image, category_id,stock });
        res.status(201).json({ message: "Thêm sản phẩm thành công", id: newProductId });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi thêm sản phẩm" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { name, price, info, category_id,stock } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
        await ProductModel.updateProduct(req.params.id, { name, price, info, image, category_id,stock });
        res.json({ message: "Cập nhật sản phẩm thành công" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi cập nhật sản phẩm" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await ProductModel.deleteProduct(req.params.id);
        res.json({ message: "Xóa sản phẩm thành công" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xóa sản phẩm" });
    }
};
