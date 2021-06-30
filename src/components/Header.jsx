import { useContext } from "react";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProviders";

export const Header = () => {
  const currentUser = useContext(AuthContext);
  // console.log(currentUser)
  return (
    <div>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
};
