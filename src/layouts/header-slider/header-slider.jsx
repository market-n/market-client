import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./header-slider.css";

export const HeaderSlider = () => {
  return (
    <div className="Header__floor2">
      <div className="Header__nav">
        <Link to="/" className="Header__link Header__down">
          Sport anjomlari
        </Link>
        <Link to="/" className="Header__link Header__down">
          Telefonlar
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
        <Link to="/" className="Header__link Header__down">
          Maishiy Texnika
        </Link>
      </div>
    </div>
  );
};
