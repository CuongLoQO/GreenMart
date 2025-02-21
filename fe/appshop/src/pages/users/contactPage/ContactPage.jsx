import React from 'react';
import './contactpage.scss';
const ContactPage = () => {
  return (

    <>
      <div className="contact_wrap">
        <div className="container contact_container">
          <div className="col-lg-12">
            <div className="header_contact">
              <h2>
                Gửi ý kiến của bạn đến với chúng tôi
              </h2>
              <p>Mọi thông tin góp ý xin vui lòng gửi đến chúng tôi theo địa chỉ này</p>
            </div>
          </div>
          <div className='infor_contact'>
            <ul>
              <li>Địa chỉ: 47 ngõ 132 Khương Trung</li>
              <li>Phone: 0777-903-759</li>
              <li>Email: GreenMartShop@gmail.com</li>
            </ul>
          </div>
          <div className="form_contact">
            <form action="">
              <input type="text" placeholder='Họ và tên' />
              <input type="text" placeholder='Số điện thoại' />
              <input type="email" placeholder='Email' />
              <textarea rows={50} placeholder='Ý kiến của bạn'></textarea>
            </form>
            <button type='submit' className='btn-submit'>Gửi</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
