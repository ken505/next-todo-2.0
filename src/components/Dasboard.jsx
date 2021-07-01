import { useState, useEffect, useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProviders";
// import ToDoList from "./ToDoList";

export const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  // console.log(inputName)
  const formRender = () => {
    let formRenderDom;
    {
      dig(currentUser, "currentUser", "uid")
        ? (formRenderDom = (
            <form>
              <input
                placeholder="Your todo"
                onChange={(e) => setInputName(e.currentTarget.value)}
              />
              <button>Add</button>
            </form>
          ))
        : (formRenderDom =
            // <form onClick={signInWithGoogle}>Login</form>
            null);
    }
    return formRenderDom;
  };
  return <div>{formRender()}</div>;
};
