import { Link } from "react-router-dom";
import "./header.css";
import { HeaderSlider } from "../../layouts";

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__floor1">
        <h1 className="Header__logo">No'xat &nbsp;Market</h1>
        <div className="Header__nav">
          <Link to="/" className="Header__link">
            <i className="bx bx-home-alt icon"></i>
            Asosiy
          </Link>
          <Link to="/" className="Header__link">
            <i className="bx bx-store icon"></i>
            Do'konlar
          </Link>
          <Link to="/" className="Header__link">
            <i className="bx bx-news icon"></i>
            Maqolalar
          </Link>
          <Link to="/" className="Header__link">
            <i class="bx bx-heart-circle icon"></i>
            Sevimlilar
          </Link>
          <Link to="/" className="Header__link">
            <i className="bx bx-user-plus icon"></i>
            Ro'yxatdan o'tish
          </Link>
          <Link to="/" className="Header__link">
            <i className="bx bx-log-in icon"></i>
            Kirish
          </Link>
        </div>
      </div>
      <HeaderSlider />
    </div>
  );
};
