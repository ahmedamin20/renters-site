import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getCategories = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.CATEGORIES);
    return data;
  };

