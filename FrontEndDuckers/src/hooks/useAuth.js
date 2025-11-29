import { useEffect, useState } from "react";


/* 
useAuth.js
Aquí es donde se guarda y se lee al Usuario actual.
*/


//Aquí se define la clave en la que se guardará al usuario en el sessionStorage
const STORAGE_KEY = "theduckers_auth";


//Se crea función que lee al usuario subido al sessionStorage, usando la clave de STORAGE_KEY
const readUserFromStorage = () => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};




export const useAuth = () => {

  //Estado user: inicializado desde sessionStorage, gracias a la función de arriba.
  const [user, setUser] = useState(readUserFromStorage()); //Solo puede ser seteado por setUser.


  //Acá este useEffect hace que el user se mantenga en constante sincronía con lo que hay en el sessionStorage
  useEffect(() => {
    const sync = () => setUser(readUserFromStorage());
    window.addEventListener("auth-changed", sync);

    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("auth-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);




  const login = ({ username }) => {

    const cleanUsername = (username || "demo_user").trim();

    const mockUser = {
      username: cleanUsername,                 
      name: cleanUsername,                    
      email: `${cleanUsername}@example.com`,   
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    window.dispatchEvent(new Event("auth-changed"));
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("auth-changed"));
  };

  const isLogged = !!user;

  return { user, isLogged, login, logout };
};
