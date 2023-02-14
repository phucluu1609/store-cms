import axios from "axios";

const axiosInstance = () => {
  const axiosClient = axios.create({
    baseURL: process.env.BACKEND_API_DOMAIN,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosClient.interceptors.request.use((request) => request);

  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
    },
    (error) => {
      throw error;
    }
  );

  return axiosClient;
};

const axiosCustom = {
  getAsync(url) {
    return axiosInstance().get(url);
  },
  postAsync(url, data) {
    return axiosInstance().post(url, data);
  },
  putAsync(url, data, config) {
    return axiosInstance().put(url, data, config);
  },
  deleteAsync(url, data) {
    return axiosInstance().delete(url, {
      headers: {
        Authorization: "authorizationToken",
      },
      data,
    });
  },
};
export default axiosCustom;
