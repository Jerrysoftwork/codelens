export default function ArrayBars({ array, comparing, sorted }) {
  return (
    <div className="flex items-end gap-1 h-full">
      {array.map((value, idx) => {
        let color = "bg-blue-500"; // default

        if (comparing.includes(idx)) {
          color = "bg-red-500"; // comparing
        } else if (sorted.includes(idx)) {
          color = "bg-green-500"; // sorted
        }

        return (
          <div
            key={idx}
            className={`${color} rounded-t`}
            style={{
              height: `${value * 1.5}px`,
              width: "20px",
              transition: "height 0.2s ease, background-color 0.2s ease",
            }}
          ></div>
        );
      })}
    </div>
  );
}
