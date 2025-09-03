import Users from "./users";
import Posts from "../src/posts";
import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom"; // درست شد
import Adduser from "./Adduser";
import UserDetail from "./UserDetail";
import NotFoundPage from "./Notfound";

const App = () => {
 const navigate=useNavigate()
 const handlesomeAction=()=>{
  //اول یه عملیات انجام میشه 
  //میره ری دایرکت میشه
  navigate("/users")
 }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            React App
          </h1>

          {/* دکمه‌ها */}
          <div className="flex justify-center mb-8 gap-4">
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `px-6 py-3 rounded font-medium transition-all duration-200  ${
                  isActive
                    ? "bg-indigo-600 text-white "
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } `
              }
            >
              کاربران
            </NavLink>

            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `px-6 py-3 rounded font-medium transition-all duration-200  ${
                  isActive
                    ? "bg-indigo-600 text-white "
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } `
              }
            >
              پست ها
            </NavLink>
          </div>
          <div className="p-6 mt-20">
            <h1 className="text-center">به اپلیکیشن من خوش آمدید</h1>
            <button onClick={handlesomeAction}  className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">انجام عملیات و ریداریکت</button>

          </div>

          {/* محتوای اصلی */}
          <div>
            <Routes>
              <Route path="/users" element={<Users />}>
                <Route path=":id" element={<UserDetail />} /> {/* مسیر nested برای مدال */}
              </Route>
              <Route path="/" element={<navigate to={"/users"} />}></Route>
              <Route path="/users/Add-user" element={<Adduser />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
