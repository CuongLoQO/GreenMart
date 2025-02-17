import cat1 from 'assets/user/images/categories/cat-1.jpg';
import cat2 from 'assets/user/images/categories/cat-2.jpg';
import cat3 from 'assets/user/images/categories/cat-3.jpg';
import cat4 from 'assets/user/images/categories/cat-4.jpg';
import meatbo from 'assets/user/images/featured/feature-1.jpg';
import bapcai from 'assets/user/images/featured/feature-2.jpg';
import buoi from 'assets/user/images/featured/feature-3.jpg';
import fish from 'assets/user/images/featured/feature-4.jpg';
import meatpig from 'assets/user/images/featured/feature-5.jpg';
import oi from 'assets/user/images/featured/feature-6.jpg';
import suhao from 'assets/user/images/featured/feature-7.jpg';


export   const featureProducts = {
    all: {
      title: "Tất cả",
      products: [
        {
          img: bapcai,
          name: "Bắp cải",
          price: "12000",
        },
        {
          img: fish,
          name: "Cá hồi",
          price: "140000",
        },
        {
          img: buoi,
          name: "Bưởi",
          price: "15000",
        },
        {
          img: meatpig,
          name: "Thịt lợn",
          price: "130000",
        },
        {
          img: meatbo,
          name: "Thịt bò",
          price: "240000",
        },
        {
          img: oi,
          name: "Ổi",
          price: "25000",
        },
        {
          img: suhao,
          name: "Su hào",
          price: "30000",
        },
      ]
    },
    meats: {
      title: "Thịt",
      products: [
        {
          img: meatpig,
          name: "Thịt lợn",
          price: "130000",
        },
        {
          img: fish,
          name: "Cá hồi",
          price: "170000",
        },
        {
          img: meatbo,
          name: "Thịt bò",
          price: "240000",
        },
      ]
    },
    vegetable: {
      title: "Rau củ",
      products: [
        {
          img: bapcai,
          name: "Cải bắp",
          price: "2000",
        },
        {
          img: suhao,
          name: "Su hào",
          price: "30000",
        },
      ]
    },
    fruits: {
      title: "Hoa quả",
      products: [
        {
          img: oi,
          name: "Ổi",
          price: "25000",
        },
        {
          img: buoi,
          name: "Bưởi",
          price: "15000",
        },
      ]
    },
  }