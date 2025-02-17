import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import "./header_ad.scss";
import { ROUTERS } from 'utils/router';

const HeaderAd = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      path: ROUTERS.ADMIN.ORDERS,
      onClick: () => navigate(ROUTERS.ADMIN.ORDERS),
      label: "Đặt hàng",
      icon: <AiOutlineShoppingCart />

    },
    {
      path: ROUTERS.ADMIN.MANAGEPRODUCT,
      onClick: () => navigate(ROUTERS.ADMIN.MANAGEPRODUCT),
      label: "Quản lý sản phẩm",
      icon: <MdManageHistory />

    },
    {
      path: "",
      onClick: () => navigate(ROUTERS.ADMIN.ORDERS),
      label: "Đăng xuất",
      icon: <AiOutlineLogout />

    },
  ];
  return (
    <>
      <div className="admin_header_container">
        <nav className="admin_header_nav">
          {
            navItems.map(({path,onClick,label,icon})=>(
              <div key={path} className={`admin_header_nav-item ${location.pathname===path
              ?"admin_header_nav-item--active":""}`}
              onClick={onClick}

              >
                <span className="admin_header_nav-icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))
          }
        </nav>
      </div>
    </>
  );
};

export default HeaderAd;
