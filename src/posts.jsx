import useFetch from '/src/getData.js';

const Posts = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

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
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        پست‌های اخیر
      </h2>
      <ul className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
        {data.map((post) => (
          <li
            key={post.id}
            className="p-4 hover:bg-blue-50 transition-colors duration-150"
          >
            <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
