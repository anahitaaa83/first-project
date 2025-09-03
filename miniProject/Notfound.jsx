import React from 'react';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate=useNavigate()
     const redirect=()=>{
        navigate("/users")
     }
     const redirect2=()=>{
        navigate("/")

     }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          {/* شماره خطا */}
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-indigo-600">404</h1>
          </div>
          
          {/* عنوان و متن توضیحی */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">صفحه مورد نظر یافت نشد!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
          </p>
          
          {/* دکمه‌های اقدام */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={redirect}  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              مشاهده کاربران
            </button>
            <button onClick={redirect2} className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              بازگشت به خانه
            </button>
          </div>
          
          {/* لینک راهنمایی */}
          <p className="mt-8 text-sm text-gray-500">
            Routing بر
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;