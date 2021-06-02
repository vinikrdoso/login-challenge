import axios from "axios";

export const api = axios.create({
  baseURL: "https://wiser-login-challenge.vercel.app/api",
});
