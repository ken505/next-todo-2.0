import { XCircleIcon } from "@heroicons/react/outline";
import { todoDelete, toggleComplete } from "../service/api";

export const TodoList = (props) => {
  const deleteHandler = (id) => {
    todoDelete(id);
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
        <p
          className="w-48 sm:w-96 p-3 rounded-md focus:outline-none focus:ring
                  dark:text-gray-200 dark:bg-gray-500"
        >
          {todo.content}
        </p>
        <XCircleIcon
          className="h-10 w-10 ml-3 cursor-pointer hover:opacity-60 dark:hover:opacity-5"
          onClick={() => deleteHandler(todo.id)}
        />
      </li>
    );
  });
  return <ul>{todoList}</ul>;
};
// <button type="button" onClick={() => deleteHandler(todo.id)}>s🗑</button>;
