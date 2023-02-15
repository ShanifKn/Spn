import axios from "./AxiosInstance";

export const getTaskList = async (token, user) => {
  try {
    const response = await axios.get("/student/", {
      params: {
        user: user,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const sendAnswer = async (ans, id, token, user) => {
  try {
    const response = await axios.post(
      "/student/answer",
      { ans, id, user },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.status;
  } catch (err) {
    return err;
  }
};
