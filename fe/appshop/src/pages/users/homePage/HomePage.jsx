// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import './homepage.scss';
// import axios from "axios";
// const API_URL = "http://localhost:5000/api/categories";

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { Link } from "react-router-dom";
// import 'react-tabs/style/react-tabs.css';
// import { FaEye } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import ProductsCard from 'component/productsCard/ProductsCard';

// import banner from 'assets/user/images/hero/banner.jpg';
// import banner1 from 'assets/user/images/hero/banner1.jpg';
// import banner2 from 'assets/user/images/hero/banner2.jpg';
// import cat1 from 'assets/user/images/categories/cat-1.jpg';
// import cat2 from 'assets/user/images/categories/cat-2.jpg';
// import cat3 from 'assets/user/images/categories/cat-3.jpg';
// import cat4 from 'assets/user/images/categories/cat-4.jpg';
// import meatbo from 'assets/user/images/featured/feature-1.jpg';
// import bapcai from 'assets/user/images/featured/feature-2.jpg';
// import buoi from 'assets/user/images/featured/feature-3.jpg';
// import fish from 'assets/user/images/featured/feature-4.jpg';
// import meatpig from 'assets/user/images/featured/feature-5.jpg';
// import oi from 'assets/user/images/featured/feature-6.jpg';
// import suhao from 'assets/user/images/featured/feature-7.jpg';


// const HomePage = () => {
// const [featureProducts, setFeatureProducts] = useState({});
// useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(API_URL);
//                 const categories = await res.json();

//                 let data = {
//                     all: {
//                         title: "Tất cả",
//                         products: [],
//                     },
//                 };

//                 // Duyệt qua từng danh mục để lấy sản phẩm
//                 for (const category of categories) {
//                     const productRes = await fetch(`${API_URL}/${category.id}/products`);
//                     const products = await productRes.json();

//                     data[category.slug || category.name] = {
//                         title: category.name,
//                         products: products.map((product) => ({
//                             img: product.image, // Đảm bảo API có trả về đường dẫn ảnh
//                             name: product.name,
//                             price: product.price,
//                         })),
//                     };

//                     // Thêm vào danh sách "Tất cả"
//                     data.all.products.push(...data[category.slug || category.name].products);
//                 }

//                 setFeatureProducts(data);
//             } catch (error) {
//                 console.error("Lỗi khi fetch dữ liệu:", error);
//             }
//         };

//         fetchData();
//     }, []);
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
//   const sliderItems = [
//     {
//       bgImg: cat1,
//       name: 'Cam tươi'
//     },
//     {
//       bgImg: cat2,
//       name: 'Nho'
//     },
//     {
//       bgImg: cat3,
//       name: 'Ổi'
//     },
//     {
//       bgImg: cat4,
//       name: 'Dâu tây'
//     },
//     {
//       bgImg: cat4,
//       name: 'Thịt bò'
//     },
//   ]
//   // const featureProducts = {
//   //   all: {
//   //     title: "Tất cả",
//   //     products: [
//   //       {
//   //         img: bapcai,
//   //         name: "Bắp cải",
//   //         price: "12000",
//   //       },
//   //       {
//   //         img: fish,
//   //         name: "Cá hồi",
//   //         price: "140000",
//   //       },
//   //       {
//   //         img: buoi,
//   //         name: "Bưởi",
//   //         price: "15000",
//   //       },
//   //       {
//   //         img: meatpig,
//   //         name: "Thịt lợn",
//   //         price: "130000",
//   //       },
//   //       {
//   //         img: meatbo,
//   //         name: "Thịt bò",
//   //         price: "240000",
//   //       },
//   //       {
//   //         img: oi,
//   //         name: "Ổi",
//   //         price: "25000",
//   //       },
//   //       {
//   //         img: suhao,
//   //         name: "Su hào",
//   //         price: "30000",
//   //       },
//   //     ]
//   //   },
//   //   meats: {
//   //     title: "Thịt",
//   //     products: [
//   //       {
//   //         img: meatpig,
//   //         name: "Thịt lợn",
//   //         price: "130000",
//   //       },
//   //       {
//   //         img: fish,
//   //         name: "Cá hồi",
//   //         price: "170000",
//   //       },
//   //       {
//   //         img: meatbo,
//   //         name: "Thịt bò",
//   //         price: "240000",
//   //       },
//   //     ]
//   //   },
//   //   vegetable: {
//   //     title: "Rau củ",
//   //     products: [
//   //       {
//   //         img: bapcai,
//   //         name: "Cải bắp",
//   //         price: "2000",
//   //       },
//   //       {
//   //         img: suhao,
//   //         name: "Su hào",
//   //         price: "30000",
//   //       },
//   //     ]
//   //   },
//   //   fruits: {
//   //     title: "Hoa quả",
//   //     products: [
//   //       {
//   //         img: oi,
//   //         name: "Ổi",
//   //         price: "25000",
//   //       },
//   //       {
//   //         img: buoi,
//   //         name: "Bưởi",
//   //         price: "15000",
//   //       },
//   //     ]
//   //   },
//   // }
//   const renderFeaturedProducts = (data) => {
//     const tablist = [];
//     const tabPanels = [];
//     Object.keys(data).forEach((key, index) => {
//       tablist.push(
//         <Tab key={index}>{data[key].title}</Tab>
//       );
//       const tabPanel = [];
//       data[key].products.forEach((item, j) => {
//         tabPanel.push(
//           <div key={j} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
//             <ProductsCard name={item.name} img={item.img} price={item.price} />
//           </div>
//         );
//       });

