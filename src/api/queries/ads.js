import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getAds = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.ADS);
    return data;
  };
  