import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const login = () => {
    if (!isAuth) {
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((res) => {
          toggleAuth(res.data.token);
        });
    } else {
      toggleAuth();
    }
  };
  return (
    <div className="nav">
      <nav>
        <button onClick={login}>{isAuth ? "Logout" : "Login"}</button>
      </nav>
    </div>
  );
};
