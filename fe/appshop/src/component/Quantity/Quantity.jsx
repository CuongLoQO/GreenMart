import { useState } from "react";
import "./quantity.scss";

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div className="container-quantity">
            <div className="quantity">
                <span className="qtybtn" onClick={handleDecrease}>-</span>
                <input type="number" value={quantity} readOnly />
                <span className="qtybtn" onClick={handleIncrease}>+</span>
            </div>
            <button type="submit" className="btn-submit">
                Thêm giỏ hàng
            </button>
        </div>
    );
};

export default Quantity;
