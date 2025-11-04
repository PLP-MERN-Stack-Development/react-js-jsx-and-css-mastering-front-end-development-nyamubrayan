import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="flex gap-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/tasks" className="hover:underline">Tasks</NavLink>
        <NavLink to="/posts" className="hover:underline">Posts</NavLink>
      </div>
    </nav>
  );
}
