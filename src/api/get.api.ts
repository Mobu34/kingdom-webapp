import axios from "axios";
import { API } from "../utils/constants";

export const apiGetItems = async () => {
  try {
    const response = await axios.get(`${API}/items`);

    if (response.status === 200) return response.data;
    else console.log("ERROR WHEN FETCHING ALL ITEMS");
  } catch (error) {
    // error
  }
};
