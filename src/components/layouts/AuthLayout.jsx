import React, { createContext, useEffect, useState } from "react";
import { profile } from "../../axios/auth";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";

export const ProfileContext = createContext();

export default function AuthLayout() {
  const [data, setData] = useState(null);

  useEffect(() => {
    profile()
      .then((rs) => setData(rs))
      .catch((error) => console.log(error));
  }, []);

  return <Outlet />;
}
