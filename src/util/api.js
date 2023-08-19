import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN = process.env.REACT_APP_API_MOVIES;

const headers = {
  Authorization: "bearer " + TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
