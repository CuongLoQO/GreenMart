import { formatter } from "utils/formatter";
import BreadCrum from "../theme/breadCrum/BreadCrum";
import "./checkoutpage.scss"
const CheckOutPage = () => {
  return (
    <>
      <BreadCrum name="Thanh toán" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout_input">
              <label>
                Họ và tên: <span className="required">*</span>
                <input type="text" placeholder="Nhập họ và tên" />
              </label>
            </div>
            <div className="checkout_input">
              <label>
                Địa chỉ: <span className="required">*</span>
                <input type="text" placeholder="Nhập địa chỉ" />
              </label>
            </div>
            <div className="checkout_input_group">
              <div className="checkout_input">
                <label>
                  Số điện thoại: <span className="required">*</span>
                  <input type="text" placeholder="Số điện thoại" />
                </label>
              </div>
              <div className="checkout_input">
                <label>
                  Email: <span className="required">*</span>
                  <input type="email" placeholder="Nhập địa chỉ Email" />
                </label>
              </div>
            </div>
            <div className="checkout_input">
              <label>
                Ghi chú: <span className="required">*</span>
                <textarea rows={20} placeholder="Thêm ghi chú"></textarea>
              </label>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout_oder">
              <h3>Đơn hàng</h3>
              <ul>
                <li>
                  <span>Thị bò mỹ</span>
                  <b>{formatter(200000)}</b>
                </li>
                <li>
                  <span>Cá hồi</span>
                  <b>{formatter(200000)}</b>
                </li>
                <li>
                  <span>Dâu tây</span>
                  <b>{formatter(200000)}</b>
                </li>
                <li>
                  <span>Cam</span>
                  <b>{formatter(200000)}</b>
                </li>
                <li>
                  <h4>Mã giảm giá</h4>
                  <b>Voucher1992</b>
                </li>
                <li className="checkout_oder-rate">
                  <h3>Tổng thanh toán</h3>
                  <b>{formatter(745000)}</b>
                </li>
              </ul>
              <button type="submit" className="btn-submit">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOutPage;