export default function Card({ title, children }) {
  return (
    <div className="p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800 transition duration-200 hover:shadow-xl">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
