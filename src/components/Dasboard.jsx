import { useState, useEffect, useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProviders";
import { addTodo } from "../service/api";
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
                value={inputName}
                onChange={(e) => setInputName(e.currentTarget.value)}
              />
              <button type="button" onClick={() => post()}>
                Add
              </button>
            </form>
          ))
        : (formRenderDom =
            // <form onClick={signInWithGoogle}>Login</form>
            null);
    }
    return formRenderDom;
  };

  const post = () => {
    addTodo(inputName, currentUser.currentUser.uid);
    setInputName("");
    // fetch();
  };

  return <div>{formRender()}</div>;
};
