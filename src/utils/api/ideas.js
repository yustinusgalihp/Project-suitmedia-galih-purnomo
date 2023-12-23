import { axiosWithConfig } from "./axiosWithConfig";

export const getIdeas = async (params) => {
  try {
    let query = "";

    if (params) {
      const queryParams = [];

      for (const key in params) {
        if (key === "page[number]" || key === "page[size]") {
          queryParams.push(`${key}=${encodeURIComponent(params[key])}`);
        } else {
          queryParams.push(`${key}=${params[key]}`);
        }
      }

      query = queryParams.join("&");
    }

    const url = query ? `/api/ideas?${query}` : "/api/ideas";
    const response = await axiosWithConfig.get(url);

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
