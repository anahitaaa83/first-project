import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"; // درست شد

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("خطا در دریافت اطلاعات");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const Location=useLocation()
   
  const{user:selectedUser}=Location.state
  console.log(selectedUser);
  
  

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

  if (!user) return null;

  const initials = user.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="fixed w-full h-screen left-0 top-0 z-20 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-1/3 py-5 rounded-2xl shadow">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600 text-white text-xl font-bold">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.username}</p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              اطلاعات شخصی
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <span className="font-semibold">ایمیل:</span>{" "}
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {user.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">تلفن:</span> {user.phone}
              </li>
              <li>
                <span className="font-semibold">آدرس:</span>{" "}
                {user.address?.city}, {user.address?.street}
              </li>
              <li>
                <span className="font-semibold">وبسایت:</span>{" "}
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </li>
              <li>
                <span className="font-semibold">شرکت:</span>{" "}
                {user.company?.name}
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">مهارت‌ها</h2>
            <div className="flex flex-wrap gap-2">
              {["Tailwind", "CSS", "HTML", "JavaScript", "React"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
