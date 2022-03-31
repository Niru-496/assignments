import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Display = () => {
  const { isAuth, token } = useContext(AuthContext);
  return (
    <div>
      {isAuth ? (
        <div>
          Login Success here is the token: <h2>{token}</h2>{" "}
        </div>
      ) : (
        "Please click the Login button to get the token"
      )}
    </div>
  );
};
