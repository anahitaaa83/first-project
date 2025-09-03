import { useContext, useState } from "react";
import Useritem from "./Useritem";
import { Usercontext } from "./Usercontext";
import AddUsers from "./addUsers";

const Userlist = () => {
  const { users } = useContext(Usercontext);
  const [showModal, setshowModal] = useState(false);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <h1 className="px-4 py-5 text-lg leading-6 font-medium text-gray-900">
        لیست کاربران
      </h1>
      <div className="flex justify-end p-5">
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded "
          onClick={() => setshowModal(true)}
        >
          ایجاد کاربر
        </button>

        {showModal && <AddUsers setshowModal={setshowModal} />}
      </div>
      <ul className="border-t border-gray-200 divide-y divide-gray-200 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <li key={user.id} className="px-4 py-4 sm:px-6">
            <Useritem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userlist;
