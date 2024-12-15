import http from "./httpServices";

export async function signupApi() {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}
