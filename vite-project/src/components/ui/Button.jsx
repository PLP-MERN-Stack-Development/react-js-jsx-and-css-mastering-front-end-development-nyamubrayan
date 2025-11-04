export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium border hover:opacity-80 transition ${className}`}
    >
      {children}
    </button>
  );
}
