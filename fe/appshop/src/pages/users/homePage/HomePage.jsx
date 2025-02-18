

import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./homepage.scss";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link ,generatePath} from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import ProductsCard from "component/productsCard/ProductsCard";
import { ROUTERS } from "../../../utils/router";
// Đường dẫn API
const API_URL = "http://localhost:5000/api/categories";
const BASE_URL = "http://localhost:5000";


// Import ảnh
import banner1 from "assets/user/images/hero/banner1.jpg";
import banner2 from "assets/user/images/hero/banner2.jpg";
import cat1 from "assets/user/images/categories/hoaqua.jpg";
import cat2 from "assets/user/images/categories/raucu.jpg";
import cat3 from "assets/user/images/categories/haisan.jpg";
import cat4 from "assets/user/images/categories/thit.jpg";
import cat5 from "assets/user/images/categories/nuoctraicay.jpg";

const HomePage = () => {
  const [featureProducts, setFeatureProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API lấy danh mục
        const { data: categories } = await axios.get(API_URL);
        let formattedData = { all: { title: "Tất cả", products: [] } };

        // Lấy sản phẩm cho từng danh mục
        await Promise.all(
          categories.map(async (category) => {
            try {
              const { data: products } = await axios.get(`${API_URL}/${category.id}/products`);

              formattedData[category.slug || category.name] = {
                title: category.name,
                products: products.map((product) => ({
                  id: product.id,
                  img: product.image ? `${BASE_URL}${product.image}` : "",
                  name: product.name,
                  price: product.price,
                })),
              };

              formattedData.all.products.push(...formattedData[category.slug || category.name].products);
            } catch (err) {
              console.error(`Lỗi khi lấy sản phẩm của danh mục ${category.name}:`, err);
            }
          })
        );

        setFeatureProducts(formattedData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu danh mục:", error);
      }
    };

    fetchData();
  }, []);

  // Responsive cho slider
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const sliderItems = [
    { bgImg: cat1, id: 2, name: "Hoa quả" },
    { bgImg: cat2, id: 4, name: "Rau củ" },
    { bgImg: cat3, id: 5, name: "Hải sản" },
    { bgImg: cat4, id: 1, name: "Thịt" },
    { bgImg: cat5, id: 3, name: "Nước trái cây" },
  ];

  // Hàm render danh sách sản phẩm nổi bật
  const renderFeaturedProducts = (data) => (
    <Tabs>
      <TabList>
        {Object.keys(data).map((key, index) => (
          <Tab key={index}>{data[key].title}</Tab>
        ))}
      </TabList>

      {Object.keys(data).map((key, index) => (
        <TabPanel key={index}>
          <div className="row">
            {data[key].products.length > 0 ? (
              data[key].products.map((item, j) => (
                <div key={j} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <ProductsCard id={item.id} name={item.name} img={item.img} price={item.price} />
                </div>
              ))
            ) : (
              <p>Chưa có sản phẩm nào</p>
            )}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );

  return (
    <>
      {/* Slider danh mục */}
      <div className="container container__categories__slider">
        <Carousel responsive={responsive} className="categories__slider" containerClass="carousel-container">
          {sliderItems.map((item, index) => (
            <div
              className="categories__slider__item"
              key={index}
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: item.id })}><p>{item.name}</p></Link>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Sản phẩm nổi bật */}
      <div className="container">
        <div className="featured">
          <div className="section__title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featureProducts)}
        </div>
      </div>

      {/* Banner */}
      <div className="container">
        <div className="banner dp-b">
          <div className="banner__pic">
            <img src={banner1} alt="Banner 1" />
          </div>
          <div className="banner__pic">
            <img src={banner2} alt="Banner 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

