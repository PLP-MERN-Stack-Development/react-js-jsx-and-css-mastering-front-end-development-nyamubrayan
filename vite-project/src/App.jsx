import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Posts from "./pages/Posts";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
}
