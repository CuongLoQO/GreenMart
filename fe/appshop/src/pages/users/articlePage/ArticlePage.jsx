import React from 'react';
import './ArticlePage.scss';
import { Link,generatePath } from 'react-router-dom';
import { ROUTERS } from "../../../utils/router";
const ArticlePage = () => {
  const categories = [
    { id: 1, name: "Thịt tươi" },
    { id: 2, name: "Hoa quả" },
    { id: 3, name: "Nước trái cây" },
    { id: 4, name: "Rau củ tươi" },
    { id: 5, name: "Hải sản" },
  ];

  return (
    <div className="article-container">
      <div className="article-header">
        <h1>Thực Phẩm Sạch: Xu Hướng Tiêu Dùng Hiện Đại Và Sự Lựa Chọn An Toàn Cho Sức Khỏe</h1>
        <p className="article-introduction">
          Từ sau ảnh hưởng của đại dịch Covid-19, xu hướng tiêu dùng thực phẩm sạch và an toàn đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày của người dân. Cùng với sự thay đổi trong nhận thức, người tiêu dùng giờ đây không chỉ chú trọng đến giá trị dinh dưỡng mà còn quan tâm đến nguồn gốc và chất lượng thực phẩm.
        </p>
      </div>

      <div className="article-content">
        <h2>Danh Mục Thực Phẩm An Toàn Và Dễ Dàng Tiếp Cận</h2>
        <p>
          Những năm gần đây, nhu cầu về thực phẩm sạch, hữu cơ và an toàn đã tăng trưởng mạnh mẽ. Người tiêu dùng, đặc biệt là các gia đình, không ngần ngại chi trả mức giá cao hơn để mua thực phẩm có nguồn gốc rõ ràng, được kiểm nghiệm chất lượng.
        </p>

        <h2>Các Lựa Chọn Mới Cho Người Tiêu Dùng</h2>
        <p>
          Tại các cửa hàng thực phẩm sạch, không khó để tìm thấy các sản phẩm từ các vùng nguyên liệu sạch, đảm bảo chất lượng vệ sinh an toàn thực phẩm. Các sản phẩm này được chứng nhận bởi các cơ quan thẩm định uy tín và có nguồn gốc xuất xứ rõ ràng.
        </p>

        <h2>Tăng Cường Tiện Ích Và Dễ Dàng Tiếp Cận</h2>
        <p>
          Các cơ sở kinh doanh thực phẩm sạch còn phát triển các kênh bán hàng online để phục vụ nhu cầu của khách hàng. Khách hàng có thể dễ dàng tìm thấy các sản phẩm thực phẩm qua các ứng dụng và trang web, với các thông tin rõ ràng về nguồn gốc và chất lượng của từng mặt hàng.
        </p>

        <h2>Khám Phá Các Danh Mục Sản Phẩm An Toàn Tại Cửa Hàng</h2>
        <div className="categories-list">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: category.id })}><p>{category.name}</p></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
