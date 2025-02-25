import { generatePath, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { formatter } from "../../utils/formatter.jsx";
import { ROUTERS } from "utils/router.jsx";
import "./productscard.scss";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem } from '../../features/cart/cartSlice.jsx';

const ProductsCard = ({ id, img, name, price }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const productToAdd = { id, name, img, price };
        dispatch(addItem(productToAdd));
        toast.success(`Đã thêm "${name}" vào giỏ hàng!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    };
    return (
        <div className="featured__item pl-pr-10">
            <div className="featured__item__pic"
                style={{ backgroundImage: `url(${img})` }}
            >
                <ul className='featured__item__pic__hover'>
                    <li>

                        <Link to={generatePath(ROUTERS.USER.PRODUCT, { id })}><FaEye /></Link>
                    </li>
                    <li onClick={handleAddToCart}>
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
