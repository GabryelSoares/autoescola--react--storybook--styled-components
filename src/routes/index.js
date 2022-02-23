import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "routes/about";
import Loja from "routes/loja";
import Home from "routes/home";
import ProductDetail from "routes/servicos";
import Error404 from "routes/error404";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/loja/:id" element={<Loja />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetail />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
