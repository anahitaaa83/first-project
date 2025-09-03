import { useState, useContext } from "react";
import { Usercontext } from "./Usercontext";

const AddUsers = ({ setshowModal }) => {
  const { users, setUsers } = useContext(Usercontext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    setUsers([...users, newUser]); // اضافه کردن کاربر جدید
    setshowModal(false); // بستن مودال
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">ایجاد کاربر جدید</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">نام</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border rounded p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setshowModal(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              لغو
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
