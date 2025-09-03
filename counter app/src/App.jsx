
import { useRef, useState } from "react";

function App() {
 const [count, setCount] = useState(0);
 let countValue=useRef(0);
 const handleClick=()=>{
  countValue.current+=2;
  setCount(countValue.current+1);

 };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-pink-500 to-purple-700">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-80">
        {/* Title */}
        <h1 className="text-xl font-bold mb-6">Counter App</h1>

        {/* Circle */}
        <div className="flex items-center justify-center w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white text-4xl font-bold">
          {count}
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
        >
          افزایش
        </button>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600">
          برای افزایش عدد شماره‌نده کلیک کنید
        </p>
      </div>
    </div>
  );
}



export default App
