export default function ArrayBars({ array, comparing }) {
  return (
    <div className="flex items-end justify-center h-64 gap-1 p-4 bg-white shadow-md rounded-md">
      {array.map((value, idx) => {
        let color = "bg-blue-500";

        if (comparing?.includes(idx)) {
          color = "bg-red-500"; // highlight comparison
        }

        return (
          <div
            key={idx}
            className={`${color} rounded-t`}
            style={{ height: `${value * 3}px`, width: "20px" }}
          ></div>
        );
      })}
    </div>
  );
}
