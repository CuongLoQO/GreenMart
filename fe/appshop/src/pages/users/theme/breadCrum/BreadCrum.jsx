import { ROUTERS } from "../../../../utils/router";
import'./breadcrum.scss';
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
    return (
        <div className="breadcrum">
          <div className="breadcrum__text">
            <h2>DucCuong</h2>
            <div className="breadcrum__option">
              <ul>
                <li>
                  <Link className="link" to={ROUTERS.USER.HOME}>Trang chủ</Link> 
                </li>
                <li>{props.name}</li>
              </ul>
            </div>
          </div>
        </div>
    );   
  }
  export default BreadCrum;