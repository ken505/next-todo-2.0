import { useState, useEffect, useContext } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProviders";
import { addTodo, initGet } from "../service/api";
import { Header } from "../components/Header";
import { TodoList } from "./TodoList";
import { signInWithGoogle } from "../service/firebase";

export const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(inputName)
  // console.log(todos);

  useEffect(() => {
    initialDataFetch();
  }, [currentUser]);

  const initialDataFetch = async () => {
    if (dig(currentUser, "currentUser", "uid")) {
      const targetUserData = await initGet(currentUser.currentUser.uid);
      await setTodos(targetUserData);
    }
  };

  const formRender = () => {
    let formRenderDom;
    {
      dig(currentUser, "currentUser", "uid")
        ? (formRenderDom = (
            <form className="flex justify-center items-center">
              <Header />
              <input
                className="ml-3 w-48 sm:w-96 p-3
                        text-gray-500 dark:text-gray-300
                          rounded-md focus:outline-none focus:ring
                        placeholder-gray-400
                        dark:bg-gray-500"
                placeholder="New Task?"
                value={inputName}
                onChange={(e) => setInputName(e.currentTarget.value)}
              />
              {/* <button
                type="button"
                disabled={inputName.length > 0 ? false : true}
                onClick={() => post()}
              >
                Add
              </button> */}
              <PlusCircleIcon
                className="h-10 w-10 ml-3 
                          cursor-pointer hover:opacity-60 dark:hover:opacity-5"
                disabled={inputName.length > 0 ? false : true}
                type="button"
                onClick={() => post()}
              />
            </form>
          ))
        : (formRenderDom = (
            // <form onClick={signInWithGoogle}>Login</form>
            // null
            <Header />
          ));
    }

    return formRenderDom;
  };

  const post = async () => {
    await addTodo(inputName, currentUser.currentUser.uid);
    // ↓ post 後 input 欄に空文字をセット
    await setInputName("");
    // acync awit と ↓ の読み込みで post 内容をレンダリング
    initialDataFetch();
  };

  return (
    <div>
      {formRender()}
      <TodoList todos={todos} initialDataFetch={initialDataFetch} />
    </div>
  );
};
