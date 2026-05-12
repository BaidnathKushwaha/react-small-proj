import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-black");

  const colors = [
    { name: "Red", class: "bg-red-600", text: "text-white" },
    { name: "Green", class: "bg-green-600", text: "text-white" },
    { name: "Blue", class: "bg-blue-600", text: "text-white" },
    { name: "Olive", class: "bg-lime-700", text: "text-white" }, 
    { name: "Gray", class: "bg-gray-600", text: "text-white" },
    { name: "Yellow", class: "bg-yellow-400", text: "text-black" },
    { name: "Pink", class: "bg-pink-400", text: "text-black" },
    { name: "Purple", class: "bg-purple-600", text: "text-white" },
    { name: "Lavender", class: "bg-violet-300", text: "text-black" },
    { name: "White", class: "bg-white", text: "text-black" },
    { name: "Black", class: "bg-black", text: "text-white" },
  ];

  return (
    <div className={`w-full h-screen ${bgColor} transition-colors duration-300`}>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2
                      bg-white rounded-full shadow-xl
                      flex gap-2 px-4 py-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setBgColor(color.class)}
            className={`${color.class} ${color.text}
                        px-4 py-1 rounded-full text-sm font-medium
                        hover:scale-105 transition-transform`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
