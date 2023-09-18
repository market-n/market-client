import { Fragment } from "react";
import "./home.css";
import { Header, HomeMain, Products } from "../../components";
export const Home = () => {
  return (
    <Fragment>
      <Header />
      <HomeMain />
      <Products />
    </Fragment>
  );
};
