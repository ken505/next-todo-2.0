import { Dashboard } from "../src/components/Dashboard";

export const Home = () => {
  return (
    <div
      className="min-h-screen py-12
                text-xl font-mono text-gray-100 dark:text-gray-300
                bg-gradient-to-tr 
              from-pink-400 via-blue-300 to-green-200
              dark:from-indigo-700 dark:via-purple-600 dark:to-pink-500"
    >
      <p className="flex justify-center mb-5 font-bold">Next Todo-App</p>
      <Dashboard />
    </div>
  );
};
export default Home;
