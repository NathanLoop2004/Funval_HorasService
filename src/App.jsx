import React from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import HeaderFooter from "./Components/layouts/HeaderFooter";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import HomeAdmin from "./pages/HomeAdmin";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path="/admin" element={<HomeAdmin />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forbiden" element={<Forbidden />} />
      </Routes>
    </>
  );
}
