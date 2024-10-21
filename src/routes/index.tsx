import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { Projects } from "../pages/Projects";
import { NotFound } from "../pages/NotFound";

const Routtes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routtes;
