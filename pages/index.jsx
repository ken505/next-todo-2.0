import { Header } from "../src/components/Header";
import { Dashboard } from "../src/components/Dashboard";

export const Home = () => {
  return (
    <div
      className="min-h-screen
      px-5 py-16 
      font-mono text-gray-100 dark:text-gray-400
      bg-gradient-to-tr 
    from-pink-400 via-blue-300 to-green-200
    dark:from-indigo-700 dark:via-purple-600 dark:to-pink-500"
    >
      <Header />
      <Dashboard />
    </div>
  );
};
export default Home;
