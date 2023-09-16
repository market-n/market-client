import { Fragment } from "react";
import { Route, Routes as Routers } from "react-router-dom";
import { Home } from "../../pages/home/home";

export const Router = () => {
  return (
    <Fragment>
      <Routers>
        <Route exact path="/" element={<Home />} />
      </Routers>
    </Fragment>
  );
};
