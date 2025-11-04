export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium border hover:cale-105 active:scale-95 transition-all duration-200 ${className}`}s
    >
      {children}
    </button>
  );
}
