import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [notification,setnotification]=useState(null);
  //show notification when count is multiple of 10
   useEffect(()=>{
    if (count % 10===0 && count !==0) {
      setnotification(`تبریک شما به ${count}رسیدید😍`);
      setTimeout(()=>setnotification(null),3000);
      
    }
   },[count]);
  return (
    <div className="flex items-center justify-center h-screen bg-blue-600">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-4">شمارنده هوشمند</h1>

        {/* عدد */}
        <div className="relative bg-indigo-700 text-white rounded-xl p-6 text-6xl font-bold">
          {count}
          <span className="absolute top-2 right-2 bg-cyan-400 text-xs text-white px-2 py-1 rounded-full">
            {count % 2 === 0 ? "زوج" : "فرد"}
          </span>
        </div>

        {/* دکمه‌ها */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-3xl w-12 h-12 rounded-xl shadow"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-3xl w-12 h-12 rounded-xl shadow"
          >
            +
          </button>
        </div>

        {/* ریست */}
        <button
          onClick={() => setCount(0)}
          className="mt-4 text-sm text-white underline"
        >
          بازنشانی
        </button>
      </div>
      {notification && (
        <div className={`fixed bottom-4 right-4 bg-blue-400 text-white rounded-lg shadow-xl p-4 transition-all transform animate-bounce `}>
          {notification}
        </div>
      )}
    </div>
  );
};


  

     
  


export default App
