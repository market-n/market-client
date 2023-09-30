import { Fragment, useEffect } from "react";
import "./category.css";
import { useState } from "react";
import { axiosInstance } from "../../shared/services";
export const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axiosInstance.get("/product-category").then(({ data: { data } }) => {
      setCategory(data);
    });
  }, []);

  if (!category.length) {
    return <h1>Loading...</h1>;
  }
  console.log(category);
  return (
    <div className="Category">
      <h1 className="Category__title">
        category <i className="bx bx-category icon"></i>
      </h1>
      <div className="CategoryTable">
        {category.map((item) => (
          <p className="CategoryTable__row" key={item._id}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};
