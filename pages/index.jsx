import { Header } from "../src/components/Header";
import { Dashboard } from "../src/components/Dashboard";

export const Home = () => {
  return (
    <div
      className="min-h-screen
      px-5 py-16 
      font-mono text-gray-100 dark:text-gray-400
      bg-gradient-to-tr 
    from-purple-400 via-blue-300 to-green-100
    dark:from-gray-900 dark:via-pink-500 dark:to-purple-800"
    >
      <Header />
      <Dashboard />
    </div>
  );
};
export default Home;
