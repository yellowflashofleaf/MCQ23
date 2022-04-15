import axiosInstance from "../util/apiInstance";
const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";
const userLogin = async (email, password) => {
  //TODO: Change username to email
  try {
    let res = await axiosInstance.post("token/", {
      username: email,
      password: password,
    });
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
  } catch {
    console.log("error");
  }
};

export { userLogin };
