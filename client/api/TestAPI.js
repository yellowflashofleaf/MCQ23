import axiosInstance from "../util/apiInstance";

const fetchQuestions = async (id) => {
    let res = await axiosInstance.get(`api/question/list/${id}`, {});
    return res.data;
};

export { fetchQuestions };
