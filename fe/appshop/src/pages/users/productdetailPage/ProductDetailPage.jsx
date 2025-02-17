import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadCrum from "../theme/breadCrum/BreadCrum";
import Quantity from "component/Quantity/Quantity";
import ProductsCard from "component/productsCard/ProductsCard";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { formatter } from "utils/formatter";
import { featureProducts } from "utils/common";
import "./productdetailpage.scss";
const API_URL = "http://localhost:5000/api/products";
const BASE_URL = "http://localhost:5000";



const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div>
      <BreadCrum name="Chi tiết sản phẩm" />
      <div className="container infor">
        <div className="row">
          <div className="col-lg-6 col-md-12 product-pic__detail">
            <img src={`http://localhost:5000${product.image}`} alt={product.name} />
          </div>
          <div className="col-lg-6 col-md-12 product-text__detail">
            <h2>{product.name}</h2>
            <h3>{formatter(product.price)}</h3>
            <p>{product.description}</p>
            <Quantity />
            <ul>
              <li>
                <b>Tình trạng:</b> <span>{product.stock > 0 ? "Còn hàng" : "Hết hàng"}</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>{product.stock}</span>
              </li>
              <li>
                <b>Chia sẻ</b> {" "}
                <span>
                  <FaSquareFacebook />
                  <FaSquareInstagram />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-infor__detail">
          <h4>Thông tin chi tiết</h4>
          <p>{product.info}</p>
        </div>
        <div className="section-title">
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className="row">
          {products.map((item, key) => (
            <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductsCard id={item.id} name={item.name} img={`${BASE_URL}${item.image}`} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
