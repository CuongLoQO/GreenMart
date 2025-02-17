import'./footer.scss';
import { Link } from "react-router-dom"; // ✅ Thêm import này
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h2 className="footer__about__logo">DUCCUONGSHOP</h2>
              <ul>
                <li>Địa chỉ: 47 ngõ 132 Khương Trung</li>
                <li>Phone: 0777-903-759</li>
                <li>Email: Duccuongshop@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li><Link>Liên hệ</Link></li>
                <li><Link>Thông tin về chúng tôi</Link></li>
                <li><Link>Sản phẩm kinh doanh</Link></li>
              </ul>
              <ul>
                <li><Link>Thông tin tài khoản</Link></li>
                <li><Link>Giỏ hàng</Link></li>
                <li><Link>Sản phẩm yêu thích</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h6>Khuyễn mãi && ưu đãi</h6>
              <p>Đăng ký thông tin tại đây</p>
             <form action="#">
              <div className='input-group'>
                <input type="text" placeholder='Nhập email' />
                <button type='submit' className='btn-submit'>Đăng ký</button>
              </div>
             </form>
            </div>
          <div className="footer__widget__social">
                <div>
                  <FaSquareFacebook />
                </div>
                <div>
                  <FaSquareInstagram />
                </div>
              </div>
          </div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;