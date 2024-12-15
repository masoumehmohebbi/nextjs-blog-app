import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  patch: app.post,
  delete: app.delete,
  put: app.put,
};

export default http;
