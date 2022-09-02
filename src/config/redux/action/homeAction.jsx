import Axios from "axios";

export const setDataBlog = (page) => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
      .then((result) => {
        const response = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: response.data });
        dispatch({ type: "UPDATE_DATANYA", payload: response });
        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: response.current_page,
            totalPage: Math.ceil(response.total_data / response.per_page),
          },
        });
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  };
};

export const setPage = () => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=1&perPage=2`)
      .then((result) => {
        const response = result.data;
        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: response.current_page,
            totalPage: Math.ceil(response.total_data / response.per_page),
          },
        });
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  };
};

export const setDatanya = () => {
  return (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=1&perPage=2`)
      .then((result) => {
        const response = result.data;
        dispatch({ type: "UPDATE_DATANYA", payload: response });
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  };
};
