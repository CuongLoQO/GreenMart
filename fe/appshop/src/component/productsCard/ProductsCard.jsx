import { generatePath, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { formatter } from "../../utils/formatter.jsx";
import { ROUTERS } from "utils/router.jsx";
import { useCart } from "../../context/CartContext";
import "./productscard.scss";

const ProductsCard = ({ id, img, name, price }) => {
    const { addToCart } = useCart(); // Lấy hàm addToCart từ Context

    return (
        <div className="featured__item pl-pr-10">
            <div className="featured__item__pic"
                style={{ backgroundImage: `url(${img})` }}
            >
                <ul className='featured__item__pic__hover'>
                    <li>
                        <FaEye />
                    </li>
                    <li>
                        <MdOutlineShoppingCart />
                    </li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6>
                <Link to={generatePath(ROUTERS.USER.PRODUCT, { id })}>{name}</Link>
                </h6>
                <h5>{formatter(price)}</h5>
            </div>
        </div>
    );
};

export default ProductsCard;
