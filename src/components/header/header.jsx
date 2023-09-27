import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header__logo">
        SUQ <span>MARKET</span>
      </h1>
      <nav className="HeaderNav">
        <Link to="/" className="HeaderNav__link">
          Asosiy sahifa
        </Link>
        <Link to="/" className="HeaderNav__link">
          Maqolalar
        </Link>
        <Link to="/" className="HeaderNav__link">
          Bog'lanish
        </Link>
      </nav>
    </div>
  );
};
