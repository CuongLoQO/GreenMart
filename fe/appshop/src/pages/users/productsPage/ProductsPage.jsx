import BreadCrum from "../theme/breadCrum/BreadCrum";
import { Link, useParams,generatePath } from "react-router-dom";
import ProductsCard from 'component/productsCard/ProductsCard';
import "./productspage.scss"
import { categories } from "../theme/header/Header";
import { ROUTERS } from "../../../utils/router";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/api/products";
const BASE_URL = "http://localhost:5000";
const APICATE_URL = "http://localhost:5000/api/categories";

const ProductsPage = () => {
  const sorts = [
    "Giá từ thấp đến cao",
    "Giá từ cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const { id } = useParams(); // Lấy id danh mục từ URL
  const [products, setProducts] = useState([]);

  let NameCategory = "";
  switch (parseInt(id)) {
    case 1:
      NameCategory = "Thịt tươi";
      break;
    case 2:
      NameCategory = "Hoa quả";
      break;
    case 3:
      NameCategory = "Nước trái cây";
      break;
    case 4:
      NameCategory = "Rau củ tươi";
      break;
    case 5:
      NameCategory = "Hải sản";
      break;
    default:
      NameCategory = "Danh mục khác";
  }




  useEffect(() => {
    if (id >= 1 && id <= 5) {
      fetchProductsByCategory(id);
    } else {
      fetchAllProducts();
    }
  }, [id]);

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`${APICATE_URL}/${categoryId}/products`);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    }
  };
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi tải tất cả sản phẩm:", error);
    }
  };

  return (
    <div>
      <BreadCrum name={`Danh sách sản phẩm - ${NameCategory}`} />
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
                    categories.map((category, key) => (
                      <li key={key}>
                        <Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: category.id })}>{category.name}</Link>
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