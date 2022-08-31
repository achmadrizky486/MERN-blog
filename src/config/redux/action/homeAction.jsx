import Axios from "axios";

export const setDataBlog = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const response = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: response.data });
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  };
  //   return { type: "UPDATE_DATA_BLOG", payload };
};
