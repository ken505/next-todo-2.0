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
      <li className="flex" key={todo.id}>
        <input
          className=" h-4 w-4 text-blue-500"
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => checkHandler(todo.id)}
        />
        {todo.content}
        <XCircleIcon
          className="h-5 w-5 text-blue-500"
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
