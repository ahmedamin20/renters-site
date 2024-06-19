import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getCategories = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.CATEGORIES, {params:{
      per_page:100
    }});
    return data;
  };

