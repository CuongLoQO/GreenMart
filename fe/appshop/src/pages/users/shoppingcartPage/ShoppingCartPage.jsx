import "./shoppingcartpage.scss"
import BreadCrum from "../theme/breadCrum/BreadCrum";
import { formatter } from "utils/formatter";
import Quantity from 'component/Quantity/Quantity';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../../features/cart/cartSlice.jsx';

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Tính tổng số lượng & tổng tiền
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <BreadCrum name="Giỏ hàng" />
      <div className="container">
        <div className="table__cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart__item">
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                  </td>
                  <td>{formatter(item.price)}</td>
                  <td>
                    <Quantity 
                      quantity={item.quantity} 
                      onIncrease={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      onDecrease={() => {
                        if (item.quantity > 1) {
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                        }
                      }}
                    />
                  </td>
                  <td>{formatter(item.price * item.quantity)}</td>
                  <td className="icon__close" onClick={() => dispatch(removeItem(item.id))}>
                    <IoMdClose style={{ cursor: "pointer" }} />
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>Giỏ hàng trống!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping__vourcher">
                <input type="text" placeholder="Nhập mã giảm giá?" />
                <button type="submit" className="btn-submit">Áp dụng</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>Số lượng: <span>{totalQuantity}</span></li>
                <li>Thành tiền: <span>{formatter(totalPrice)}</span> </li>
              </ul>
              <button className="btn-submit" type="submit" onClick={() => navigate(ROUTERS.USER.CHECKOUT)}>
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
