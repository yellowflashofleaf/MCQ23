import axiosInstance from "../util/apiInstance";

const fetchQuestions = async (id) => {
  let res = await axiosInstance.get(`api/question/list/${id}`, {});
  return res.data;
};

const sendAnswer = async (question) => {
  let res = await axiosInstance.patch(`api/question/answer`, question);
  return res.data;
};

export { fetchQuestions ,sendAnswer};
