import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__floor1">
        <h1 className="Header__logo">T. &nbsp;Market</h1>
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
            <i className="bx bx-user-plus icon"></i>
            Ro'yxatdan o'tish
          </Link>
          <Link to="/" className="Header__link">
            <i className="bx bx-log-in icon"></i>
            Kirish
          </Link>
        </div>
      </div>
      <div className="Header__floor2">
        <div className="Header__nav">
          <Link to="/" className="Header__link Header__down">
            Barchasi
          </Link>
          <Link to="/" className="Header__link Header__down">
            Texnikalar
          </Link>
          <Link to="/" className="Header__link Header__down">
            Kiyim-kechaklar
          </Link>
          <Link to="/" className="Header__link Header__down">
            Kitoblar
          </Link>
          <Link to="/" className="Header__link Header__down">
            Stol-stullar
          </Link>
          <Link to="/" className="Header__link Header__down">
            O'yinchoqlar
          </Link>
        </div>
      </div>
    </div>
  );
};
