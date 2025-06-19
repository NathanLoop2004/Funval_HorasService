// Borra todas las cookies solo una vez al cargar la página
import { useEffect } from "react";

export function useClearCookiesOnLoad() {
  useEffect(() => {
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
  }, []);
}