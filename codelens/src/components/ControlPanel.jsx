export default function ControlPanel({ onGenerate }) {
  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <button
        onClick={onGenerate}
        className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Generate New Array
      </button>
    </div>
  );
}
