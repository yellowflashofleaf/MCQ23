import axiosInstance from "../util/apiInstance";
const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";
const userLogin = async (email, password) => {
  //TODO: Change username to email
  let res = await axiosInstance.post("auth/jwt/create", {
    username: email,
    password: password,
  });
  localStorage.setItem(ACCESS_TOKEN, res.data.access);
  localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
};

const getEvents = async () => {
  let res = await axiosInstance.get("api/event/list", {});
  return res.data;
};

export { userLogin, getEvents };
