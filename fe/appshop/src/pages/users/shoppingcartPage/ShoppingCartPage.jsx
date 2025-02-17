import "./shoppingcartpage.scss"
import BreadCrum from "../theme/breadCrum/BreadCrum";
import { formatter } from "utils/formatter";
import Quantity from 'component/Quantity/Quantity';
import { IoMdClose } from "react-icons/io";
import meatbo from 'assets/user/images/featured/feature-1.jpg';
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";


const ShoppingCartPage = () => {
  const navigate = useNavigate();
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
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart__item">
                  <img src={meatbo} alt="" />
                  <h4>Tên sản phẩm 1</h4>
                </td>
                <td>
                  {formatter(200000)}
                </td>
                <td>
                  <Quantity hasAddToCart={false}/>
                </td>
                <td>
                  {formatter(400000)}
                </td>
                <td className="icon__close"><IoMdClose/></td>
              </tr>
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
                <li>Số lượng: <span>2</span></li>
                <li>Thành tiền: <span>{formatter(2999999)}</span> </li>
              </ul>
              <button className="btn-submit" type="submit" onClick={()=>navigate(ROUTERS.USER.CHECKOUT)}>Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShoppingCartPage;