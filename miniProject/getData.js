import { useEffect, useReducer } from "react";

const initialState = {
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

// ✅ هوک شخصی
 const useFetch = (url) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH-START" });
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH-SUCCESS", payload: data }))
      .catch(() =>
        dispatch({ type: "FETCH-ERROR", payload: "خطا در گرفتن اطلاعات" })
      );
  }, [url]);

  return state; // {data, loading, error}
};


export default useFetch;