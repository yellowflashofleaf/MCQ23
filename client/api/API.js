import axiosInstance from "../util/apiInstance";

const fetchData = async (url) => {
  let res = await axiosInstance.get(url, {});
  return res.data;
};
export { fetchData };
