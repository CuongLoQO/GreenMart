import { useState, useEffect } from "react";
import axios from "axios";
import "./productpage.scss";

const API_URL = "http://localhost:5000/api/products";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", price: "", info: "", image: null, category_id: "1", stock: 0 });
    const [editId, setEditId] = useState(null);

    // 🟢 Lấy danh sách sản phẩm từ API
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Lỗi khi tải sản phẩm:", error);
        }
    };

    // 🟡 Xử lý nhập liệu
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // 🟡 Xử lý upload ảnh
    const handleImageChange = (e) => {
        setNewProduct({ ...newProduct, image: e.target.files[0] });
    };

    // 🟠 Gửi dữ liệu lên backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", newProduct.name);
        formData.append("price", newProduct.price);
        formData.append("info", newProduct.info);
        formData.append("category_id", newProduct.category_id);
        formData.append("stock", newProduct.stock);
        if (newProduct.image) {
            formData.append("image", newProduct.image);
        }

        try {
            if (editId) {
                await axios.put(`${API_URL}/${editId}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
            } else {
                await axios.post(API_URL, formData, { headers: { "Content-Type": "multipart/form-data" } });
            }
            fetchProducts();
            setNewProduct({ name: "", price: "", info: "", image: null, category_id: "1", stock: 0 });
            setEditId(null);
        } catch (error) {
            console.error("Lỗi khi thêm/cập nhật sản phẩm:", error);
        }
    };

    // 🟠 Xử lý chỉnh sửa sản phẩm
    const handleEdit = (product) => {
        setNewProduct({
            name: product.name,
            price: product.price,
            info: product.info,
            category_id: product.category_id,
            stock: product.stock,
            image: null
        });
        setEditId(product.id);
    };

    // 🔴 Xóa sản phẩm
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
        }
    };

    return (
        <div className="product-container">
            <h2>Quản lý sản phẩm</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <input type="text" name="name" placeholder="Tên sản phẩm" value={newProduct.name} onChange={handleInputChange} required />
                <input type="number" name="price" placeholder="Giá" value={newProduct.price} onChange={handleInputChange} required />
                <textarea name="info" placeholder="Thông tin sản phẩm" value={newProduct.info} onChange={handleInputChange}></textarea>
                <select name="category_id" value={newProduct.category_id} onChange={handleInputChange}>
                    <option value="1">Thịt</option>
                    <option value="2">Hoa quả</option>
                    <option value="3">Nước trái cây</option>
                    <option value="4">Rau củ</option>
                    <option value="5">Hải sản</option>
                </select>
                <input type="number" name="stock" placeholder="Số lượng tồn kho" value={newProduct.stock} onChange={handleInputChange} required />
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">{editId ? "Cập nhật" : "Thêm sản phẩm"}</button>
            </form>

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        {product.image && <img src={`http://localhost:5000${product.image}`} alt={product.name} className="product-image" />}
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price} VND</p>
                            <p>{product.info}</p>
                            <p>Danh mục: {product.category}</p>
                            <p>Tồn kho: {product.stock}</p>
                        </div>
                        <div className="product-actions">
                            <button className="edit-btn" onClick={() => handleEdit(product)}>Sửa</button>
                            <button className="delete-btn" onClick={() => handleDelete(product.id)}>Xóa</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
