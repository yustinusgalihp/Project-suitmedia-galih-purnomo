import axios from "axios";

export const axiosWithConfig = axios.create({
  baseURL: "https://suitmedia-backend.suitdev.com",
  headers: {
    "Content-Type": "application/json",
  },
});
