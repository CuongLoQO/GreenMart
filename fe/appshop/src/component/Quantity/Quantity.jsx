import { useLocation } from "react-router-dom";
import "./quantity.scss";

const Quantity = ({ quantity, onIncrease, onDecrease }) => {

    return (
        <div className="container-quantity">
            <div className="quantity">
                <span className="qtybtn" onClick={onDecrease} style={{ cursor: "pointer" }}>-</span>
                <input type="number" value={quantity} readOnly />
                <span className="qtybtn" onClick={onIncrease} style={{ cursor: "pointer" }}>+</span>
            </div>
        </div>
    );
};

export default Quantity;
