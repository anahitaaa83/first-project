import { useEffect, useRef, useState } from "react"


function App() {
 const[inputvalue,setinputValue]=useState("");
 const inputRef=useRef(null);
 useEffect(()=>{
   inputRef.current.focus();
 },[])
 return(
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-400 to-blue-600">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">
        {/* Title */}
        <h1 className="text-xl font-bold mb-6">فرم ورودی</h1>

        {/* Input with icon */}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputvalue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder="متن خود را وارد کنید..."
            className="w-full border-2 border-green-400 rounded-lg p-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Question Icon */}
          <span className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-green-400 text-white font-bold text-sm cursor-pointer">
            ?
          </span>
        </div>

        {/* Submitted text */}
        {inputvalue && (
          <p className="mt-4 p-2 bg-gray-100 rounded-md text-gray-700">
            متن وارد شده:{" "}
            <span className="font-bold text-green-600">{inputvalue}</span>
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
         
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            ارسال
          </button>
          <button
            onClick={()=>setinputValue("")}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            پاک کردن
          </button>
        </div>
      </div>
    </div>
 );
}


export default App
