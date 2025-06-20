import React from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import { Route, Routes } from "react-router";
import HomeAdmin from "./pages/HomeAdmin";
import ListUsers from "./pages/ListUsers";
import ServiceHoursReportForm from "./pages/Formulario";
import ReviewServices from "./pages/ReviewServices";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/form" element={<ServiceHoursReportForm />} />
          <Route path="/admin/users" element={<ListUsers />} />
          <Route path="/admin/review" element={<ReviewServices />} />
        </Route>
        <Route path="/forbiden" element={<Forbidden />} />
      </Routes>
    </>
  );
}
