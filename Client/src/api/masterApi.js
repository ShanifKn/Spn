import axios from "./AxiosInstance";

export const addTask = async (Data, token) => {
  try {
    const response = await axios.post("/master/add", Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response;
    return data;
  } catch (err) {
    return err;
  }
};

export const getResult = async (Data, token) => {
  try {
    const response = await axios.post("/master/result", Data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response;
    return data;
  } catch (err) {
    return err;
  }
};

export const getTasks = async (token) => {
  try {
    const response = await axios.get("/master/tasklist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getTask = async (id, token) => {
  try {
    const response = await axios.get(`/master/task`, {
      params: {
        id: id,
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

export const getApprovalist = async (token) => {
  try {
    const response = await axios.get(`/master/response`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
