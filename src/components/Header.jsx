import { useContext } from "react";
import { signInWithGoogle, logOut } from "../service/firebase";
import dig from "object-dig";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import { AuthContext } from "../providers/AuthProviders";

export const Header = () => {
  const currentUser = useContext(AuthContext);
  // console.log(currentUser);
  const changeLogButton = () => {
    let changeLogButtonDom;
    {
      dig(currentUser, "currentUser", "uid")
        ? // ? (changeLogButtonDom = <button onClick={logOut}>Logout</button>)
          (changeLogButtonDom = (
            <LogoutIcon className="h-5 w-5 text-blue-500" onClick={logOut} />
          ))
        : (changeLogButtonDom = (
            <LoginIcon
              className="h-5 w-5 text-blue-500"
              onClick={signInWithGoogle}
            />
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
