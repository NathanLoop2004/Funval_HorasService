import React, { createContext, useEffect, useState } from "react";
import { profile } from "../../axios/auth";
import Home from "../../pages/Home";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderFooter from "./HeaderFooter";

export const ProfileContext = createContext();

export default function AuthLayout() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    profile()
      .then((res) => {
        setData(res);
        const role = res?.role?.name;

        if (role === "admin") {
          navigate("/admin");
        } else if (role === "student") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <ProfileContext.Provider value={{ data }}>
      <HeaderFooter />
    </ProfileContext.Provider>

  )
}
