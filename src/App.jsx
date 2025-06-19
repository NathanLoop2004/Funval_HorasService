import React from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import HeaderFooter from "./Components/layouts/HeaderFooter";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import HomeAdmin from "./pages/HomeAdmin";
import ListUsers from "./pages/ListUsers";
import ServiceHoursReportForm from "./pages/Formulario";
import ReviewServices from "./pages/ReviewServices";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path="/form" element={<ServiceHoursReportForm />} />
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/users" element={<ListUsers />} />
            <Route path="/admin/review" element={<ReviewServices />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forbiden" element={<Forbidden />} />
      </Routes>
    </>
  );
}
