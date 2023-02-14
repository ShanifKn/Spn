import axios from "./AxiosInstance";

// * Registration *//
export const register = async (Data) => {
  try {
    const response = await axios.post(`/auth/register`, Data);
    const data = await response.data;
    return data;
  } catch (e) {
    return e.response.data.error;
  }
};

// * Login *//
export const login = async (email, password) => {
  try {
    const response = await axios.post(`/auth/login`, {
      email: email,
      password: password,
    });
    const data = response.data;
    return data;
  } catch (e) {
    return e.response;
  }
};

// * admin login *//

export const adminLogin = async (email, password) => {
  try {
    const response = await axios.post(`/auth/adminlogin`, {
      email: email,
      password: password,
    });
    const data = response.data;
    return data;
  } catch (e) {
    return e.response;
  }
};
