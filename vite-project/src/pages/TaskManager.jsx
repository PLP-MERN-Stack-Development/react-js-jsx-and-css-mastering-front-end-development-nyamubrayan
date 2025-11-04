import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 space-y-4">
      <Card title="Task Manager">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="p-2 border rounded w-full dark:bg-gray-700"
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="bg-blue-600 text-white" onClick={addTask}>
            Add
          </Button>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 mb-4">
          <Button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gray-300 dark:bg-gray-700" : ""}
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "bg-gray-300 dark:bg-gray-700" : ""}
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "bg-gray-300 dark:bg-gray-700" : ""}
          >
            Completed
          </Button>
        </div>

        {/* TASK LIST */}
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between p-2 rounded border dark:border-gray-700 dark:bg-gray-800"
            >
              <span
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>

              <Button
                onClick={() => deleteTask(task.id)}
                className="bg-red-600 text-white"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
