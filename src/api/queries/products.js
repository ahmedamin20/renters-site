import { API_ENDPOINTS } from '../../utils/config/constants';
import defaultAPI from '../axios';
export const getAllProducts = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.PRODUCTS);
    return data;
  };
  export const getOneProducts = async (id) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.PRODUCTS}/${id}`);
    return data;
  };