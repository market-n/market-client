import { HomeProducts, Sidebar } from "../../layouts";
import { Category } from "../category/category";
import "./home-component.css";
export const HomeComponent = () => {
  return (
    <div className="HomeComponent">
      <Sidebar>
        <Category />
      </Sidebar>
      <HomeProducts />
    </div>
  );
};
