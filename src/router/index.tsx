import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import { PAGES } from "../shared/lib/constants/pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PAGES.home} element={<Home />} />
    </Routes>
  </BrowserRouter>
);
