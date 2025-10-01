/* Displays bars for the array */
export default function ArrayBars({ array }) {
  return (
    <div className="flex items-end justify-center h-64 gap-1 p-4 bg-white shadow-md rounded-md">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="bg-blue-500 rounded-t"
          style={{ height: `${value * 3}px`, width: "20px" }}
        ></div>
      ))}
    </div>
  );
}
