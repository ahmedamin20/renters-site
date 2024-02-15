import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getProfile = async () => {
  const { data } = await defaultAPI.get(API_ENDPOINTS.PROFILE);
  return data;
};

export const updateProfile = async (body) => {
  const { data } = await defaultAPI.postForm(API_ENDPOINTS.PROFILE, body);
  return data;
};
export const updatePassword = async (body) => {
  const { data } = await defaultAPI.put(API_ENDPOINTS.PASSWORD, body);
  return data;
};
