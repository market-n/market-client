import "./category.css";
export const Category = () => {
  return (
    <div className="Category">
      <h1 className="Category__title">
        category <i className="bx bx-category icon"></i>
      </h1>
      <div className="CategoryTable">
        <p className="CategoryTable__row">Texnikalar</p>
        <p className="CategoryTable__row">Dorilar</p>
        <p className="CategoryTable__row">Kompyuterlar</p>
        <p className="CategoryTable__row">Telefonlar</p>
      </div>
    </div>
  );
};