//       tabPanels.push(tabPanel);
//     });
//     return (
//       <Tabs>
//         <TabList>{tablist}</TabList>

//         {tabPanels.map((item, key) => (
//           <TabPanel key={key}>
//             <div className="row">{item}</div>
//           </TabPanel>
//         ))}

//       </Tabs>
//     )
//   }
//   return (
//     <>
//       <div className="container container__categories__slider">
//         <Carousel
//           responsive={responsive}
//           className='categories__slider'
//           containerClass="carousel-container"
//           keyBoardControl={true}

//         >
//           {
//             sliderItems.map((item, index) => (
//               <div className="categories__slider__item" key={index} style={{ backgroundImage: `url(${item.bgImg})` }}>
//                 <p>{item.name}</p>
//               </div>

//             ))
//           }
//         </Carousel>
//       </div>
//       {/* Featured Begin */}
//       <div className="container">
//         <div className="featured">
//           <div className="section__title">
//             <h2>Sản phẩm nổi bật</h2>
//           </div>
//           {renderFeaturedProducts(featureProducts)}
//         </div>
//       </div>
//       {/* Featured End */}
//       {/* Banner Begin */}
//       <div className="container">
//         <div className="banner dp-b">
//           <div className="banner__pic">
//             <img src={banner1} alt="" />
//           </div>
//           <div className="banner__pic">
//             <img src={banner2} alt="" />
//           </div>
//         </div>
//       </div>
//       {/* Featured End */}
//     </>
//   );
// }
// export default HomePage;

import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./homepage.scss";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import ProductsCard from "component/productsCard/ProductsCard";

// Đường dẫn API
const API_URL = "http://localhost:5000/api/categories";
const BASE_URL = "http://localhost:5000";


// Import ảnh
import banner1 from "assets/user/images/hero/banner1.jpg";
import banner2 from "assets/user/images/hero/banner2.jpg";
import cat1 from "assets/user/images/categories/cat-1.jpg";
import cat2 from "assets/user/images/categories/cat-2.jpg";
import cat3 from "assets/user/images/categories/cat-3.jpg";
import cat4 from "assets/user/images/categories/cat-4.jpg";

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
    { bgImg: cat1, name: "Cam tươi" },
    { bgImg: cat2, name: "Nho" },
    { bgImg: cat3, name: "Ổi" },
    { bgImg: cat4, name: "Dâu tây" },
    { bgImg: cat4, name: "Dâu tây" },
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
              <p>{item.name}</p>
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

