import React from "react";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import { Route, Routes } from "react-router";
import HomeAdmin from "./pages/HomeAdmin";
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
        </Route>
        <Route path="/forbiden" element={<Forbidden />} />
      </Routes>
    </>
  );
}
