import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate,generatePath   } from "react-router-dom"; 
import "./header.scss";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineMenu } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { ROUTERS } from "../../../../utils/router";


// export   const categories = [
//   "Thịt tươi",
//   "Rau củ tươi",
//   "Hoa quả",
//   "Nước trái cây",
//   "Hải sản",

// ];

export const categories = [
  { id: 1, name: "Thịt tươi" },
  { id: 2, name: "Hoa quả" },
  { id: 3, name: "Nước trái cây" },
  { id: 4, name: "Rau củ tươi" },
  { id: 5, name: "Hải sản" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowOpenMenu, setIsShowOpenMenu] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length<=1);
  const [isShowCategories, setIsShowCategories] = useState(isHome);


  const [menus, setMenus] = useState([ 
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTPAGES,
    },
    {
      name: "Sản phẩm",
      path: "#",
      isShowSub: false,
      child: [
        { name: "Thịt tươi", path: generatePath(ROUTERS.USER.PRODUCTS, { id: 1 }) },
  { name: "Hoa quả", path: generatePath(ROUTERS.USER.PRODUCTS, { id: 2 }) },
  { name: "Nước trái cây", path: generatePath(ROUTERS.USER.PRODUCTS, { id: 3 }) },
  { name: "Rau củ", path: generatePath(ROUTERS.USER.PRODUCTS, { id: 4 }) },
  { name: "Hải sản", path: generatePath(ROUTERS.USER.PRODUCTS, { id: 5 }) },
      ],
    },
    { name: "Bài viết", path: ROUTERS.USER.Article },
    { name: "Liên hệ", path: "" },
  ]);

  useEffect(()=>{
    const isHome = location.pathname.length<=1;
    setIsHome(isHome);
    setIsShowCategories(isHome);
  },[location]);
  return (
    <>
      <div className={`open__menu__overlay${isShowOpenMenu ? " active" : ""}`}
        onClick={() => setIsShowOpenMenu(false)}
      />

      <div className={`open__menu__wrapper${isShowOpenMenu ? " show" : ""}`}>
        <div className="header__logo">
          <h1>GreenMart Shop</h1>
        </div>
        <div className="open__menu__cart">
          <ul>
            <li>
              <Link to={ROUTERS.USER.SHOPPINGCART}>
                <IoCartOutline />
                <span>0</span>
              </Link>
            </li>
          </ul>
          <div className="open__cart__text">
            Giỏ hàng
          </div>
        </div>
        <div className="open__menu__widget">
          <div className="header__top__right_auth">
            <Link>
              <FaUserAlt /> Đăng nhập
            </Link>
          </div>
        </div>
        <div className="open__menu__nav">
          <ul>
            {
              menus.map((menu, menukey) => ((

                <li key={menukey} >
                  <Link
                    onClick={() => {
                      const newMenus = [...menus];
                      newMenus[menukey].isShowSub = !newMenus[menukey].isShowSub;
                      setMenus(newMenus);
                    }}
                  >{menu.name}
                    {menu.child && (
                      menu.isShowSub ? (<IoIosArrowDropup />) : (<IoIosArrowDropdown />)
                    )}
                  </Link>
                  {menu.child &&
                    (
                      <ul className={`open__menu__drop${menu.isShowSub ? " show__submenu" : ""}`}>
                        {menu.child.map((childItem, childKey) => (
                          <li key={childKey}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                </li>
              )))
            }
          </ul>
        </div>
        <div className="header__top__right_socical">
          <Link>
            <FaSquareFacebook />
          </Link>
          <Link>
            <FaSquareInstagram />
          </Link>
        </div>
        <div className="open__menu__contact">
          <ul>
            <li>
              <MdOutlineEmail />
              GreenMartShop@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 header_top_left">
              <ul>
                <li><MdOutlineEmail /> GreenMartShop@gmail.com</li>
                <li>Mua nhiều giảm giá</li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li><FaSquareFacebook /></li>
                <li><FaSquareInstagram /></li>
              </ul>
              <div className="auth-buttons">
                <button className="btn btn-signup">Đăng ký</button>
                <button className="btn btn-login" onClick={()=>navigate(ROUTERS.ADMIN.LOGIN)}>Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo ml-40">
              <h2>GreenMart Shop</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menukey) => (
                  <li key={menukey} className={location.pathname === menu.path ? "active" : ""}>
                    <Link to={menu.path}>{menu.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((subMenu, subMenukey) => (
                          <li key={subMenukey}>
                            <Link to={subMenu.path}>{subMenu.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )
                    }
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <Link to={ROUTERS.USER.SHOPPINGCART}>
                  <IoCartOutline />
                  <span>0</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__open">
              <MdOutlineMenu
                onClick={() => {
                  setIsShowOpenMenu(true)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories__container">
          <div className="col-lg-3 col-lg-12 col-md-12 col-sm-12 col-xs-12 hero__categories">
            <div className="hero__categories__all" onClick={() => setIsShowCategories(!isShowCategories)}>
              <MdOutlineMenu />
              Danh sách sản phẩm
            </div>
            {
              isShowCategories && (
                <ul className={isShowCategories ? '' : 'hidden'}>

                  {categories.map((category, key) => (

                    <li key={key}><Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: category.id })}>{category.name}</Link></li>

                  ))}
                </ul>
              )
            }
          </div>
          <div className="col-lg-9 col-lg-12 col-md-12 col-sm-12 col-xs-12 hero__search__container">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <input type="text"
                    name=""
                    value=""
                    placeholder="Bạn đang cần tìm gì?"
                  />
                  <button type="submit">Tìm Kiếm</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <FaPhoneAlt />
                </div>
                <div className="hero__search__phone__text">
                  <p>Hotline</p>
                  <span>0123456789</span>
                </div>
              </div>
            </div>
            {
              isHome && (
                <div className="hero__item">
                  <div className="hero__text">
                    <span>Trái cây tươi</span>
                    <h2>
                      Rau củ <br />
                      Sạch 100%
                    </h2>
                    <p>Miễn phí giao hàng tận nơi</p>
                    <Link>Mua ngay</Link>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
