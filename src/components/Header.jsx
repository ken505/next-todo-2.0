import { useContext } from "react";
import { signInWithGoogle, logOut } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProviders";

export const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  const changeLogButton = () => {
    let changeLogButtonDom;
    {
      dig(currentUser, "currentUser", "uid")
        ? (changeLogButtonDom = <button onClick={logOut}>Logout</button>)
        : (changeLogButtonDom = (
            <button onClick={signInWithGoogle}>Login</button>
          ));
    }
    return changeLogButtonDom;
  };
  return <div>{changeLogButton()}</div>;
};

// export const Header = () => {
//   const currentUser = useContext(AuthContext);
//   console.log(currentUser)
//   const changeLogButton = () => {
//     let changeLogButtonDom;
//     if (dig(currentUser, "currentUser")) {
//       changeLogButtonDom = <button onClick={logOut}>Logout</button>;
//     } else {
//       changeLogButtonDom = <button onClick={signInWithGoogle}>Login</button>;
//     }
//     return changeLogButtonDom;
//   };
//   return <div>{changeLogButton()}</div>;
// };
