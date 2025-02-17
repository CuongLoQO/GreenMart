import BreadCrum from "../theme/breadCrum/BreadCrum";
import { Link } from "react-router-dom";
import ProductsCard from 'component/productsCard/ProductsCard';
import "./productspage.scss"
import { categories } from "../theme/header/Header";
import { ROUTERS } from "../../../utils/router";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/api/products";
const BASE_URL = "http://localhost:5000";



import meatbo from 'assets/user/images/featured/feature-1.jpg';
import bapcai from 'assets/user/images/featured/feature-2.jpg';
import buoi from 'assets/user/images/featured/feature-3.jpg';
import fish from 'assets/user/images/featured/feature-4.jpg';
import meatpig from 'assets/user/images/featured/feature-5.jpg';
import oi from 'assets/user/images/featured/feature-6.jpg';
import suhao from 'assets/user/images/featured/feature-7.jpg';


const ProductsPage = () => {
  const sorts = [
    "Giá từ thấp đến cao",
    "Giá từ cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];
  // const products = [
  //   {
  //     img: meatbo,
  //     name: "Thị bò",
  //     price: "240000",
  //   },
  //   {
  //     img: bapcai,
  //     name: "Bắp cải",
  //     price: "12000",
  //   },
  //   {
  //     img: buoi,
  //     name: "Bưởi",
  //     price: "15000",
  //   },
  //   {
  //     img: meatpig,
  //     name: "Thịt lợn",
  //     price: "130000",
  //   },
  //   {
  //     img: fish,
  //     name: "Cá hồi",
  //     price: "140000",
  //   },
  //   {
  //     img: oi,
  //     name: "Ổi",
  //     price: "25000",
  //   },
  //   {
  //     img: suhao,
  //     name: "Su hào",
  //     price: "30000",
  //   }
  // ];
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
  return (
    <div>
      <BreadCrum name="Danh sách sản phẩm" />
      <div className="container sider">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="slidebar">
              <div className="slidebar__item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="slidebar__item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="slidebar__item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {
                    sorts.map((item, key) => (
                      <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <div className="slidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  {
                    categories.map((name, key) => (
                      <li key={key}>
                        <Link to={ROUTERS.USER.HOME}>{name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="row">
              {
                products.map((item, key) => (
                  <div key={key} className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                    <ProductsCard id={item.id} name={item.name} img={`${BASE_URL}${item.image}`} price={item.price} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;