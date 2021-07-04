import toast, { Toaster } from "react-hot-toast";
import { InformationCircleIcon } from "@heroicons/react/outline";

const notify = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white dark:bg-gray-300 
        shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex-shrink-0 pt-0.5">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-600">
              About Dark Mode 🌞/🌙
            </p>
            <p className="mt-1 text-sm text-gray-500">
              The dark mode of this app is linked to your browser settings.
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 
                    flex items-center justify-center text-sm font-medium 
                  text-gray-600 hover:text-gray-500 
                    focus-within:dark focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  ));

export const ThemeInfoToast = () => {
  return (
    <div className="flex flex-col fixed top-3 right-3">
      <button onClick={notify}>
        <InformationCircleIcon className="h-8 w-8 cursor-pointer hover:opacity-70 focus-within:dark:opacity-40" />
      </button>
      <Toaster />
    </div>
  );
};
// focus:ring-2 focus:ring-indigo-500
