import { useEffect, useReducer } from "react";

const initialstate = {
  data: null,
  loading: true,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH-START":
      return { data: null, loading: true, error: null };
    case "FETCH-SUCCESS":
      return { data: action.payload, loading: false, error: null };
    case "FETCH-ERROR":
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(dataReducer, initialstate);

  useEffect(() => {
    dispatch({ type: "FETCH-START" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH-SUCCESS", payload: data }))
      .catch(() =>
        dispatch({ type: "FETCH-ERROR", payload: "خطا در گرفتن اطلاعات" })
      );
  }, []);

  if (state.loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 ">
        <div className="animate-pulse flex flex-col items-center ">
          <div className="rounded-full h-16 w-16 bg-indigo-400 mb-4 "></div>
          <p className="text-indigo-600 font-semibold text-xl ">
            در حال دریافت اطلاعات...
          </p>
        </div>
      </div>
    );

  if (state.error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg border-2 border-red-400">
          <p className="text-red-600 text-lg font-medium">{state.error}</p>
        </div>
      </div>
    );

  // ✅ حالت موفقیت
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-6">لیست کاربران</h1>
      <ul className="bg-white shadow-lg rounded-lg p-6 space-y-3 w-full max-w-md">
        {state.data.map((user) => (
          <li
            key={user.id}
            className="p-3 border-b last:border-none border-gray-200"
          >
            <p className="font-semibold text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
