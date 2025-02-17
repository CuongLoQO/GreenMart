import './orderpage.scss';

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatter } from 'utils/formatter';
import HeaderAd from '../theme/header_ad/HeaderAd';
import Footer from '@/pages/users/theme/footer/Footer';

const OrderPage = () => {
    const [orders, setOrders] = useState([
        { id: 1, total: 200000, customerName: "John Doe", date: "20/11/2025", status: "Đang lên đơn" },
        { id: 2, total: 300000, customerName: "Jane Smith", date: "21/11/2025", status: "Đã xác nhận" },
        { id: 3, total: 150000, customerName: "Alice Brown", date: "22/11/2025", status: "Đang giao hàng" },
        { id: 4, total: 500000, customerName: "Bob Johnson", date: "23/11/2025", status: "Đã giao" },
    ]);

    // Cập nhật trạng thái đơn hàng
    const handleStatusChange = (id, newStatus) => {
        setOrders(orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        ));
    };

    return (
        <>
            <div className="container">
                <HeaderAd />
            </div>
            <div className="container">
                <div className="orders">
                    <h2>Quản lý đơn hàng</h2>
                    <div className="orders__content">
                        <table className='orders__table'>
                            <thead>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Tổng đơn hàng</th>
                                    <th>Khách hàng</th>
                                    <th>Ngày đặt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{formatter(item.total)}</td>
                                            <td>{item.customerName}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <select 
                                                    value={item.status} 
                                                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                                >
                                                    <option value="Đang lên đơn">Đang lên đơn</option>
                                                    <option value="Đã xác nhận">Đã xác nhận</option>
                                                    <option value="Đang giao hàng">Đang giao hàng</option>
                                                    <option value="Đã giao">Đã giao</option>
                                                    <option value="Hủy đơn">Hủy đơn</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="orders__footer">
                        <div className="orders__pagination">
                            <div className="orders__page-number">
                                <button className="orders__page-btn">«</button>
                                <button className="orders__page-btn orders__page-btn-active">1</button>
                                <button className="orders__page-btn">2</button>
                                <button className="orders__page-btn">»</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OrderPage;
