import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import ErrorBoundary from "../errors/ErrorBoundary";
import Home from "../pages/Home";

const AppRoutes = () => (
  <ErrorBoundary info="Something went wrong at" location="home">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />{" "}
    </Routes>{" "}
  </ErrorBoundary>
);

export default AppRoutes;
