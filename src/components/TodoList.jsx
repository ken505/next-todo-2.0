// import { useState, useEffect, useContext } from "react";
// import dig from "object-dig";
// import { signInWithGoogle } from "../service/firebase";
// import { AuthContext } from "../providers/AuthProviders";
import { XCircleIcon } from "@heroicons/react/outline";
import { todoDelete, toggleComplete } from "../service/api";

export const TodoList = (props) => {
  const deleteHandler = (id) => {
    todoDelete(id);
    // ↓ 講座の動画上では props の表記、説明は無いので記述漏れに注意
    // あと、動作する時としない時があるのが謎い
    props.initialDataFetch();
  };

  const checkHandler = async (id) => {
    await toggleComplete(id);
    props.initialDataFetch();
  };

  const todoList = props.todos.map((todo) => {
    return (
      <li className="flex justify-center items-center mt-3" key={todo.id}>
        <input
          className="h-8 w-8 mr-5 cursor-pointer form-checkbox rounded-full 
                  text-gray-300 dark:text-gray-400
                    hover:opacity-60 dark:hover:opacity-5"
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => checkHandler(todo.id)}
        />
        <p className="w-48 sm:w-96 p-3 rounded-md focus:outline-none focus:ring
                    dark:text-gray-200 dark:bg-gray-500">{todo.content}</p>
        <XCircleIcon
          className="h-10 w-10 ml-3 cursor-pointer hover:opacity-60 dark:hover:opacity-5"
          onClick={() => deleteHandler(todo.id)}
        />
        {/* <button
          // ↓ いらなくね？
          // form ならいるかもしれんけど
          // type="button"
          onClick={() => deleteHandler(todo.id)}
        >
          🗑
        </button> */}
      </li>
    );
  });
  return <ul>{todoList}</ul>;
};
