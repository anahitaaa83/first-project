import { Link, Outlet } from "react-router-dom"; // درست شد
import useFetch from "/src/getData.js";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="text-blue-600 text-lg font-medium">
          درحال دریافت اطلاعات...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
        خطا... {error}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/users/Add-user" 
        className={`px-6 py-3 rounded !no-underline font-medium transition-all duration-200 bg-blue-600`}
      >
        کاربران
      </Link>

      <Outlet /> {/* اینجا مدال باز میشه */}

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        لیست کاربران
      </h2>
      <ul className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
        {data.map((user) => (
          <li
            key={user.id}
            className="p-4 hover:bg-blue-50 transition-colors duration-150"
          >
            <Link
              to={`${user.id}`} state={{user}}
              className="flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center mr-3 justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="font-medium text-gray-900">{user.name}</div>
              </div>
              <div className="mt-2 sm:mt-0">
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {user.email}
                </a>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
