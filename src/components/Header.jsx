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
            <LogoutIcon
              className="h-10 w-10 cursor-pointer hover:opacity-60 dark:hover:opacity-5"
              onClick={logOut}
            />
          ))
        : (changeLogButtonDom = (
            <div className="flex justify-center items-center">
              <LoginIcon
                className="h-8 w-8 mr-1 cursor-pointer hover:opacity-60 dark:hover:opacity-50"
                onClick={signInWithGoogle}
              />
              <p>Google Login</p>
            </div>
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
