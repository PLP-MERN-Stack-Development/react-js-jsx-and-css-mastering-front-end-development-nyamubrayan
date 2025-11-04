import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex gap-6 text-lg font-medium">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/tasks" className="hover:underline">Tasks</NavLink>
          <NavLink to="/posts" className="hover:underline">Posts</NavLink>
        </div>

        <Button onClick={toggleTheme}>
          {theme === "light" ? " Dark" : " Light"}
        </Button>
      </div>
    </nav>
  );
}
