import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getSettings = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.SETTINGS);
    return data;
  };