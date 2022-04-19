import axiosInstance from "../util/apiInstance";

const fetchData = async (url) => {
  let res = await axiosInstance.get(url, {});
  console.log(res.data)
  return res.data;
};
export { fetchData };
