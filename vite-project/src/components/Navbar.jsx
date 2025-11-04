import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
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
